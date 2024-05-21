import React, { useState } from 'react';
import api from '../services/api';
import './problem.css';

function Problem() {
  const [pro_classification, setPro_classification] = useState('');
  const [pro_name, setPro_name] = useState('');
  const [pro_photo, setPro_photo] = useState(null);
  const [location, setLocation] = useState('');
  const [sent, setSent] = useState(false); // State to control whether the report was successfully sent

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Check if all fields are filled
    console.log(pro_name, pro_classification, pro_photo);
    if (pro_name && pro_classification && pro_photo) {
      try {
        const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}problem/createProblem`, {
          pro_name: pro_name,
          pro_classification: pro_classification,
          pro_photo: pro_photo,
          //location: location
        })
          .then((response) => {
            console.log(response);
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
      setLocation('');
    } else {
        alert("Por favor, preencha todos os campos para enviar o relato.");
    }
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPro_photo(file);
  };

  // Function to get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="Problem">
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
            <label htmlFor="location">Localização:</label>
            <input
              id="location"
              type="text"
              placeholder="Digite a localização do problema"
              value={pro_photo}
              onChange={(e) => setPro_photo(e.target.value)}
            />
            <button type="button" onClick={getLocation}>Usar a localização atual</button>
          </div>
          <button type="submit">Enviar</button>
        </form>
      ) : ( // If sent, display the success report screen
        <div className="success-message">
          <h1>Relato enviado com sucesso!</h1>
          <button onClick={() => setSent(false)}>Reportar outro problema</button>
        </div>
      )}
    </div>
  );
}

export default Problem;
