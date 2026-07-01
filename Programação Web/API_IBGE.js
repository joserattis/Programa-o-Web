// src/App.jsx
import { useState, useEffect } from 'react';

export default function IbgeReact() {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    // Busca dados da API IBGE ao carregar o componente[cite: 11]
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(res => res.json())
      .then(data => setEstados(data));
  }, []); // Array vazio garante que rode apenas uma vez

  return (
    <div>
      <h2>Estados Brasileiros</h2>
      <ul>
        {estados.map(estado => (
          <li key={estado.id}>{estado.nome} ({estado.sigla})</li>
        ))}
      </ul>
    </div>
  );
}