import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../services/api';
import Layout from '../layout/layout'; // Importe o componente Layout
import Loading from 'react-loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'chart.js/auto';

function ADashboard() {
  const [chartData, setChartData] = useState({
    bar: null,
    pie: null,
  });
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    async function fetchData() {
      try {
        const barResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/bar-data`);
        const pieResponse = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/report/pie-data`);

        setChartData({
          bar: barResponse.data,
          pie: pieResponse.data,
        });
        setLoading(false); // Dados carregados
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Erro ao carregar dados
      }
    }

    fetchData();
  }, []);

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chamados por Bairro',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tipos de Problemas',
      },
    },
  };

  return (
    <Layout> {/* Envolva o conteúdo com o componente Layout */}
      <Container fluid>
        <h1 className="text-center mt-4 pt-navbar">Dashboard Administrativa</h1>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loading type="spinningBubbles" color="#000" />
          </div>
        ) : (
          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Chamados por Bairro</Card.Title>
                  <Card.Text className="text-center">
                    Este gráfico mostra a quantidade de chamados registrados em cada bairro.
                  </Card.Text>
                  <div style={{ height: '400px' }}>
                    {chartData.bar && <Bar data={chartData.bar} options={barOptions} />}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Tipos de Problemas</Card.Title>
                  <Card.Text className="text-center">
                    Este gráfico mostra a distribuição dos tipos de problemas mais comuns relatados.
                  </Card.Text>
                  <div style={{ height: '400px' }}>
                    {chartData.pie && <Pie data={chartData.pie} options={pieOptions} />}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
}

export default ADashboard;
