import React  from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layout/layout';
import  './graphics.css' 

function Graphics() {
  const userString = sessionStorage.getItem('user');
  const user = userString ? JSON.parse(userString):null;
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="layout">
        <Layout/>
      </div>

      <div className="content">
        <Container>
          <h1 className="text-center my-4">Relatório</h1>
          <Row>
            <Col md={6}>
              <Doughnut data={data} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Graphics;