import React, { useState } from 'react';
import './problema.css';

function Problema() {
  const [descricao, setDescricao] = useState('');
  const [assunto, setAssunto] = useState('');
  const [imagem, setImagem] = useState(null);
  const [localizacao, setLocalizacao] = useState('');
  const [enviado, setEnviado] = useState(false); // Estado para controlar se o relato foi enviado com sucesso

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verifica se todos os campos estão preenchidos
    if (assunto && descricao && imagem && localizacao) {
      // Aqui você pode enviar os dados para a API
      console.log('Assunto: ${assunto}, Descrição: ${descricao}, Imagem: ${imagem}, Localização: ${localizacao}');
      setEnviado(true); // Define enviado como true para exibir a tela de relato enviado com sucesso
      // Limpa os campos após o envio
      setDescricao('');
      setAssunto('');
      setImagem(null);
      setLocalizacao('');
    } else {
      alert("Por favor, preencha todos os campos para enviar o relato.");
    }
  };

  // Função para lidar com a seleção de imagem
  const handleImagemChange = (event) => {
    const file = event.target.files[0];
    setImagem(file);
  };

  // Função para obter a localização atual do usuário
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocalizacao('Latitude: ${latitude}, Longitude: ${longitude}');
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="Problema">
      {!enviado ? ( // Se não enviado, exibir o formulário
        <form onSubmit={handleSubmit} className="Problema-form">
          <h1>Reportar situação</h1>
          <div className="input-container">
            <label htmlFor="assunto">Assunto:</label>
            <input
              id="assunto"
              type="text"
              placeholder="Digite o assunto do problema"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              placeholder="Digite a descrição do problema"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="imagem">Imagem:</label>
            <input
              id="imagem"
              type="file"
              accept="image/*"
              onChange={handleImagemChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="localizacao">Localização:</label>
            <input
              id="localizacao"
              type="text"
              placeholder="Digite a localização do problema"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
            <button type="button" onClick={getLocation}>Obter Localização Atual</button>
          </div>
          <button type="submit">Enviar</button>
        </form>
      ) : ( // Se enviado, exibir a tela de relato enviado com sucesso
        <div className="success-message">
          <h1>Relato Enviado com Sucesso!</h1>
          <button onClick={() => setEnviado(false)}>Relatar outro problema</button>
        </div>
      )}
    </div>
  );
}

export default Problema;
