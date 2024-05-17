import React from 'react';
import NavBar from '../navBar/navBar'; // Importe o NavBar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faTriangleExclamation, faSheetPlastic } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
    return (
        <div className='container-fluid'>
            <NavBar />
            <hr />
            <div className='row content'>
                <div className="col-md-3">
                    <div className='menuLateral' id='menuLateral'>
                        <h4 className='m-3 title-menu'>Menu Principal</h4>
                        <div className='line text-center'>
                            <span className='button-menu'>
                                <FontAwesomeIcon icon={faHouse} className='mr-2 icon' />Painel de Controle
                            </span>
                            <span className='button-menu selected-menu'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2 icon' />Busca Relato
                            </span>
                            <span className='button-menu'>
                                <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2 icon' />Adicionar Relato
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
                </div>
                <div>
                    {children}  {/* Conteúdo específico da página */}
                </div>
            </div>
        </div>
    );
}

export default Layout;
