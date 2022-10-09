import logo from './logo.svg';
import './App.css';
import data from '../src/data/alimentos.json'

function App() {
  return (
    <div className="App">
      <h1>O que comi hoje?</h1>
      <select name="foods" id="foods">
      {data.alimentos.map(i => (
        <option value={i.nome}>{i.nome}</option>
      ))}
      </select>
      <div>
        <input id='qtd' placeholder='Qtd (gramas)'></input>
      </div>
      <button id="calcular">Calcular</button>
    </div>
  );
}

export default App;
