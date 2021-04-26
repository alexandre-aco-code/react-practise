//sfc stateless fonctional component

const diminuer = (data) => {
    //console.log(this.state.valeur);
    //this.setState({ valeur : this.state.valeur - 1 });
    this.props.diminuer(data);
};

function passage() {
    console.log("je viens de rentrer dans le bouton +");
}

const info = (param) => {
    console.log(param);
};

function augmenter(data) {
    this.props.augmenter(data);
}

function misEnformeCompteur(valeur) {
    if (valeur === 0) {
        return "Zero";
    }
    return valeur;
}

const Compteur = (props) => {
    return (
        <div className="compteur" style={{ padding: "0.2em 0" }}>
            <span>{misEnformeCompteur(props.compteur.valeur)}</span>
            <button
                onClick={() => {
                    props.augmenter(props.compteur);
                }}
                onMouseEnter={passage}
            >
                +
            </button>
            <button
                onClick={() => {
                    props.diminuer(props.compteur);
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    info("une information");
                }}
            >
                information
            </button>
        </div>
    );
};

export default Compteur;
