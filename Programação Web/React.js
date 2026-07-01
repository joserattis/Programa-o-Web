// src/App.jsx
import { useState } from 'react';

export default function CrudReact() {
  const [itens, setItens] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setItens([...itens, input])}>Adicionar</button>
      <ul>
        {itens.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}