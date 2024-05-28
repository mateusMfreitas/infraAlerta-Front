import React, { useState } from 'react';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function removeCpfFormatting(cpf) {
    return cpf.replace(/\D/g, ''); // Remove qualquer caractere que não seja dígito
  }

  function removePhoneFormatting(phone) {
    return phone.replace(/\D/g, '');
  }

  const handlePhoneChange = e => {
    const { value } = e.target;
    let formattedPhone = value.replace(/\D/g, ''); // Remove tudo que não é dígito
    formattedPhone = formattedPhone.slice(0, 11); // Limita a 11 dígitos
    formattedPhone = formattedPhone.replace(/^(\d{2})(\d)/, '($1) $2'); // Formata os dois primeiros dígitos como código de área
    formattedPhone = formattedPhone.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona hífen após os cinco primeiros dígitos
    setPhone(formattedPhone); // Atualiza o estado com o valor formatado
  };

  const handleCpfChange = e => {
    const { value } = e.target;
    let formattedCpf = value.replace(/\D/g, ''); // Remove tudo que não é dígito
    formattedCpf = formattedCpf.slice(0, 11); // Limita a 11 dígitos
    formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, '$1.$2');
    formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, '$1.$2');
    formattedCpf = formattedCpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(formattedCpf);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (password !== confirmPassword){
      setErrorMessage('Senhas não coincidem!');
      return;
    }

    const unformattedCpf = removeCpfFormatting(cpf);
    const unformattedPhone = removePhoneFormatting(phone);

    try {
      const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}user/createUser`, {
        user: {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          cpf: unformattedCpf,
          phone: unformattedPhone,
          birthDate: birthDate,
        },
        userAddress: {
          ua_address: address,
          ua_number: number,
          ua_neighborhood: district,
          ua_city: city,
          ua_state: state
        }
      });
      console.log(response);
      /* alert("Usuário criado!"); */
      navigate('/login');
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao criar conta!');
    }
  };

  return (
    <div style={{backgroundColor: "#050A24" }} className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{maxWidth: '600px'}}>
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
          <div className="text-center">
            <img src={logo} alt="InfraAlerta" width="150" />  
          </div>
          
          <h2 className="text-center mb-4">Registre sua conta</h2>
          
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirme sua senha</label>
                <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input type="text" className="form-control" id="cpf" value={cpf} onChange={handleCpfChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Celular</label>
                <input type="tel" className="form-control" id="phone" value={phone} onChange={handlePhoneChange} required />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="date" className="form-control" id="birthDate" value={birthDate} onChange={e => setBirthDate(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Endereço</label>
                <input type="text" className="form-control" id="address" value={address} onChange={e => setAddress(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="number">Número</label>
                <input type="number" className="form-control" id="number" min="0" value={number} onChange={e => setNumber(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="district">Bairro</label>
                <input type="text" className="form-control" id="district" value={district} onChange={e => setDistrict(e.target.value)} required />              
              </div>
              <div className="form-group">
                <label htmlFor="city">Cidade</label>
                <input type="text" className="form-control" id="city" value={city} onChange={e => setCity(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="state">Estado</label>
                <input type="text" className="form-control" id="state" value={state} onChange={e => setState(e.target.value)} required />
              </div>
            </div>
          </div>

          <button type="submit" className="mt-3 btn btn-primary btn-block">Registre-se</button>
          <p className="text-center mt-3">
            <Link to="/login">Voltar para Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
