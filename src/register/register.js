import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // link com API
    console.log(`Username: ${email}, Password: ${password}`);
  };

  return (
  <div className="Register">
  <header className="Register-header">
    <form onSubmit={handleSubmit} className="Box">
      <h1>InfraAlerta</h1>
      <h2>Register your account</h2>
      
      <div className="form-row">
    <div className="form-column">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label htmlFor="cpf">CPF</label>
      <input id="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

      <label htmlFor="phone">Phone</label>
      <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label htmlFor="birthDate">Birth Date</label>
      <input id="birthDate" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
    </div>

    <div className="form-column">
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

  <button type="submit">Register</button>
    </form>
  </header>
</div>
  );
}

export default Register;