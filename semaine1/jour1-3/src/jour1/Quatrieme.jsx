import { Component } from "react";

class Quatrieme extends Component {
    state = {
        chiffre: 30, // déconseillé de créer un attribut de class dans le State
        libelle: "likes"
    };
    render() {
        return (
            <>
                <p>Quatrième Composant</p>
                <p className="nombre">{this.state.chiffre} {this.state.libelle }</p>
                {/* <p className="nombre">{this.state.chiffre + " " + this.state.libelle }</p> */}
            </>
        );
    }
}


export default Quatrieme;
