import React, { useState } from 'react';
import './problem.css';

function Problem() {
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [sent, setSent] = useState(false); // State to control whether the report was successfully sent

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (subject && description && image && location) {
      // Here you can send the data to the API
      console.log(`Subject: ${subject}, Description: ${description}, Image: ${image}, Location: ${location}`);
      setSent(true); // Set sent to true to display the success report screen
      // Clear fields after submission
      setDescription('');
      setSubject('');
      setImage(null);
      setLocation('');
    } else {
        alert("Por favor, preencha todos os campos para enviar o relato.");
    }
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              placeholder="Relate a situação do problema"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
