import logo from './logo.svg';
import './App.css';
import Premier from "./Premier"; // une fois créé on l'importe dans le parent (ici composant root)
import Deuxieme from "./Deuxieme";
import Troisieme from "./Troisieme";
import Quatrieme from "./Quatrieme";
import Cinquieme from "./Cinquieme";
import Sixieme from "./Sixieme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Découverte React</h1>
        <Premier />
        <Deuxieme />
        <Troisieme />
        <Quatrieme />
        <Cinquieme />
        <Sixieme />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bonjour les amis! test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
