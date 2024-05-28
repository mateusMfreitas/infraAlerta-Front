import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert } from 'react-bootstrap';
import logo from '../assets/Logo.png';
import api from '../services/api';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}login/auth`, {
        email: email,
        password: password
      });
      setUser(response.data);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      if(!response.data.admin){
        navigate('/uDashboard');        
      }else{
        navigate('/report');        
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('E-mail ou senha inválidos!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
              
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              
              <div className="text-center">
                <img src={logo} alt="InfraAlerta" width="200" />  
              </div>
              
              <h2 className="text-center">Entre com a sua conta</h2>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Entre com seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <div className="input-group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Entre com sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                  </button>
                </div>
                <Container className="text-center">
                  <Link to="/forgot-password" className="form-text text-muted">Esqueceu sua senha?</Link>
                </Container>
              </div>

              <button type="submit" className="btn btn-primary">Login</button>

              <p className="text-center mt-3">Não possui uma conta? <Link to="/register">Registre-se</Link></p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;