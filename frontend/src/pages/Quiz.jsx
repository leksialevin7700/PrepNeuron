import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";

const QuizChatbot = () => {
    const [subject, setSubject] = useState("gate_math");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [questionData, setQuestionData] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // Function to start quiz practice
    const startPractice = async () => {
        setCurrentIndex(0);
        setFeedback("");
        await loadQuestion(0);
    };

    // Function to load a question from backend
    const loadQuestion = async (index) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/get-question`, {
                params: { subject, index },
            });
            setQuestionData(response.data);
        } catch (error) {
            console.error("Error loading question:", error);
        }
        setLoading(false);
    };

    // Function to submit an answer
    const submitAnswer = async () => {
        if (!selectedAnswer) {
            alert("Please select an answer!");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:5000/submit-answer`, {
                subject,
                index: currentIndex,
                user_answer: selectedAnswer,
            });

            setFeedback(
                response.data.is_correct
                    ? "✅ Correct!"
                    : `❌ Wrong! Correct answer: ${response.data.correct_answer}`
            );
            setFeedback((prev) => prev + `\nℹ️ Explanation: ${response.data.explanation}`);
        } catch (error) {
            console.error("Error submitting answer:", error);
        }
    };

    // Function to move to the next question
    const nextQuestion = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setFeedback("");
        setSelectedAnswer("");
        loadQuestion(currentIndex + 1);
    };

    // Function to send a message to the chatbot
    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { role: "user", content: input };
        setMessages([...messages, newMessage]);

        try {
            const response = await axios.post("http://localhost:5000/chat", {
                message: input,
            });

            const botReply = { role: "bot", content: response.data.reply };
            setMessages([...messages, newMessage, botReply]);
        } catch (error) {
            console.error("Chatbot error:", error);
        }

        setInput("");
    };

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {/* Quiz Section */}
            <div style={{ flex: 1 }}>
                <h2>Competitive Exam Practice</h2>
                <label>Select Subject:</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="gate_math">GATE - Mathematics</option>
                    <option value="gate_database_questions">DS - DBMS</option>
                    <option value="gate_data_structure_questions">DS - Data Structure Algorithm</option>
                    <option value="gate_ai_questions">DS - Artificial intelligence</option>
                </select>
                <button onClick={startPractice}>Start Practice</button>

                {loading && <p>Loading...</p>}

                {questionData && questionData.question && (
                    <div>
                        <h2>{questionData.question}</h2>
                        <div>
                            {Object.keys(questionData.options).map((option) => (
                                <div key={option}>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={(e) => setSelectedAnswer(e.target.value)}
                                    />
                                    {questionData.options[option]}
                                </div>
                            ))}
                        </div>
                        <button onClick={submitAnswer}>Submit Answer</button>
                        {feedback && <p>{feedback}</p>}
                        {feedback && <button onClick={nextQuestion}>Next Question</button>}
                    </div>
                )}
            </div>

            {/* Chatbot Section */}
            <div className="chatbot-section">
                <h2>Chatbot</h2>
                <div className="chat-messages">
        {messages.map((msg, index) => (
            <p key={index} className={msg.role === "user" ? "user" : "bot"}>
                <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
            </p>
        ))}
                </div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default QuizChatbot;
