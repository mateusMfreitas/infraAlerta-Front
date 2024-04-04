import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotPassword.css';
import api from '../services/api';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await api.post('http://localhost:5025/login/forgotPassword', {
        email: email
      })
        .then((response) => {
          //teste
          alert(response);
        })
        console.log(`email: ${email}`);
    } catch (error){
        console.error(error);
        //teste
        alert("Erro ao enviar email!")
      }
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