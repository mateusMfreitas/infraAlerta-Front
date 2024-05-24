import React, { useEffect, useState } from 'react';
import './report.css';
import api from '../services/api';
import Layout from '../layout/layout'; 


function Report() {

  const [report, setReport] = useState([]);

  function handleRowClick(id) {
    window.location=`/report/${id}`;
  }
  useEffect(() => {
    async function getChamados(){
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblems`)
          .then((response) => {
            console.log(response);
            setReport(response.data);
            sessionStorage.setItem('chamados', JSON.stringify(response.data));
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
                <th scope="col">Relator</th>
              </tr>
            </thead>
            <tbody>
              {report.map((item) => (
                <tr key={item.pro_id} onClick={() => handleRowClick(item.pro_id)} style={{ cursor: 'pointer' }}>
                  <th scope="row">#{item.pro_id}</th>
                  <td>{item.pro_classification}</td>
                  <td>{item.pro_name}</td>
                  <td>{item.pro_user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
  );
}

export default Report;