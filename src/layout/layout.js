import React from 'react';
import NavBar from '../navBar/navBar'; // Importe o NavBar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faTriangleExclamation, faSheetPlastic } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const redirecionarInserirChamado = () => {
        navigate('/problem'); 
    };

    const redirecionarInicio = () => {
        navigate('/report'); 
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
                            <a onClick={redirecionarInicio}>
                                <FontAwesomeIcon icon={faHouse} className='mr-2 icon' />Home
                            </a>
                        </span>
                        <span className='button-menu'>
                            <a onClick={redirecionarInserirChamado}>
                            <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2 icon' />Adicionar Relato
                            </a>
                        </span>
                        <span className='button-menu'>
                            <FontAwesomeIcon icon={faSheetPlastic} className='mr-2 icon' />Relatórios
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
