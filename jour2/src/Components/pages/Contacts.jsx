import { Component } from 'react';
import axios from "axios";
import Contact from "../layouts/Contact";

class Contacts extends Component {
    state = {
        date: new Date(),
        contacts: [
            {
                name: "John"
            },
            {
                name: "Jane"
            }
        ]
    }

    async componentDidMount() {
        const res = await axios.get
        (
            "https://jsonplaceholder.typicode.com/users/"
        );

        if (res.status === 200)
        {
            this.setState({contacts : res.data})
        }
    }


    render() { 
        return (
            <>
                <h2>Afficher les contacts</h2>

                <ul>
                    {this.state.contacts.map((contact, index) =>
                        {
                        // return <li key={index}>{contact.name}</li>
                        <Contact contact={contact} />;
                        })
                    }
                </ul>

            </>
        );
    }
}

export default Contacts; 