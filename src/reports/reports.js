import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reports.css';
import api from '../services/api';
import Layout from '../layout/layout';
import Loading from 'react-loading';

function Reports() {
  const [neighborhoodReport, setNeighborhoodReport] = useState([]);
  const [userReport, setUserReport] = useState([]);
  const [typesReport, setTypesReport] = useState([]);
  const [statusReport, setStatusReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getReports() {
      try {
        const neighborhoodResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/neighborhoods`);
        const userResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/users`);
        const typesResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/types`);
        const statusResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/status`);
        console.log(statusResponse.data);

        // Ajustando a atribuição dos dados ao estado
        if (neighborhoodResponse.data && Array.isArray(neighborhoodResponse.data.neighborhoods)) {
          setNeighborhoodReport(neighborhoodResponse.data.neighborhoods);
        }
        if (userResponse.data && Array.isArray(userResponse.data.users)) {
          setUserReport(userResponse.data.users);
        }
        if (typesResponse.data && Array.isArray(typesResponse.data.types)) {
          setTypesReport(typesResponse.data.types);
        }
        if (statusResponse.data && Array.isArray(statusResponse.data.statuses)) {
          setStatusReport(statusResponse.data.statuses);
          console.log(statusReport);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching reports:', error);
        setError("Erro ao buscar relatórios!");
        setLoading(false);
      }
    }
    getReports();
  }, []);

  return (
    <Layout>
      <div className="container pt-navbar">
        {loading ? (
          <div className="loading-container">
            <Loading type="spinningBubbles" color="#000" />
          </div>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="Reports-form">
            <h1 className="text-center mb-4">Relatórios</h1>
            <div className="table-container">
              <h3>Bairros com Mais Chamados</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="table-left">Bairro</th>
                    <th scope="col" className="table-right">Quantidade de Chamados</th>
                  </tr>
                </thead>
                <tbody>
                  {neighborhoodReport.map((item, index) => (
                    <tr key={index}>
                      <td className="table-left">{item.neighborhood}</td>
                      <td className="table-right">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-container">
              <h3>Usuários que Mais Reportaram</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="table-left">Usuário</th>
                    <th scope="col" className="table-right">Quantidade de Chamados</th>
                  </tr>
                </thead>
                <tbody>
                  {userReport.map((item, index) => (
                    <tr key={index}>
                      <td className="table-left">{item.user}</td>
                      <td className="table-right">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-container">
              <h3>Tipos de Problemas Mais Comuns</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="table-left">Tipo de Problema</th>
                    <th scope="col" className="table-right">Quantidade de Chamados</th>
                  </tr>
                </thead>
                <tbody>
                  {typesReport.map((item, index) => (
                    <tr key={index}>
                      <td className="table-left">{item.type}</td>
                      <td className="table-right">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-container">
              <h3>Status dos Chamados</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="table-left">Status</th>
                    <th scope="col" className="table-right">Quantidade de Chamados</th>
                  </tr>
                </thead>
                <tbody>
                  {statusReport.map((item, index) => (
                    <tr key={index}>
                      <td className="table-left">{item.status}</td>
                      <td className="table-right">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Reports;
