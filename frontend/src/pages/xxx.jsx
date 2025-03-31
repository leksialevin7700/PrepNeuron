import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  font-family: 'Times New Roman', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: fadeIn 1.5s ease-in-out;
}

:root {
  --primary-color: #4e54c8;
  --secondary-color: #8f94fb;
  --text-color: #2a2a2a;
  --glass-bg: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.2);
}

/* Navbar with fade-in effect */
.glass-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  opacity: 0;
  animation: fadeInDown 1s ease-in-out forwards;
}

/* Animated Background Particles */
.bg-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.bg-animation span {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  bottom: -100px;
  animation: floating 20s infinite linear;
}

/* Floating Animation */
@keyframes floating {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-1500px) rotate(720deg);
    opacity: 0;
  }
}

/* Glassmorphism Card */
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-in-out forwards 0.5s;
}

/* Hero Text Animation */
.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInLeft 1s ease-in-out forwards 0.7s;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0;
  animation: fadeInRight 1s ease-in-out forwards 0.9s;
}

/* Buttons with glowing effect */
.glow-button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glow-button:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.glow-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 70%);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease;
  border-radius: 50%;
}

.glow-button:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes moveLeftToRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
}

.animated-text {
  display: inline-block;
  font-size: 3rem; /* Larger font */
  font-weight: 800;
  color: white;
  white-space: nowrap;
  position: absolute;
  left: 0;
  animation: moveLeftToRight 5s linear infinite;
}


`;

const StyledHomepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <div className="main-gradient">
        {/* Navigation */}
        <nav className="glass-nav px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
             
              <span className="animated-text text-3xl font-bold text-white">Gateforce</span>


            </div>
           
            
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-6 text-center">
          <div className="glassmorphism-card">
            <h1 className="hero-title glow-text">Welcome to Gateforce</h1>
            <p className="hero-subtitle">
            Success in GATE isn't just about intelligence; it's about resilience. Every problem you solve is a step forward, every concept you master is a victory, and every hour you study is an investment in your future. Remember - GATE is not just a test of your knowledge, but a test of your determination. The gate to your dreams is challenging to open, but with persistence and hard work, you hold the key.

            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => navigate('/login')} className="glow-button">
                Login
              </button>
              <button onClick={() => navigate('/register')} className="glow-button">
                Register
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default StyledHomepage;