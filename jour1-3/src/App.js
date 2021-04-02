import logo from "./logo.svg";
import "./App.css";
import Menu from "./composants/menu/Menu";
import Compteurs from "./composants/body/Compteurs";
import Articles from "./composants/body/Articles";

function App() {
    return (
        <div className="App">
            <Menu />
            <Compteurs />
            <hr />
            <Articles />
        </div>
    );
}

export default App;
