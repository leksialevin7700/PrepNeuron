import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import custom styling

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div className="home-container" id="home">
        <h1>Welcome to our website</h1>
        
        <div className="navigation">
          <Link to="/ece" className="nav-link">
            ECE
          </Link>
          <Link to="/cse" className="nav-link">
            CSE
          </Link>
          <Link to="/datascience" className="nav-link">
            DATASCIENCE <i className="fa fa-calendar" aria-hidden="true"></i>
          </Link>
          <Link to="/mech" className="nav-link">
            MECHANICAL<i className="fa fa-sticky-note" aria-hidden="true"></i>
          </Link>
          <a href="/quiz" className="nav-link">
          BIOMEDICAL
          </a>
          <a href="#" className="nav-link">
            EEE
          </a>
          <a href="#" className="nav-link">
            CIVIL
          </a>
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
