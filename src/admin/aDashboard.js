import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import logo from '../assets/Logo.png';
import api from '../services/api';

function ADashboard() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <p style={{color: 'white'}}>Você é admin</p>
        <button onClick={() => navigate('/problem')}>Inserir Problema</button>
            
        </div>
    );
}

export default ADashboard;
