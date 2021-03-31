// imrc 
import { Component } from 'react';
import "./Menu.css" ;
import Logo from "./Logo";

class Menu extends Component {
    state = { 
        items : [ "Accueil", "Présentation" , "Nous Contacter" ]
    }
    render() { 
        return ( 
            <>
                <div className="navbar">  
                    <Logo />
                    <ul className="menu">
                        { this.state.items.map( function(item){ 
                            return <li>{item}</li>
                        } ) }
                    </ul>
                </div>
                <hr />
            </>
        );
    }
}
 
export default Menu;