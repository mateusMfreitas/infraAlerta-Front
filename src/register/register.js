import React, { useState } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';*/
import './register.css';
import api from '../services/api';

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
  /*const [showPassword, setShowPassword] = useState(false);*/

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (password !== confirmPassword){
      console.log('Senhas não coincidem!');
      return alert('Senhas não coincidem!');
    }
    try{
      const response = await api.post('http://localhost:5025/user/createUser', {
        user: {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          cpf: cpf,
          phone: phone,
          birthDate: birthDate,
        },
        userAddress: {
          ua_address: address,
          ua_number: number,
          ua_neighborhood: district,
          ua_city: city,
          ua_state: state
        }
      })
        .then((response) => {
          console.log(response);
          //teste
          alert("Usuário criado!");
        })
        console.log(response);
    } catch (error){
        console.error(error);
        //teste
        alert("Erro ao criar conta!");
      }
  };

  return (
  <div className="Register">
  <header className="Register-header">
    <form onSubmit={handleSubmit} className="Box_Register">
        <h1>InfraAlerta</h1>
        <h2>Resgistre sua conta</h2>

        <div className="form-row">
      <div className="form-column">
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Senha</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label htmlFor="password"> Confirme sua senha</label>
        <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <label htmlFor="cpf">CPF</label>
        <input id="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

        <label htmlFor="phone">Celular</label>
        <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      </div>

      <div className="form-column">
        <label htmlFor="birthDate">Data de Nascimento</label>
        <input id="birthDate" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />

        <label htmlFor="address">Endereço</label>
        <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label htmlFor="number">Número</label>
        <input id="number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />

        <label htmlFor="district">Bairro</label>
        <input id="district" type="text" value={district} onChange={(e) => setDistrict(e.target.value)} required />

        <label htmlFor="city">Cidade</label>
        <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

        <label htmlFor="state">Estado</label>
        <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} required />
      </div>
    </div>

      <button type="submit">Registre-se</button>
    </form>
  </header>
  </div>
  );
}

export default Register;