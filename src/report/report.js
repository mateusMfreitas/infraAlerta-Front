import React, { useEffect, useState } from 'react';
import './report.css';
import api from '../services/api';
import Layout from '../layout/layout'; 
import Loading from 'react-loading';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

function Report() {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  function handleRowClick(id) {
    window.location = `/report/${id}`;
  }

  useEffect(() => {
    async function getChamados() {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblems`);
        const problems = response.data;

        // Obter detalhes do usuário para cada chamado
        const updatedProblems = await Promise.all(problems.map(async (problem) => {
          const userResponse = await getUserDetails(problem.pro_user);
          return { ...problem, pro_user: userResponse.name };
        }));

        setReport(updatedProblems);
        sessionStorage.setItem('chamados', JSON.stringify(updatedProblems));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Erro ao buscar chamados!");
        setLoading(false);
      }
    }

    async function getUserDetails(userId) {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}user/getUser/${userId}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error("Erro ao buscar detalhes do usuário!");
      }
    }

    getChamados();
  }, []);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedReport = [...report].sort((a, b) => {
    const aValue = String(a[sortConfig.key]);
    const bValue = String(b[sortConfig.key]);

    if (aValue && bValue) {
      if (sortConfig.direction === 'ascending') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    } else {
      // Se algum dos valores for indefinido, mantenha a ordem atual
      return 0;
    }
  });

  return (
    <Layout>
      <div className="col-md-9 text-center" style={{ justifyContent: 'center', width: '100%', marginTop: "110px"}}>
        {loading ? (
          <div className="loading-container">
            <Loading type="spinningBubbles" color="#000" />
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" onClick={() => handleSort('pro_id')}>
                  Código
                  {sortConfig.key === 'pro_id' && sortConfig.direction === 'ascending' && <FaSortUp />}
                  {sortConfig.key === 'pro_id' && sortConfig.direction === 'descending' && <FaSortDown />}
                  {sortConfig.key !== 'pro_id' && <FaSort />}
                </th>
                <th scope="col" onClick={() => handleSort('pro_user')}>
                  Relator
                  {sortConfig.key === 'pro_user' && sortConfig.direction === 'ascending' && <FaSortUp />}
                  {sortConfig.key === 'pro_user' && sortConfig.direction === 'descending' && <FaSortDown />}
                  {sortConfig.key !== 'pro_user' && <FaSort />}
                </th>
                <th scope="col" onClick={() => handleSort('pro_classification')}>
                  Classificação
                  {sortConfig.key === 'pro_classification' && sortConfig.direction === 'ascending' && <FaSortUp />}
                  {sortConfig.key === 'pro_classification' && sortConfig.direction === 'descending' && <FaSortDown />}
                  {sortConfig.key !== 'pro_classification' && <FaSort />}
                </th>
                <th scope="col" onClick={() => handleSort('pro_name')}>
                  Assunto
                  {sortConfig.key === 'pro_name' && sortConfig.direction === 'ascending' && <FaSortUp />}
                  {sortConfig.key === 'pro_name' && sortConfig.direction === 'descending' && <FaSortDown />}
                  {sortConfig.key !== 'pro_name' && <FaSort />}
                </th>
                <th scope="col" onClick={() => handleSort('pro_status')}>
                  Status
                  {sortConfig.key === 'pro_status' && sortConfig.direction === 'ascending' && <FaSortUp />}
                  {sortConfig.key === 'pro_status' && sortConfig.direction === 'descending' && <FaSortDown />}
                  {sortConfig.key !== 'pro_status' && <FaSort />}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedReport.map((item) => (
                <tr key={item.pro_id} onClick={() => handleRowClick(item.pro_id)} style={{ cursor: 'pointer' }}>
                  <th scope="row">#{item.pro_id}</th>
                  <td>{item.pro_user}</td>
                  <td>{item.pro_classification}</td>
                  <td>{item.pro_name}</td>
                  <td>{item.pro_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

export default Report;
