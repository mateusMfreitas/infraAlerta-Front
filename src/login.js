import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // link com API
    console.log(`Username: ${username}, Password: ${password}`);
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </button>
        <a href="/forgot-password" className="forgot-link">Forgot your Password?</a>
      </div>
      <button type="submit">Login</button>
      <p className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </form>
  </header>
</div>
  );
}

export default Login;