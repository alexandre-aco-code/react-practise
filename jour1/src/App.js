import logo from './logo.svg';
import './App.css';
import Menu from "./composants/menu/Menu";
import Compteur from './composants/body/Compteur';

function App() {
  return (
    <div className="App">
      <Menu />
      <Compteur />
    </div>
  );
}

export default App;
