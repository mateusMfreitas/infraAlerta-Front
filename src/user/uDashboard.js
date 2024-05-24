import React, { useEffect, useState } from 'react';
import './uDashboard.css';
import api from '../services/api';
import Layout from '../layout/layout'; 
import { useNavigate } from 'react-router-dom';

function UDashboard() {
    const navigate = useNavigate();
    const [report, setReport] = useState([]);

    function handleRowClick(id) {
        navigate(`/report/${id}`); 
    }
    useEffect(() => {
        async function getChamados(){
        try {
            const userString = sessionStorage.getItem('user');
            const user = userString ? JSON.parse(userString) : null;
            const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblemsUser/${user.user_id}`)
            .then((response) => {
                setReport(response.data);
            })
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar chamados!");
        }
        }
        getChamados();
    }, []);

  return (

      <Layout>
        <div className="col-md-9 text-center" style={{ justifyContent: 'center', width: '100%'}}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Classificação</th>
                <th scope="col">Assunto</th>
              </tr>
            </thead>
            <tbody>
              {report.map((item) => (
                <tr key={item.pro_id} onClick={() => handleRowClick(item.pro_id)} style={{ cursor: 'pointer' }}>
                  <th scope="row">#{item.pro_id}</th>
                  <td>{item.pro_classification}</td>
                  <td>{item.pro_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
  );
}

export default UDashboard;