import React, { Component } from "react";
import axios from "axios";
import FormInput from "../forms/FormInput";

class Jsx extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
            contact: {
                nom: "",
                phone: "",
                email: "",
            },
        };

        this.submit = this.submit.bind(this);
        this.updateStateContact.bind(this);
    }

    updateStateContact = (e) => {
        const { contact } = this.state;

        contact[e.target.name] = e.target.value;

        this.setState({ contact });
    };

    async submit(e) {
        e.preventDefault();

        const { contact } = this.state;
        // TODO: vérification de la validité des champs

        // On post en BDD
        const res = await axios.post(
            "https://jsonplaceholder.typicode.com/users/",
            contact
        );

        if (res.status === 201) {
            // Si j'ai un state valide, j'ajoute le contact.
            this.setState({ contact: res.data });
        }

        // name = '';
        // phone = '';
        //
        // contact = {
        //     name
        //     phone
        // }
        // et les mettre dans le state. (Syntaxe moderne)
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <FormInput
                    onChange={this.updateStateContact}
                    type="nom"
                    label="Votre Nom"
                    id="nom"
                    name="nom"
                    placeholder="Votre Nom"
                />
                <FormInput
                    onChange={this.updateStateContact}
                    type="email"
                    label="Votre Email"
                    id="email"
                    name="email"
                    placeholder="Votre Email"
                />
                <FormInput
                    onChange={this.updateStateContact}
                    type="tel"
                    label="Votre Téléphone"
                    id="phone"
                    name="phone"
                    placeholder="Votre Téléphone"
                />

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

export default Jsx;
