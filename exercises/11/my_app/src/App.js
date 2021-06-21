import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const arr = [
  'ir ao fórum',
  'fazer petição inicial',
  'contrarrazoar processo do JESP',
];

function App() {
  return (
    <div className="App">
      <ul>{arr.map((t) => Task(t))}</ul>
    </div>
  );
}

export default App;
