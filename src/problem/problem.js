import React, { useState } from 'react';
import api from '../services/api';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './problem.css';
import Layout from '../layout/layout';

function Problem() {
  const [pro_classification, setPro_classification] = useState('');
  const [pro_name, setPro_name] = useState('');
  const [pro_photo, setPro_photo] = useState(null);
  const [selectedFile, setSelectedFile] = useState('');
  const [sent, setSent] = useState(false); // State to control whether the report was successfully sent
  const [pa_neighborhood, setPa_neighborhood] = useState('');
  const [pa_address, setPa_address] = useState('');
  const [pa_number, setPa_number] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (pro_name && pro_classification && pro_photo) {
      const userString = sessionStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      try {
        await api.post(`${process.env.REACT_APP_API_BASE_URL}problem/createProblem`, {
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
        });
        // Here you can send the data to the API
        setSent(true); // Set sent to true to display the success report screen
        // Clear fields after submission
        setPro_classification('');
        setPro_name('');
        setPro_photo(null);
        setPa_neighborhood('');
        setPa_address('');
        setPa_number('');

      } catch (error) {
        console.error(error);
        alert("Erro ao inserir chamado!");
      }
    } else {
      alert("Por favor, preencha todos os campos para enviar o relato.");
    }
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPro_photo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to get the user's current location and reverse geocode
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

        try {
          const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
          if (response.data.results && response.data.results.length > 0) {
            const addressComponents = response.data.results[0].address_components;
            const address = response.data.results[0].formatted_address;

            let neighborhood = '';
            let street = '';

            addressComponents.forEach(component => {
              if (component.types.includes('sublocality')) {
                neighborhood = component.long_name;
              }
              if (component.types.includes('route')) {
                street = component.long_name;
              }
              if (component.types.includes('street_number')) {
                setPa_number(component.long_name);
              }
            });

            setPa_address(street);
            setPa_neighborhood(neighborhood);
          } else {
            alert("Não foi possível obter o endereço a partir da localização.");
          }
        } catch (error) {
          console.error(error);
          alert("Erro ao obter o endereço!");
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Layout>
      <div className="container pt-navbar">
        {!sent ? ( // If not sent, display the form
          <form onSubmit={handleSubmit} className="Problem-form">
            <h1 className="text-center mb-4">Adicionar Relato</h1>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Assunto:</label>
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Informe o assunto do problema"
                value={pro_name}
                onChange={(e) => setPro_name(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descrição:</label>
              <textarea
                id="description"
                className="form-control"
                placeholder="Relate a situação do problema"
                value={pro_classification}
                onChange={(e) => setPro_classification(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Imagem:</label>
              <input
                id="image"
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-3 text-center">
              <h5 className="form-label">Localização</h5>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Endereço:</label>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      placeholder="Endereço"
                      value={pa_address}
                      onChange={(e) => setPa_address(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">Número:</label>
                    <input
                      id="number"
                      type="text"
                      className="form-control"
                      placeholder="Número"
                      value={pa_number}
                      onChange={(e) => setPa_number(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="neighboorhood" className="form-label">Bairro:</label>
                    <input
                      id="neighboorhood"
                      type="text"
                      className="form-control"
                      placeholder="Bairro"
                      value={pa_neighborhood}
                      onChange={(e) => setPa_neighborhood(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                    onClick={getLocation}
                    style={{ height: '200px' }}
                  >
                    <i className="bi bi-geo-alt" style={{ fontSize: '2rem' }}></i>
                    <span>Usar localização atual</span>
                  </button>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Criar Relato</button>
          </form>
        ) : ( // If sent, display the success report screen
          <div className="success-message">
            <h1>Relato enviado com sucesso!</h1>
            <button className="btn btn-primary" onClick={() => setSent(false)}>Reportar outro problema</button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Problem;
