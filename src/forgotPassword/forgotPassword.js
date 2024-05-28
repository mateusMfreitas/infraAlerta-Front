import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../services/api';
import logo from '../assets/Logo.png';
import { Alert } from 'react-bootstrap';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}login/forgotPassword`, {
        email: email
      });
      console.log(`email: ${email}`);
      setSuccessMessage('Email de recuperação enviado com sucesso!');
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao enviar email!');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
        
          <div className="text-center">
            <img src={logo} alt="InfraAlerta" width="150" />  
          </div>
          
          <h2 className="text-center mb-2">Redefina sua senha</h2>
          <h6 className="text-center mt-3 mb-4">Digite o e-mail para qual deseja redefinir sua senha.</h6>
          
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              id="email"
              type="text"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Redefina sua senha</button>
          <p className="text-center mt-3">
            <Link to="/login">Voltar para Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
