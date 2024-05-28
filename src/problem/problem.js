import React, { useState } from 'react';
import api from '../services/api';
import './problem.css';
import Layout from '../layout/layout'; 

function Problem() {
  const [pro_classification, setPro_classification] = useState('');
  const [pro_name, setPro_name] = useState('');
  const [pro_photo, setPro_photo] = useState(null);
  const [sent, setSent] = useState(false); // State to control whether the report was successfully sent
  const [pa_neighborhood, setPa_neighborhood] = useState('');
  const [pa_address, setPa_address] = useState('');
  const [pa_number, setPa_number] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (pro_name && pro_classification && pro_photo) {
      const userString = sessionStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      try {
        const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}problem/createProblem`, {
          problem: {
            pro_name: pro_name,
            pro_classification: pro_classification,
            pro_photo: pro_photo,
            pro_user: user.user_id,
            pro_status: 'PENDENTE'
          },
          problemaddress: {
            pa_address: pa_address,
            pa_neighborhood: pa_neighborhood,
            pa_number: pa_number,
            pa_state: 'SP',
            pa_city: 'Sorocaba',
          }
        })
      } catch (error) {
        console.error(error);
        alert("Erro ao inserir chamado!");
      }
      // Here you can send the data to the API
      setSent(true); // Set sent to true to display the success report screen
      // Clear fields after submission
      setPro_classification('');
      setPro_name('');
      setPro_photo(null);
      setPa_neighborhood('');
      setPa_address('');
      setPa_number('');

    } else {
        alert("Por favor, preencha todos os campos para enviar o relato.");
    }
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPro_photo(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Layout>
      <div className="body-content">
        {!sent ? ( // If not sent, display the form
          <form onSubmit={handleSubmit} className="Problem-form">
            <h1>REPORTAR SITUAÇÃO</h1>
            <div className="input-container">
              <label htmlFor="subject">Assunto:</label>
              <input
                id="subject"
                type="text"
                placeholder="Informe o assunto do problema"
                value={pro_name}
                onChange={(e) => setPro_name(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="description">Descrição:</label>
              <textarea
                id="description"
                placeholder="Relate a situação do problema"
                value={pro_classification}
                onChange={(e) => setPro_classification(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="image">Imagem:</label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="neighboorhood">Bairro:</label>
              <input
                id="neighboorhood"
                type="text"
                placeholder="Bairro"
                value={pa_neighborhood}
                onChange={(e) => setPa_neighborhood(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="address">Rua:</label>
              <input
                id="address"
                type="text"
                placeholder="Endereço"
                value={pa_address}
                onChange={(e) => setPa_address(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                placeholder="Número"
                value={pa_number}
                onChange={(e) => setPa_number(e.target.value)}
              />
            </div>
              <button type="button" onClick={getLocation}>Usar a localização atual</button>
            <button type="submit">Enviar</button>
          </form>
        ) : ( // If sent, display the success report screen
          <div className="success-message">
            <h1>Relato enviado com sucesso!</h1>
            <button onClick={() => setSent(false)}>Reportar outro problema</button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Problem;
