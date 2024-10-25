import React, { useState } from "react";
import "./LoginForm.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [action, setAction] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const registerLink = () => setAction(" active");
  const loginLink = () => setAction("");


  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/login", null, {
        params: {
          username: loginData.username,
          password: loginData.password,
        },
      });
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        navigate("/dashboard"); 
      }
    } catch (error) {
      setError("Invalid username or password.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerData.password) {
        setError("Password cannot be empty.");
        return;
    }

    try {
        const response = await axios.post("http://localhost:3001/api/register", registerData);
        if (response.status === 200) {
            console.log("Registration successful:", response.data);
            setAction(""); 
        }
    } catch (error) {
        setError("Error during registration. Please try again.");
    }
};

  return (
    <div className="background">
      <div>
        <Link to="/home" className="link home flex">
          <BiArrowBack className="icon" />
          <h2>Home</h2>
        </Link>
      </div>
      <div className="page">
        <div className={`wrapper${action}`}>
          <div className="form-box login">
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              {error && <p className="error-message">{error}</p>}
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                <label className="box">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Don't have an account? <a href="#" onClick={registerLink}>Register</a>
                </p>
              </div>
            </form>
          </div>

          <div className="form-box register">
            <form onSubmit={handleRegister}>
              <h1>Registration</h1>
              {error && <p className="error-message">{error}</p>}
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                <label className="box">
                  <input type="checkbox" />
                  Accept terms & conditions
                </label>
              </div>
              <button type="submit">Register</button>
              <div className="register-link">
                <p>
                  Already have an account? <a href="#" onClick={loginLink}>Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
