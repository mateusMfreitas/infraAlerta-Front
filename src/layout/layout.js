import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [imageUser, setImageUser] = useState('/images/image.png');

    const redirecionarInserirChamado = () => {
        navigate('/problem'); 
    };

    const redirecionarInicio = () => {
        navigate('/report'); 
    };

    const redirecionarRelatorio = () => {
        navigate('/graphics'); 
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div>
            <Navbar expand="lg" bg='light' className="fixed-top top-nav-collapse" style={{ backgroundColor: '#3563E9' }}>
                <Navbar.Brand href="/report" style={{ marginLeft: '20px' }}>
                    <img src={logo} alt="logo infraAlerta" width={80} height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={redirecionarInicio} active={location.pathname === '/report'}>
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={redirecionarInserirChamado} active={location.pathname === '/problem'}>
                            Adicionar Relato
                        </Nav.Link>
                        <Nav.Link onClick={redirecionarRelatorio} active={location.pathname === '/graphics'}>
                            Relatórios
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout}>
                            Sair
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                {children}  {/* Conteúdo específico da página */}
            </div>
        </div>
    );
}

export default Layout;
