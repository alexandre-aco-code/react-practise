import { Component } from "react";
import Compteur from "./Compteur";

class Compteurs extends Component {
    state = {
        compteurs: [
            { id: 1, valeur: 12 },
            { id: 2, valeur: 0 },
            { id: 3, valeur: -4 },
            { id: 4, valeur: 5 },
        ],
    };

    augmenter = (data) => {
        //console.log("augmenter dans le composant Parent");
        // console.log( data );
        // il faut cloner le compteur qui est dans le state

        // clone
        let cloneCompteur = [...this.state.compteurs];
        // recherche
        let compteurAModifier = cloneCompteur.find(function (item) {
            return item.id === data.id;
        });
        // récupére la position de l'élément recherché dans le clone
        let index = cloneCompteur.indexOf(compteurAModifier);
        // augmente de + 1 l'item concerné dans le clone
        cloneCompteur[index].valeur++;
        // mettre à jour la valeur dans le state pour propriété compteur
        // et react et dès qu'il y a une valeur différente => Reaact va mettre à jour le composant concerné (celui sur le quel vous avez cliqué)
        this.setState({
            compteurs: cloneCompteur,
        });
    };

    diminuer = (data) => {
        // clone le state
        const cloneCompteur = [...this.state.compteurs];
        const resultat = cloneCompteur.find((item) => item.id === data.id);
        const index = cloneCompteur.indexOf(resultat);
        cloneCompteur[index].valeur--;
        this.setState({
            compteur: cloneCompteur,
        });
    };

    render() {
        return (
            <>
                {this.state.compteurs.map((item, index) => (
                    <Compteur
                        key={index}
                        compteur={item}
                        augmenter={this.augmenter}
                        diminuer={this.diminuer}
                    />
                ))}
            </>
        );
    }
}

export default Compteurs;
