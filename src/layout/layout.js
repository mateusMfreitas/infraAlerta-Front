import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTriangleExclamation, faSheetPlastic, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><a className="navbar-brand" href="/report">
                    <img src={logo} alt="logo infraAlerta" width={80} height={80} />
                </a></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={redirecionarInicio} active={location.pathname === '/report'}>
                            <FontAwesomeIcon icon={faHouse} className='mr-2 icon' />Home
                        </Nav.Link>
                        <Nav.Link onClick={redirecionarInserirChamado} active={location.pathname === '/problem'}>
                            <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2 icon' />Adicionar Relato
                        </Nav.Link>
                        <Nav.Link onClick={redirecionarRelatorio} active={location.pathname === '/graphics'}>
                            <FontAwesomeIcon icon={faSheetPlastic} className='mr-2 icon' />Relatórios
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={handleLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} className='mr-2 icon' />Sair
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
