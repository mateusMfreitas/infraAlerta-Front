import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reports.css';
import api from '../services/api';
import Layout from '../layout/layout';
import Loading from 'react-loading';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import logo from '../assets/Logo.png'; // Assumindo que a logo está na pasta assets

function Reports() {
  const [neighborhoodReport, setNeighborhoodReport] = useState([]);
  const [userReport, setUserReport] = useState([]);
  const [typesReport, setTypesReport] = useState([]);
  const [statusReport, setStatusReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generatingReport, setGeneratingReport] = useState(false);
  
  useEffect(() => {
    async function getReports() {
      try {
        const neighborhoodResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/neighborhoods`);
        const userResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/users`);
        const typesResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/types`);
        const statusResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/status`);
        
        // Ajustando a atribuição dos dados ao estado
        if (neighborhoodResponse.data && Array.isArray(neighborhoodResponse.data.neighborhoods)) {
          setNeighborhoodReport(neighborhoodResponse.data.neighborhoods);
        }
        if (userResponse.data && Array.isArray(userResponse.data.users)) {
          // Trocar IDs por nomes de usuário
          const usersWithNames = await Promise.all(
            userResponse.data.users.map(async (item) => {
              const userDetails = await getUserDetails(item.user);
              return { ...item, user: userDetails.name }; // Assumindo que 'name' é o campo do nome do usuário
            })
          );
          setUserReport(usersWithNames);
        }
        if (typesResponse.data && Array.isArray(typesResponse.data.types)) {
          setTypesReport(typesResponse.data.types);
        }
        if (statusResponse.data && Array.isArray(statusResponse.data.statuses)) {
          setStatusReport(statusResponse.data.statuses);
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

  const getUserDetails = async (userId) => {
    try {
      const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}user/getUser/${userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar detalhes do usuário!");
    }
  };

  // função para gerar o relatório em PDF
  const generatePDFReport = () => {
    setGeneratingReport(true);

    // Cria um novo documento PDF
    const doc = new jsPDF();

    // Adiciona o cabeçalho ao PDF
    const logoWidth = 30;
    const logoHeight = 30;
    const logoX = 10;
    const logoY = 10;

    // Adiciona a imagem da logo ao PDF
    doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

    // Adiciona o título do sistema e o título do relatório
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFont('helvetica', 'bold');
    doc.text('InfraAlerta', logoX + logoWidth + 10, logoY + 20);
    doc.setFontSize(16);
    doc.setTextColor(100);
    doc.setFont('helvetica', 'normal');
    doc.text('Relatórios', logoX + logoWidth + 10, logoY + 30);

    // Adiciona uma linha divisória
    doc.setLineWidth(0.5);
    doc.line(10, logoY + logoHeight + 10, 200, logoY + logoHeight + 10);

    // Adiciona os dados das tabelas ao PDF
    let startY = logoY + logoHeight + 20;
    startY = addDataToPDF(doc, neighborhoodReport, 'Bairros com mais chamados', ['Bairro', 'Quantidade de Chamados'], startY);
    startY = addDataToPDF(doc, userReport, 'Usuários que mais reportaram', ['Usuário', 'Quantidade de Chamados'], startY);
    startY = addDataToPDF(doc, typesReport, 'Tipos de Problemas mais comuns', ['Tipo de Problema', 'Quantidade de Chamados'], startY);
    addDataToPDF(doc, statusReport, 'Status dos chamados', ['Status', 'Quantidade de Chamados'], startY);

    // Salva o documento PDF
    doc.save('relatorio.pdf');

    // Finaliza a geração do relatório
    setGeneratingReport(false);
  };

  // função para adicionar dados de uma tabela ao PDF
  const addDataToPDF = (doc, data, title, headers, startY) => {
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 10, startY);
    doc.autoTable({
      startY: startY + 10,
      head: [headers],
      body: data.map(item => [item.neighborhood || item.user || item.type || item.status, item.count]),
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [220, 220, 220] }
    });
    return doc.autoTable.previous.finalY + 10; // Retorna a posição Y final da tabela para evitar sobreposição
  };

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
              <h3>Bairros com mais relatos</h3>
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
              <h3>Usuários que mais reportaram</h3>
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
              <h3>Relatos mais comuns</h3>
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
              <h3>Status dos relatos</h3>
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
              <button className="btn btn-primary" onClick={generatePDFReport}>
                Gerar Relatório em PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Reports;
