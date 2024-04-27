import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do CSS do Bootstrap
import api from '../services/api'; // Importação da API
import logo from '../assets/Logo.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await api.post('http://localhost:5025/login/forgotPassword', {
        email: email
      }).then((response) => {
        // teste
        alert(response);
      })
      console.log(`email: ${email}`);
    } catch (error){
      console.error(error);
      // teste
      alert("Erro ao enviar email!");
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
          <h6 className="text-center  mt-3 mb-4">Digite o e-mail para qual deseja redefinir sua senha.</h6>
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
