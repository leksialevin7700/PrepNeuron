# ExamBuddy
ExamBuddy is a web-based platform designed to help students prepare for GATE and other competitive exams. It features a subject-wise quiz system, AI-powered chatbot, and secure user authentication to enhance learning. Built with React (Vite) &amp; Express.js, it provides instant feedback, explanations, and interactive assistance using OpenRouter AI.
Competitive Exam Preparation Platform with Integrated Chatbot
Project Overview
This web application is designed to help students prepare for GATE and other competitive exams. It provides subject-wise quiz questions, interactive learning resources, and an AI-powered chatbot for instant assistance. The platform currently includes datasets for Computer Science Engineering (CSE) and will be expanded to cover other subjects like ECE, Mechanical, and more.

Key Features
 Quiz System – Users can take subject-specific quizzes, receive instant feedback, and review explanations.
 AI Chatbot Integration – A chatbot powered by OpenRouter AI helps answer queries related to exam topics.
 User Authentication – Secure login and registration system using JWT-based authentication.
 Subject-wise Navigation – Dedicated sections for CSE, ECE, Mechanical, and other disciplines.
 Backend with MongoDB – Stores user data, quiz questions, and chatbot interactions.

Tech Stack & Frameworks
Frontend (React with Vite)
⚡ React.js – Used for building the user interface.
⚡ Vite – A fast build tool optimized for modern web development.
⚡ React Router – Enables seamless navigation between pages.
⚡ Axios – Handles API requests between the frontend and backend.
⚡ CSS – Styles the application for a clean UI.

Backend (Express.js & MongoDB)
🚀 Express.js – A lightweight framework for handling server-side logic.
🚀 MongoDB – Stores user authentication data, quiz questions, and chatbot responses.
🚀 Mongoose – Provides an elegant MongoDB object modeling for Node.js.
🚀 Axios – Used for making API calls to OpenRouter AI.
🚀 dotenv – Manages environment variables securely.
🚀 cors & body-parser – Enables smooth API communication.

AI Chatbot Integration
🤖 OpenRouter AI API – Used to generate responses to student queries.
🤖 Mistral-7B-Instruct Model – The AI model that powers chatbot interactions.

Development & Deployment Tools
🛠 Git & GitHub – Version control and code management.
🛠 VS Code – Preferred code editor for development.
🛠 npm/yarn – Package managers for managing dependencies.

Future Enhancements
🔹 Add datasets for ECE, Mechanical, and other subjects.
🔹 Implement performance tracking and analytics for students.
🔹 Deploy the application using Vercel (Frontend) & Render (Backend).
