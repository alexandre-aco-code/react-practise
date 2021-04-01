import React, {Component, Fragment} from 'react';
import axios from "axios";

class ContactDetail extends Component {
    state = {
        contact: {},
        contact2: [],
        address: {},
        geo: {},
        status: '',
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                let contact2 = [];
                contact2.push(res.data); // Utilise un tableau pour gérer les addresses sans erreur.
                this.setState({
                    contact: res.data,
                    address: res.data.address,          // Assign address on the state when we get the response
                    geo: res.data.address.geo,          //
                    status: res.status,
                    contact2: contact2
                })
            }
            )
            .catch(err => this.setState({ error: true})) // If we receive an error.
    }

    render() {
        const error = this.state.error;
        let {contact, address, geo} = this.state;
        // Ici on fabrique le HTML avec le tableau contact2, on accède aux addresses sans problèmes.
        const contact2 = this.state.contact2.map((item, i) => {
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
                    <p>Erreur</p>
                    : (
                    <div className="card card-body">
                        <p><strong>Name:</strong> {contact.name}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Address:</strong> {address.street}</p>
                        <p><strong>Coords:</strong> {geo.lng} {geo.lat}</p>
                        Contact : {contact2}
                    </div>
                )
            }
            </Fragment>
        );
    }
}

export default ContactDetail;
