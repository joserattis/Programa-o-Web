import { useState } from "react";

export default function App() {
  // Estado para armazenar a lista de itens, o texto do input e o item em edição
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  // CREATE: Adiciona um novo item (respeitando a imutabilidade)
  function adicionarItem() {
    if (novoItem.trim() === "") return;
    setItens([...itens, novoItem]);
    setNovoItem("");
  }

  // UPDATE (parte 1): Prepara o item para edição
  function atualizarItem(index) {
    setNovoItem(itens[index]);
    setIndiceEdicao(index);
  }

  // UPDATE (parte 2): Salva a edição
  function salvarItem() {
    const novaLista = itens.map((item, index) =>
      index === indiceEdicao ? novoItem : item
    );
    setItens(novaLista);
    setNovoItem("");
    setIndiceEdicao(null);
  }

  // DELETE: Remove um item usando filter
  function removerItem(index) {
    const novaLista = itens.filter((_, i) => i !== index);
    setItens(novaLista);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controle de Itens</h2>
      
      {/* Campo controlado pelo estado[cite: 8] */}
      <input 
        value={novoItem} 
        onChange={(e) => setNovoItem(e.target.value)} 
        placeholder="Digite um item..."
      />
      
      {/* Renderização condicional dos botões[cite: 8] */}
      {indiceEdicao === null ? (
        <button onClick={adicionarItem}>Adicionar</button>
      ) : (
        <button onClick={salvarItem}>Salvar</button>
      )}

      {/* Renderização de listas usando map()[cite: 8] */}
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => atualizarItem(index)}>Atualizar</button>
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}