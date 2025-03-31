import React from "react";
import { Link } from "react-router-dom";
import "./datascience.css"; // Import custom styling

const Home = () => {
  return (
    <>
    <h2>ECE</h2>
    
      {/* Home Section */}
      <div className="container" id="aaa">
      
        <div className="navigation">
          <Link to="#" className="nav-link">
            PRACTICE QUESTION
          </Link>
          <Link to="#" className="nav-link">
            DAILY QUIZ
          </Link>
          
        </div>
      </div>

      
    </>
  );
};

const sectionStyle = (background) => ({
  padding: "50px 20px",
  textAlign: "center",
  color: "white",
  minHeight: "100vh",
  background,
});

const inputStyle = {
  width: "80%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "none",
  fontSize: "1rem",
};

const textareaStyle = {
  ...inputStyle,
  height: "100px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  color: "white",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};


export default Home;
