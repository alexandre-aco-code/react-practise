import React, {Component} from 'react';
import FormInput from "../forms/FormInput";

class Jsx extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
            contact: {
                nom: '',
                phone: '',
                email: ''
            }
        }

        this.submit = this.submit.bind(this);
    }


    submit(e) {
        e.preventDefault();
        // récupérer les input du formulaire
        const inputs = e.target.querySelectorAll('input');
        // boucler autour des inputs
        // créer un objet contact
        const contact = {};
        inputs.forEach(input => {
            // assigné les valeurs des inputs a leur name dans l'objet contact
            contact[input.name] = input.value;
        });

        // et les mettre dans le state. (Syntaxe moderne)
        this.setState({contact});
    }


    render() {
        return (
            <form onSubmit={this.submit}>
                <FormInput
                    type="nom"
                    label="Votre Nom"
                    id="nom"
                    name="nom"
                    placeholder="Votre Nom"/>
                <FormInput
                    type="email"
                    label="Votre Email"
                    id="email"
                    name="email"
                    placeholder="Votre Email"/>
                <FormInput
                    type="tel"
                    label="Votre Téléphone"
                    id="phone"
                    name="phone"
                    placeholder="Votre Téléphone"/>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Jsx;
