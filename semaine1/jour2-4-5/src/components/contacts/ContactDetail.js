import React, {Component, Fragment} from 'react';
import axios from "axios";
import NotFound from "../errors/NotFound";

class ContactDetail extends Component {
    state = {
        contact: [],
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                let contact = [];
                contact.push(res.data); // Utilise un tableau pour gérer les addresses sans erreur.

                this.setState({contact});
            })
            .catch(err => this.setState({error: true})) // If we receive an error.
    }

    render() {
        const error = this.state.error;
        let {contact} = this.state;
        // Ici on fabrique le HTML avec le tableau contact2, on accède aux addresses sans problèmes.
        contact = this.state.contact.map((item, i) => {
            return (
                // On oublie pas la key, on est dans une boucle
                <div key={i}>
                    <h5> {item.name} </h5>
                    <h5> {item.email} </h5>
                    <h5>{item.address.street}</h5>
                    <h5>{item.address.geo.lng} {item.address.geo.lat}</h5>
                </div>);
        });
        return (
            // Rendu conditionnel avec ternary operator possible grâce à Fragment
            // Il y a plusieurs, au moins 9 à ma connaissance, celle-ci est ma préférée.
            // Plus simple avec un simple if statement : pas besoin de Fragment
            <Fragment>
                {
                    error
                        ?
                        // <DealWithErrors /> composants en charge de gérer les erreurs
                        // TODO: implémenter un composant qui gère les erreurs
                        <NotFound/>
                        : (
                            <div className="card card-body">
                                Contact : {contact}
                            </div>
                        )
                }
            </Fragment>
        );
    }
}

export default ContactDetail;
