import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // link com API
    console.log(`email: ${email}, Password: ${password}`);
  };

  return (
  <div className="Login">
  <header className="Login-header">
    <form onSubmit={handleSubmit} className="Box">
      <h1>InfraAlerta</h1>
      <h2>Login to your account</h2>
      <div className="email-container">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="v" type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </button>
        
        
        <a href="/forgot-password" className="forgot-link">Forgot your Password?</a>
      </div>
      <button type="submit">Login</button>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  </header>
</div>
  );
}

export default Login;