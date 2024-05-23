import React, {useState,useEffect} from 'react';
import NavBar from '../navBar/navBar'; // Importe o NavBar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faTriangleExclamation, faSheetPlastic } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './layout.css'

const Layout = ({ children }) => {
    const [selectedMenu, setSelectedMenu] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const redirecionarInserirChamado = () => {
        navigate('/problem'); 
    };

    const redirecionarInicio = () => {
        navigate('/report'); 
    };
    const redirecionarRelatorio = () => {
        navigate('/graphics'); 
    };

    return (
        <div className='container-fluid'>
            <NavBar />
            <hr />
            <div className='row content' style={{ display: 'flex' }}>
                <div className='menuLateral col-md-3' id='menuLateral'>
                    <h4 className='m-3 title-menu'>Menu Principal</h4>
                    <div className='line text-center'>
            <span className='button-menu'>
                <button onClick={redirecionarInicio} className={`layout-button ${location.pathname === '/report' ? 'selected' : ''}`}>
                    <FontAwesomeIcon icon={faHouse} className='mr-2 icon' />Home
                </button>
            </span>
            <span className='button-menu'>
                <button onClick={redirecionarInserirChamado} className={`layout-button ${location.pathname === '/problem' ? 'selected' : ''}`}>
                <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2 icon' />Adicionar Relato
                </button>
            </span>
            <span className='button-menu'>
                <button onClick={redirecionarRelatorio} className={`layout-button ${location.pathname === '/graphics' ? 'selected' : ''}`}>
                <FontAwesomeIcon icon={faSheetPlastic} className='mr-2 icon' />Relatórios
                </button>
            </span>
        </div>
                    <div className='line text-center'>
                        <h1>Preferências</h1>
                        <h1>Configurações</h1>
                    </div>
                </div>
                <div>
                    {children}  {/* Conteúdo específico da página */}
                </div>
            </div>
        </div>
    );
}

export default Layout;
