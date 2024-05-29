import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './reportDetails.css'; // Certifique-se de importar o arquivo CSS
import api from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPenToSquare, faTrashCan, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Layout from '../layout/layout';

export function ReportDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [report, setReport] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    async function getChamado() {
      const userString = sessionStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      setUser(user);
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblem/${id}`);
        setReport(response.data);

        /* // Obter comentários
        const commentsResponse = await api.get(`http://localhost:5025/problem/getComments/${id}`);
        setComments(commentsResponse.data); */
      } catch (error) {
        console.error(error);
        alert("Erro ao buscar o chamado!");
      }
    }
    getChamado();
  }, [id]);

  async function excluir(id) {
    try {
      await api.delete(`${process.env.REACT_APP_API_BASE_URL}problem/deleteProblem/${id}`);
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user.admin === true) {
        navigate('/report');
      } else {
        navigate('/uDashboard');
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir chamado");
    }
  }

  async function alterarResponsavel(id, userId) {
    try {
      await api.put(`${process.env.REACT_APP_API_BASE_URL}problem/changeOwner/${id}/${userId}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Erro ao alterar responsável");
    }
  }

  async function finalizar(id) {
    try {
      const response = await api.put(`${process.env.REACT_APP_API_BASE_URL}problem/closeProblem/${id}`);
      setReport(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Erro ao finalizar chamado");
    }
  }

  async function adicionarComentario(id, userId) {
    // Lógica para adicionar comentário
  }

  function handleDeleteClick() {
    setShowDeleteModal(true);
  }

  function handleCancelDelete() {
    setShowDeleteModal(false);
  }

  function handleConfirmDelete() {
    excluir(report.problem['0'].pro_id);
    setShowDeleteModal(false);
  }

  return (
    <Layout>
      <div style={{paddingTop: "80px"}} className={`container mt-5 ${showDeleteModal ? 'blur-background' : ''}`} id="content-details">
        <div className="card shadow-sm p-4">
          <h1 className="text-center mb-4">#{report && report.problem ? report.problem['0'].pro_id : '...'} - {report && report.problem ? report.problem['0'].pro_name : '...'}</h1>
          <div className="row">
            <div className="col-md-6">
              <h3>Informações:</h3>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Nome</th>
                    <td>{report && report.problem ? report.problem['0'].pro_user : '...'}</td>
                  </tr>
                  <tr>
                    <th>Celular</th>
                    <td>phone</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>email</td>
                  </tr>
                  <tr>
                    <th>Assunto</th>
                    <td>{report && report.problem ? report.problem['0'].pro_name : '...'}</td>
                  </tr>
                  <tr>
                    <th>Descrição</th>
                    <td>{report && report.problem ? report.problem['0'].pro_classification : '...'}</td>
                  </tr>
                  <tr>
                    <th>Endereço</th>
                    <td>{report && report.problemAddress ? report.problemAddress['0'].pa_address : '...'}</td>
                  </tr>
                  <tr>
                    <th>Número</th>
                    <td>{report && report.problemAddress ? report.problemAddress['0'].pa_number : '...'}</td>
                  </tr>
                  <tr>
                    <th>Bairro</th>
                    <td>{report && report.problemAddress ? report.problemAddress['0'].pa_neighborhood : '...'}</td>
                  </tr>
                  <tr>
                    <th>Cidade</th>
                    <td>{report && report.problemAddress ? report.problemAddress['0'].pa_city : '...'}</td>
                  </tr>
                  <tr>
                    <th>Estado</th>
                    <td>{report && report.problemAddress ? report.problemAddress['0'].pa_state : '...'}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td style={{ color: report && report.problem && report.problem['0'].pro_status === 'PENDENTE' ? 'red' : 'green' }}>
                      {report && report.problem ? report.problem['0'].pro_status : '...'}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Imagem:</h3>
              <img
                src={report && report.problem ? report.problem['0'].pro_photo : ''}
                width="430"
                height="430"
                className="img-fluid mb-3"
                alt="Imagem do relato"
              />
            </div>
            <div className="col-md-6">
              <h3 style={{ paddingTop: "2px", paddingBottom: "10px" }}>Comentários:</h3>
              <div className="comments-section">
                <ul className="list-group mb-3">
                  {comments.length > 0 ? comments.map((comment, index) => (
                    <li key={index} className="list-group-item">
                      <strong>{comment.user_name}</strong>: {comment.comment_text}
                    </li>
                  )) : <li className="list-group-item">Nenhum comentário disponível.</li>}
                </ul>
              </div>
              <h3 style={{ paddingTop: "16px" }}>Localização:</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.990277094279!2d-47.4401975!3d-23.496859699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf60180c2cc28d%3A0x6df5b8a67b705d29!2sAv.%20S%C3%A3o%20Paulo%2C%201243%20-%20Jardim%20Santa%20Ros%C3%A1lia%2C%20Sorocaba%20-%20SP%2C%2018013-003!5e0!3m2!1spt-BR!2sbr!4v1714064696392!5m2!1spt-BR!2sbr"
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="actions-section mt-3">
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark mx-2" onClick={() => adicionarComentario(report.problem['0'].pro_id)}>
                  <FontAwesomeIcon icon={faMessage} />
                  <br />
                  Adicionar comentário
                </button>
                <button className="btn btn-outline-dark mx-2" onClick={() => alterarResponsavel(report.problem['0'].pro_id, user['user_id'])} data-toggle="modal" data-target="#modalEdit">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <br />
                  Alterar Responsável
                  <br />
                  <small>Responsável atual: {report && report.problem ? report.problem['0'].pro_admin : '...'}</small>
                </button>
                <button className="btn btn-outline-dark mx-2" onClick={handleDeleteClick}>
                  <FontAwesomeIcon icon={faTrashCan} />
                  <br />
                  Excluir
                </button>
                <button className="btn btn-outline-dark mx-2" onClick={() => finalizar(report.problem['0'].pro_id)}>
                  <FontAwesomeIcon icon={faSquareCheck} />
                  <br />
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Exclusão */}
      <div className={`modal ${showDeleteModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar Exclusão</h5>
            </div>
            <div className="modal-body">
              <p>Tem certeza que deseja excluir este chamado?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ReportDetails;
