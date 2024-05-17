import React, { useEffect, useState } from 'react';
import { Link, redirectDocument, useParams } from 'react-router-dom';
import './report.css';
import api from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faSheetPlastic, faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import NavBar from "../navBar/navBar";
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import Layout from '../layout/layout'; // Certifique-se de importar o Layout


function Report() {

  const [report, setReport] = useState([
    {
      id: 1,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 2,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 3,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 4,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 5,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 6,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
  ]);

  function handleRowClick(id) {
    window.location=`/report/${id}`;
  }

  return (

      <Layout>
        <div className="col-md-9 text-center" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Classificação</th>
                <th scope="col">Criação</th>
                <th scope="col">Alterado</th>
                <th scope="col">Preview</th>
                <th scope="col">Assunto</th>
                <th scope="col">Relator</th>
                <th scope="col">Distribuição</th>
              </tr>
            </thead>
            <tbody>
              {report.map((item) => (
                <tr key={item.id} onClick={() => handleRowClick(item.id)} style={{ cursor: 'pointer' }}>
                  <th scope="row">#{item.id}</th>
                  <td>{item.classification}</td>
                  <td>{item.creation}</td>
                  <td>{item.changed}</td>
                  <td>{item.preview}</td>
                  <td>{item.subject}</td>
                  <td>{item.reporter}</td>
                  <td>{item.distribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
  );
}

export function ReportDetails() {
  const { id } = useParams();
  const [report, setReport] = useState([
    {
      id: 1,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 2,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 3,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 4,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 5,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 6,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
    {
      id: 7,
      classification: 'Urgente',
      creation: '10/04/2024 06:01:32',
      changed: '10/04/2024 12:15:32',
      preview: 'Aberto',
      title: 'Buraco na Avenida São Paulo',
      subject: 'Foi encontrado um buraco na Avenida São Paulo, já está lá a mais de 1 mês.',
      reporter: 'Joaquim Alves',
      phone: '15999999',
      email: 'teste@teste.com',
      adrees: 'Avenida São Paulo',
      number: '123',
      neighborhood: 'Jardim Santa Rosália',
      city: 'Sorocaba',
      state: 'SP',
      distribution: 'SEURB'
    },
  ]);

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
              <h1>#{id} - {report[id].title} </h1>
            <hr />

            <div className="row text-left">
              <div className="col-6">
                <h3>Informação do relator:</h3>
                <span className='ml-3'><strong>Nome: </strong>{report[id].reporter}</span><br />
                <span className='ml-3'><strong>Celular: </strong>{report[id].phone}</span><br />
                <span className='ml-3'><strong>Email: </strong>{report[id].email}</span><br />

                <br /><h3>Relato: </h3>
                <span className='ml-3'><strong>Assunto: </strong>{report[id].title}</span><br />
                <span className='ml-3'><strong>Descrição: </strong>{report[id].subject}</span><br />
                <span className='ml-3'><strong>Endereço: </strong>{report[id].adrees}</span><br />
                <span className='ml-3'><strong>Número: </strong>{report[id].number}</span><br />
                <span className='ml-3'><strong>Bairro: </strong>{report[id].neighborhood}</span><br />
                <span className='ml-3'><strong>Cidade: </strong>{report[id].city}</span><br />
                <span className='ml-3'><strong>Estado: </strong>{report[id].state}</span><br />

                <h3>Status: </h3>
                <span className='ml-3'><strong>Preview: </strong>{report[id].preview}</span><br />
                <span className='ml-3'><strong>Alterado: </strong>{report[id].changed}</span><br />
                <span className='ml-3'><strong>Responsável: </strong>{report[id].preview}</span><br />
                <span className='ml-3'><strong>Classificação: </strong>{report[id].classification}</span><br />

                <h3>Localização: </h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.990277094279!2d-47.4401975!3d-23.496859699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf60180c2cc28d%3A0x6df5b8a67b705d29!2sAv.%20S%C3%A3o%20Paulo%2C%201243%20-%20Jardim%20Santa%20Ros%C3%A1lia%2C%20Sorocaba%20-%20SP%2C%2018013-003!5e0!3m2!1spt-BR!2sbr!4v1714064696392!5m2!1spt-BR!2sbr" width="500" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-6">
                <h3>Imagem:</h3>
                <img src="/images/buraco.png" className='img-responsive' alt="Imagem do relato" width={530} height={314} /><br/>
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
                <form>
                  <label htmlFor="input-title" className="form-label">Assunto:</label>
                  <input type="text" className='form-control' id='input-title' placeholder='Assunto' value={report[id].title}/>

                  <label htmlFor="input-description" className="form-label">Descrição:</label>
                  <textarea className='form-control' id='input-description' placeholder='Descrição' value={report[id].subject}></textarea>

                  <div className='row'>
                    <div className='col-8'>
                      <label htmlFor="input-adrees" className="form-label">Endereço:</label>
                      <input type="text" className='form-control' id='input-adrees' placeholder='Endereço' value={report[id].adrees}/>
                    </div>
                    <div className='col-4'>
                      <label htmlFor="input-number" className="form-label">Número:</label>
                      <input type="text" className='form-control' id='input-number' placeholder='Número' value={report[id].number} />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <label htmlFor="input-neighborhood" className="form-label">Bairro:</label>
                      <input type="text" className='form-control' id='input-neighborhood' placeholder='Bairro' value={report[id].neighborhood}/>
                    </div>
                    <div className='col-6'>
                      <label htmlFor="input-city" className="form-label">Cidade:</label>
                      <input type="text" className='form-control' id='input-city' placeholder='Cidade' value={report[id].city}/>
                    </div>
                  </div>
                  
                  <label htmlFor="input-state" className="form-label">Estado:</label>
                  <input type='text' className='form-control' id='input-state' placeholder='Estado' value={report[id].state} />

                  <label htmlFor="input-responsible" className="form-label">Responsável:</label>
                  <input type='text' className='form-control' id='input-responsible' placeholder='Responsável' value={report[id].reporter} />

                  <label htmlFor="input-classification" className="form-label">Classificação:</label>
                  <input type='text' className='form-control' id='input-classification' placeholder='Classificação' value={report[id].classification}/>

                  <label htmlFor="input-preview" className="form-label">Previem:</label>
                  <input type='text' className='form-control' id='input-preview' placeholder='Previem' value={report[id].preview} />

                </form>
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

export default Report;