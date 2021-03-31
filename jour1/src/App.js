import logo from "./logo.svg";
import "./App.css";
import Menu from "./composants/menu/Menu";
import Compteurs from "./composants/body/Compteurs";
import Like from "./composants/commun/Like";

function App() {
    return (
        <div className="App">
            <Menu />
            <Compteurs />
            <hr />
            <Like />
        </div>
    );
}

export default App;
