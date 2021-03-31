import { Component } from 'react';

class Compteur extends Component {
    state = {
        valeur:10
    }

    augmenter() {
        this.setState({
            valeur: this.state.valeur + 1
        });
    }

    passage() {
        console.log("je viens de rentrer dans le bouton +");
    }

    diminuer = () => {
        this.setState({
            valeur: this.state.valeur - 1,
        });
    }

    miseEnFormeCompteur() {
        if (this.state.valeur === 0) {
            return "Zero";
        }
        return this.state.valeur;
    }

    info = (param) => {
        console.log(param);
    }

    render() { 
        return (
            <div className="compteur">
                <span>{this.miseEnFormeCompteur()}</span>
                <button
                    onClick={this.augmenter.bind(this)}
                    onMouseEnter={this.passage}
                >
                    +
                </button>
                <button onClick={this.diminuer}>-</button>
                <button onClick={() => {this.info("une information")}}>information</button>
            </div>
        );
    }
}

export default Compteur;