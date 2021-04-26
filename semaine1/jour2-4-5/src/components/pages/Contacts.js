import React, {Component} from "react";
import axios from "axios";

import Contact from "../contacts/Contact";

class Contacts extends Component {
    state = {
        contacts: [],
    };

    // Cette méthode va effacer le contact dans le state
    deleteContact = (id) => {
        // On filtre les contacts du state et on en lève celui qui est concerné
        const contacts = this.state.contacts.filter(contact => contact.id !== id);

        //
        this.setState({contacts});
    }

    async componentDidMount() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/");

        if (res.status === 200) {
            this.setState({contacts: res.data});
        }
    }

    render() {
        return (
            <div>
                <h2>Afficher les contacts</h2>

                {this.state.contacts.map((contact, index) => {
                    // On passe notre méthode en prop dans Contact
                    return <Contact deleteContact={this.deleteContact} key={index} contact={contact}/>

                })}

            </div>
        );
    }
}

export default Contacts;
