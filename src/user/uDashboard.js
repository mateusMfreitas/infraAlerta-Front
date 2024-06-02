import React, { useEffect, useState } from 'react';
import './uDashboard.css';
import api from '../services/api';
import Layout from '../layout/layout'; 
import { useNavigate } from 'react-router-dom';
import Loading from 'react-loading';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'; // Importa os ícones de seta

function UDashboard() {
    const navigate = useNavigate();
    const [report, setReport] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    function handleRowClick(id) {
        navigate(`/report/${id}`); 
    }

    useEffect(() => {
        async function getChamados() {
            try {
                const userString = sessionStorage.getItem('user');
                if (!userString) {
                    throw new Error("Usuário não está logado!");
                }
                const user = JSON.parse(userString);
                const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}problem/getProblemsUser/${user.user_id}`);
                setReport(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError("Erro ao buscar chamados!");
                setLoading(false);
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
    
    const getSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
        }
        return <FaSort />;
    };

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
                                <th scope="col" onClick={() => handleSort('pro_id')}>Código {getSortIcon('pro_id')}</th>
                                <th scope="col" onClick={() => handleSort('pro_classification')}>Classificação {getSortIcon('pro_classification')}</th>
                                <th scope="col" onClick={() => handleSort('pro_name')}>Assunto {getSortIcon('pro_name')}</th>
                                <th scope="col" onClick={() => handleSort('pro_status')}>Status {getSortIcon('pro_status')}</th> {/* Adiciona a coluna de status */}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedReport.map((item) => (
                                <tr key={item.pro_id} onClick={() => handleRowClick(item.pro_id)} style={{ cursor: 'pointer' }}>
                                    <th scope="row">#{item.pro_id}</th>
                                    <td>{item.pro_classification}</td>
                                    <td>{item.pro_name}</td>
                                    <td>{item.pro_status}</td> {/* Exibe o status do chamado */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Layout>
    );
}

export default UDashboard;
