import { useSelector, useDispatch } from 'react-redux';
import { adicionar, remover } from './store';
import styles from './App.module.css';

export default function App() {
  const itens = useSelector(state => state.crud.itens);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button onClick={() => dispatch(adicionar("Novo Item"))}>
        Adicionar via Redux
      </button>
      <ul>
        {itens.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => dispatch(remover(i))}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}