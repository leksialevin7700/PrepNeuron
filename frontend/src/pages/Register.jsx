import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Register handler function
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log("Sending register request:", { username, email, phoneNumber, password });
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                username,
                email,
                phoneNumber,
                password,
            });
            console.log("Register response:", response.data);
            alert(response.data.message); // Display backend message
            navigate("/"); // Redirect to Login page after successful registration
        } catch (error) {
            console.error("Registration failed:", error.response?.data || error.message);
            // Display error message from backend
            alert(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="login-container">
            <div className="glass-effect">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
