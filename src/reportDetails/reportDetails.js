import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './reportDetails.css'; // Certifique-se de importar o arquivo CSS
import api from '../services/api';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPenToSquare, faTrashCan, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Layout from '../layout/layout';
import Loading from 'react-loading';

export function ReportDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [report, setReport] = useState(null); // Inicialize como null para verificar o carregamento
  const [user, setUser] = useState(null); // Inicialize como null para verificar o carregamento
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(''); // Novo estado para o comentário
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFinalizeModal, setShowFinalizeModal] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    async function getChamado() {
      const userString = sessionStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      setUser(user);
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblem/${id}`);
        const reportData = response.data;

        // Obter coordenadas a partir do endereço
        if (reportData.problemAddress) {
          const address = `${reportData.problemAddress[0].pa_number} ${reportData.problemAddress[0].pa_address}, ${reportData.problemAddress[0].pa_neighborhood}, ${reportData.problemAddress[0].pa_city}, ${reportData.problemAddress[0].pa_state}`;
          getCoordinates(address);
        }

        // Obter detalhes do usuário
        if (reportData.problem[0].pro_user) {
          const userId = reportData.problem[0].pro_user;
          const userDetails = await getUserDetails(userId);
          reportData.problem[0].pro_user = userDetails.name; // Assumindo que 'name' é o campo do nome do usuário
          reportData.problem[0].pro_user_phone = userDetails.phone; // Adicionando o telefone do usuário
          reportData.problem[0].pro_user_email = userDetails.email; // Adicionando o email do usuário, se necessário
        }

        setReport(reportData);

        // Obter comentários
        const commentsResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}Comment/${id}`);
        const commentsData = commentsResponse.data;

        // Obter detalhes dos usuários dos comentários
        const commentsWithUserDetails = await Promise.all(commentsData.map(async (comment) => {
          if (comment.user_id) {
            const userDetails = await getUserDetails(comment.user_id);
            return { ...comment, user_name: userDetails.name, user_avatar: userDetails.avatar }; // Inclua o campo avatar
          }
          return comment;
        }));

        setComments(commentsWithUserDetails);
        setLoading(false); // Define o carregamento como falso após carregar os dados
      } catch (error) {
        console.error(error);
        alert("Erro ao buscar o chamado!");
        setLoading(false); // Define o carregamento como falso em caso de erro
      }
    }
    getChamado();
  }, [id]);

  const getCoordinates = async (address) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
      if (response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
        const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location.lat},${location.lng}&center=${location.lat},${location.lng}&zoom=15`;
        setMapUrl(mapUrl);
      } else {
        alert("Não foi possível obter a localização a partir do endereço.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao obter a localização!");
    }
  };

  const getUserDetails = async (userId) => {
    try {
      const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}user/getUser/${userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar detalhes do usuário!");
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() === '') return;

    try {
      const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}Comment/${id}`, {
        user_id: user.user_id,
        content: newComment,
      });

      const addedComment = response.data;

      const userDetails = await getUserDetails(user.user_id);
      const commentWithUserDetails = { ...addedComment, user_name: userDetails.name, user_avatar: userDetails.avatar };

      setComments([...comments, commentWithUserDetails]);
      setNewComment('');
    } catch (error) {
      console.error(error);
      alert("Erro ao adicionar comentário!");
    }
  };

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
    excluir(report.problem[0].pro_id);
    setShowDeleteModal(false);
  }

  function handleFinalizeClick() {
    setShowFinalizeModal(true);
  }

  function handleCancelFinalize() {
    setShowFinalizeModal(false);
  }

  function handleConfirmFinalize() {
    finalizar(report.problem[0].pro_id);
    setShowFinalizeModal(false);
  }

  return (
    <Layout>
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

      {/* Modal de Finalização */}
      <div className={`modal ${showFinalizeModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar Finalização</h5>
            </div>
            <div className="modal-body">
              <p>Tem certeza que deseja finalizar este chamado?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCancelFinalize}>Cancelar</button>
              <button type="button" className="btn btn-success" onClick={handleConfirmFinalize}>Finalizar</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`container mt-5 pt-navbar ${showDeleteModal || showFinalizeModal ? 'blur-background' : ''}`} id="content-details">
        {loading ? (
          <div className="loading-container">
            <Loading type="spinningBubbles" color="#000" />
          </div>
        ) : (
          <div className="card shadow-sm p-4">
            <h1 className="text-center mb-4">#{report.problem[0].pro_id} - {report.problem[0].pro_name}</h1>
            <div className="row">
              <div className="col-md-6">
                <h3>Informações:</h3>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Nome</th>
                      <td>{report.problem[0].pro_user}</td>
                    </tr>
                    <tr>
                      <th>Celular</th>
                      <td>{report.problem[0].pro_user_phone}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{report.problem[0].pro_user_email}</td>
                    </tr>
                    <tr>
                      <th>Assunto</th>
                      <td>{report.problem[0].pro_name}</td>
                    </tr>
                    <tr>
                      <th>Descrição</th>
                      <td>{report.problem[0].pro_classification}</td>
                    </tr>
                    <tr>
                      <th>Endereço</th>
                      <td>{report.problemAddress[0].pa_address}</td>
                    </tr>
                    <tr>
                      <th>Número</th>
                      <td>{report.problemAddress[0].pa_number}</td>
                    </tr>
                    <tr>
                      <th>Bairro</th>
                      <td>{report.problemAddress[0].pa_neighborhood}</td>
                    </tr>
                    <tr>
                      <th>Cidade</th>
                      <td>{report.problemAddress[0].pa_city}</td>
                    </tr>
                    <tr>
                      <th>Estado</th>
                      <td>{report.problemAddress[0].pa_state}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td style={{ color: report.problem[0].pro_status === 'PENDENTE' ? 'red' : 'green' }}>
                        {report.problem[0].pro_status}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>Imagem:</h3>
                <img
                  src={report.problem[0].pro_photo}
                  width="430"
                  height="430"
                  className="img-fluid mb-3 mx-auto d-block"
                  alt="Imagem do relato"
                />
              </div>
              <div className="col-md-6">
                <h3 style={{ paddingTop: "2px", paddingBottom: "10px" }}>Comentários:</h3>
                <div className="comments-section">
                  <ul className="list-group mb-3 comments-list">
                    {comments.length > 0 ? comments.map((comment, index) => (
                      console.log(comment),
                      <li key={index} className="list-group-item comment-item">
                        <div className="comment-header">
                          <strong>{comment.user_name}</strong>
                          <span className="comment-date">{new Date(comment.created_at).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <p>{comment.comments_text}</p>
                      </li>
                    )) : <li className="list-group-item">Nenhum comentário disponível.</li>}
                  </ul>
                  <div className="comment-input-container">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Adicionar um comentário..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={handleAddComment}>Enviar</button>
                  </div>
                </div>
                <h3 style={{ paddingTop: "16px" }}>Localização:</h3>
                <iframe
                  src={mapUrl}
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
                  {user && user.admin && (
                    <>
                      <button className="btn btn-outline-dark mx-2" onClick={() => alterarResponsavel(report.problem[0].pro_id, user.user_id)} data-toggle="modal" data-target="#modalEdit">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <br />
                        Alterar Responsável
                        <br />
                        <small>Responsável atual: {report.problem[0].pro_admin}</small>
                      </button>
                      <button className="btn btn-outline-dark mx-2" onClick={handleFinalizeClick}>
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <br />
                        Finalizar
                      </button>
                    </>
                  )}
                  <button className="btn btn-outline-dark mx-2" onClick={handleDeleteClick}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <br />
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ReportDetails;
