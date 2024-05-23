import React, { useEffect, useState } from 'react';
import { Link, redirectDocument, useParams } from 'react-router-dom';
import './reportDetails.css';
import api from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faSheetPlastic, faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import NavBar from "../navBar/navBar";
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import Layout from '../layout/layout'; 

export function ReportDetails() {
    const { id } = useParams();
    const [report, setReport] = useState([]);

    useEffect(() => {
      async function getChamado(){
      try {
          const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblem/${id}`)
          .then((response) => {
              setReport(response.data);
          })
      } catch (error) {
          console.error(error);
          alert("Erro ao buscar o chamado!");
      }
      }
      getChamado();
  }, []);

  useEffect(() => {
    console.log(report);
  }, [report]);
  
    return (
      <div className='container-fluid'>
        <NavBar />
        <hr />
        <div className="container-fluid">
          <div className="row content">
            <div className="col-md-3">
              <div className='menuLateral' id='menuLateral'>
                <h4 className='m-4 title-menu'>Menu Principal</h4>
                <div className='line text-center'>
                  <span className='button-menu'><FontAwesomeIcon icon={faHouse} className='mr-2 icon' />Painel de Controle</span>
                  <span className='button-menu selected-menu'><FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2 icon' />Busca Relato</span>
                  <span className='button-menu'><FontAwesomeIcon icon={faTriangleExclamation} className='mr-2 icon' />Adicionar Relato</span>
                  <span className='button-menu'><FontAwesomeIcon icon={faSheetPlastic} className='mr-2 icon' />Relatórios</span>
                </div>
  
                <div className='line'>
                  <h1>Preferencias</h1>
                  <h1>Configurações</h1>
                </div>
              </div>
            </div>
  
            <div className="col-md-9 text-center" id="content-details">
              <hr />
              <h1>#{report && report.problem ? report.problem['0'].pro_id : '...'} - {report && report.problem ? report.problem['0'].pro_name : '...'}</h1>
              <hr />
  
              <div className="row text-left">
                <div className="col-6">
                 <h3>Informação do relator:</h3>
                  <span className='ml-3'><strong>Nome: </strong>{report && report.problem ? report.problem['0'].pro_user : '...'}</span><br />
                  <span className='ml-3'><strong>Celular: </strong>phone</span><br />
                  <span className='ml-3'><strong>Email: </strong>email</span><br />
  
                  <br /><h3>Relato: </h3>
                  <span className='ml-3'><strong>Assunto: </strong>{report && report.problem ? report.problem['0'].pro_name : '...'}</span><br />
                  <span className='ml-3'><strong>Descrição: </strong>{report && report.problem ? report.problem['0'].pro_classification : '...'}</span><br />
                  <span className='ml-3'><strong>Endereço: </strong>{report && report.problemAddress ? report.problemAddress['0'].pa_address : '...'}</span><br />
                  <span className='ml-3'><strong>Número: </strong>{report && report.problemAddress ? report.problemAddress['0'].pa_number : '...'}</span><br />
                  <span className='ml-3'><strong>Bairro: </strong>{report && report.problemAddress ? report.problemAddress['0'].pa_neighborhood : '...'}</span><br />
                  <span className='ml-3'><strong>Cidade: </strong>{report && report.problemAddress ? report.problemAddress['0'].pa_city : '...'}</span><br />
                  <span className='ml-3'><strong>Estado: </strong>{report && report.problemAddress ? report.problemAddress['0'].pa_state : '...'}</span><br />
  
                  <h3>Status: </h3>
                  <span className='ml-3'   style={{ color: report && report.problem && report.problem['0'].pro_status === 'PENDENTE' ? 'red' : 'green'}}>{report && report.problem ? report.problem['0'].pro_status : '...'}</span><br />
  
                  <h3>Localização: </h3>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.990277094279!2d-47.4401975!3d-23.496859699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf60180c2cc28d%3A0x6df5b8a67b705d29!2sAv.%20S%C3%A3o%20Paulo%2C%201243%20-%20Jardim%20Santa%20Ros%C3%A1lia%2C%20Sorocaba%20-%20SP%2C%2018013-003!5e0!3m2!1spt-BR!2sbr!4v1714064696392!5m2!1spt-BR!2sbr" width="500" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-6">
                  <h3>Imagem:</h3>
                  <img src={`${report && report.problem ? report.problem['0'].pro_photo : ''}`} className='img-responsive' alt="Imagem do relato" width={530} height={314} /><br/>
                  <h4>Ações:</h4>
                  <div className='row mt-2'>
                    <div className='col-3 text-center'>
                      <a href='#' className='text-dark'>
                        <FontAwesomeIcon icon={faMessage} /><br/>
                        Adicionar comentário<br/>
                      </a>
                    </div>
                    <div className='col-3 text-center'>
                      <a href="#" role="button" className="text-dark"   data-toggle="modal" data-target="#modalEdit">
                        <FontAwesomeIcon icon={faPenToSquare} /><br/>
                        Alterar Responsável<br/>
                      </a>
                    </div>
                    <div className='col-3 text-center'>
                      <a href='#' className='text-dark'>
                        <FontAwesomeIcon icon={faTrashCan} /><br/>
                        Excluir<br/>
                      </a>
                    </div>
                    <div className='col-3 text-center'>
                      <a href='#' className='text-dark'>
                        <FontAwesomeIcon icon={faSquareCheck} /><br/>
                        Finalizar<br/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal fade" id="modalEdit" tabIndex="-1" aria-labelledby="editModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h5 className="modal-title" id="editModal">Editar Relato</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
              </div>
              <div className="modal-body">
                <div className='form-group'>
                  
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" className="btn btn-primary">Salvar mudanças</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }