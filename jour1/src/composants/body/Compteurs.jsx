import { Component } from 'react';
import Compteur from "./Compteur";

class Compteurs extends Component {
    state = {
        compteurs: [
            {id : 1, valeur:12},
            {id : 2, valeur:0},
            {id : 3, valeur:-4},
            {id : 4, valeur:5},
        ]
    }
    render() { 
        return ( 
            <>
                {this.state.compteurs.map((item, index) => <Compteur key={index} compteur={item} />)}
            </>

        );
    }
}

export default Compteurs;