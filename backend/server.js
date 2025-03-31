const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const csvParser = require("csv-parser");
const http = require("http");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const axios = require("axios");
require("dotenv").config();

//  Secure API Key using environment variables
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const authRoutes = require("./routes/auth");


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 
// Routes
app.use("/api/auth", authRoutes);



 // Ensure you require mongoose

// MongoDB connection function
const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/gateforce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log this message
    console.log("Connected to MongoDB");
  } catch (error) {
    // If there's an error during connection, log it and exit the process
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

// Call the function to connect to MongoDB
connectDB();



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});



// Function to load questions from a CSV file
const loadQuestions = (subject) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, "questions", `${subject}.csv`);
    
    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      reject(new Error(`File not found: ${filePath}`));
      return;
    }

    const questions = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row) => {
        questions.push(row);
      })
      .on("end", () => {
        resolve(questions);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};


// Endpoint to get a question
app.get("/get-question", async (req, res) => {
  try {
    const { subject, index = 0 } = req.query;
    console.log("Received request for subject:", subject, "Index:", index);

    const questions = await loadQuestions(subject);

    if (index >= questions.length) {
      return res.json({ message: "No more questions available" });
    }

    const question = questions[index];
    res.json({
      question: question["Question"],
      options: {
        A: question["Option A"],
        B: question["Option B"],
        C: question["Option C"],
        D: question["Option D"],
      },
      correct_answer: question["Correct Answer"],
      explanation: question["Explanation"],
    });
  } catch (error) {
    console.error("Error loading questions:", error);  // Log the actual error
    res.status(500).json({ error: "Error loading questions" });
  }
});


// Endpoint to submit an answer
app.post("/submit-answer", async (req, res) => {
  try {
      const { subject, index, user_answer } = req.body;
      const questions = await loadQuestions(subject);

      if (index >= questions.length) {
          return res.json({ message: "Invalid question index" });
      }

      const question = questions[index];
      const isCorrect = user_answer.toUpperCase() === question["Correct Answer"];

      res.json({
          is_correct: isCorrect,
          correct_answer: question["Correct Answer"],
          explanation: question["Explanation"],
      });
  } catch (error) {
      res.status(500).json({ error: "Error processing answer" });
  }
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000", // Change to your site URL
          "X-Title": "GATE Chatbot", // Change to your app name
        },
      }
    );

    //  Check if the response is valid before accessing it
    if (!response.data || !response.data.choices || response.data.choices.length === 0) {
      return res.status(500).json({ error: "Invalid chatbot response" });
    }

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Chatbot error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Error processing chatbot request" });
  }
});


// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

