import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await api.post('http://localhost:5025/login/auth', {
        email: email,
        password: password
      });

      const userData = response.data;
      setUser(userData);

      if(userData.admin === true){
        navigate('/dashboardAdm');
      } else{
        navigate('/dashboard');
      }
    } catch (error){
        console.error(error);
      }
  };

  return (
  <div className="Login">
  <header className="Login-header">
    <form onSubmit={handleSubmit} className="Box">
      <h1>InfraAlerta</h1>
      <h2>Entre com a sua conta</h2>
      <div className="email-container">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          placeholder="Entre com seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Entre com sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </button>
        
        <Link to="/forgot-password" className="forgot-link">Esqueceu sua senha?</Link>
      </div>
      <button type="submit">Login</button>
      <p className="register-link">
        Não possui uma conta? <Link to="/register">Registre-se</Link>
      </p>
    </form>
  </header>
</div>
  );
}

export default Login;