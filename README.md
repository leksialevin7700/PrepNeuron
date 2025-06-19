
# PREPNEUROM 🎯

PrepNeuron is a web-based platform designed to help students prepare for GATE and other competitive exams. It features a subject-wise quiz system, AI-powered chatbot, and secure user authentication to enhance learning. Built with React (Vite) & Express.js, it provides instant feedback, explanations, and interactive assistance using OpenRouter AI.

---

## 🚀 Features

- **Quiz System:** Take subject-specific quizzes, get instant feedback, and review explanations.
- **AI Chatbot Integration:** Get real-time answers to exam-related queries using OpenRouter AI.
- **User Authentication:** Secure login & registration system with JWT authentication.
- **Subject-wise Navigation:** Sections for CSE, ECE, Mechanical, and other disciplines.
- **Backend with MongoDB:** Stores user data, quiz questions, and chatbot interactions.

---

## 🛠 Tech Stack & Frameworks

### Frontend (React + Vite)
- **React.js:** Building a responsive and dynamic UI.
- **Vite:** Fast build tool optimized for modern web development.
- **React Router:** Seamless page navigation.
- **Axios:** Manages API requests between frontend & backend.
- **CSS:** Enhances UI/UX with clean styling.

### Backend (Express.js + MongoDB)
- **Express.js:** Lightweight framework for server logic.
- **MongoDB:** Stores user authentication data, quizzes, and chatbot interactions.
- **Mongoose:** Simplifies MongoDB operations with object modeling.
- **Axios:** Calls OpenRouter AI API for chatbot responses.
- **dotenv:** Securely manages environment variables.
- **cors & body-parser:** Enables smooth API communication.

---

## 🤖 AI Chatbot Integration

- **OpenRouter AI API:** Generates responses for student queries.
- **Mistral-7B-Instruct Model:** Provides instant explanations & exam assistance.

---

## 🔧 Development Tools

- **Git & GitHub:** Version control & repository management.
- **VS Code:** Preferred editor for development.
- **npm/yarn:** Manages dependencies & packages.

---

## 🚀 Future Enhancements

- Add datasets for ECE, Mechanical, and other subjects.
- Implement performance tracking & analytics for students.
- Enhance chatbot with advanced NLP models.

---

## 📌 How to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/leksialevin7700/ExamBuddy.git
   cd ExamBuddy
   ```

2. **Install dependencies**
   ```bash
   npm install          # For frontend
   cd backend
   npm install          # For backend
   cd ..
   ```

3. **Run the application**
   ```bash
   npm run dev          # Start frontend (Vite)
   cd backend
   npm start            # Start backend (Express)
   ```

4. **Access the app**

   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

