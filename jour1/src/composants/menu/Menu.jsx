import { Component } from 'react';
import "./Menu.css"
import Logo from "./Logo";

class Menu extends Component {
    state = {
        items : ["Accueil","Présentation","Nous contacter"]
    }
    render() { 
        return (
            <>
                <nav className="navbar">
                    <Logo />
                    <ul className="menu">
                        {this.state.items.map(function (item) {
                            return <li>{item}</li>;
                        })}
                    </ul>
                    <hr />
                </nav>
            </>
        );
    }
}

export default Menu;