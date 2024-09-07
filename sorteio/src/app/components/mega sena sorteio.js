import React, { useState } from 'react';

const MegaSenaSorteio = () => {
  const [numeros, setNumeros] = useState([]);

  const sortearNumeros = () => {
    let numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numero)) {
        numerosSorteados.push(numero);
      }
    }
    setNumeros(numerosSorteados.sort((a, b) => a - b));
  };

  return (
    <div>
      <h2>Números Sorteados</h2>
      <div>
        {numeros.map((numero, index) => (
          <span key={index} style={{ margin: '0 10px', fontSize: '24px' }}>
            {numero}
          </span>
        ))}
      </div>
      <button onClick={sortearNumeros}>Sortear Números</button>
    </div>
  );
};