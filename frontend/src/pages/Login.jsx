import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'; // Import the CSS file here

const Login = ({ setCurrentUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
            
            // Log the response data
            console.log("Response Data:", res.data);
    
            // Set the username and token in localStorage after successful login
            localStorage.setItem("username", res.data.username);
            console.log("Stored Username:", localStorage.getItem("username"));
    
            localStorage.setItem("token", res.data.token);
            console.log("Stored Token:", localStorage.getItem("token"));
    
            setCurrentUser(res.data.username); // Optionally update state with the current username
    
            alert("Login successful!"); // Display alert on successful login
            navigate("/home"); // Redirect to users page after successful login
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
            alert(errorMessage); // Display error message in alert
        }
    };
    
    

    return (
        <div className="login-container">
            <div className="glass-effect">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    <a href="/auth/google">Sign In with Google</a>
                    <a href="/#">Forgot password?</a>
                </form>
                {/* Error paragraph removed since we are using alert */}
                <p>
                    New user? <Link to="/register" className="register-link">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
