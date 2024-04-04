import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // link com API
    console.log(`email: ${email}`);
  };

  return (
  <div className="ForgotPassword">
  <header className="ForgotPassword-header">
    <form onSubmit={handleSubmit} className="Box-Forgot">
      <h1>InfraAlerta</h1>
      <h2>Reset your   password</h2>
      <h4>Enter the email you want to reset your password to.</h4>
      <div className="forgot-email-container">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Reset Password</button>
      <p className="back-link">
        <Link to="/login">Back to Login</Link>
      </p>
    </form>
  </header>
</div>
  );
}

export default ForgotPassword;