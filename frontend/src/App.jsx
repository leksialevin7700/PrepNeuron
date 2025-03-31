import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Import the ChatApp component
import Home from "./pages/Home"; // Import Home page component
import "./pages/Login.css";
import Xxx from "./pages/xxx";
import Quiz from "./pages/Quiz";
import Datascience from "./pages/datascience";
import Ece from "./pages/ece";
import Cse from "./pages/cse";
import Mech from "./pages/mech";
const App = () => {
  const [currentUser, setCurrentUser] = useState(null); // Define state for current user
  const [receiver, setReceiver] = useState(null); // Define state for receiver

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/" element={<Xxx />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<Quiz setCurrentUser={setCurrentUser} />} />
        <Route path="/datascience" element={<Datascience setCurrentUser={setCurrentUser} />} />
        <Route path="/ece" element={<Ece setCurrentUser={setCurrentUser} />} />
        <Route path="/cse" element={<Cse setCurrentUser={setCurrentUser} />} />
        <Route path="/mech" element={<Mech setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
};

export default App;
