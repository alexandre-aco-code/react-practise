// ContactList.jsx
import { Component } from 'react';
import Contact from "./Contact";

class ContactList extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.getContacts();
    }

    async getContacts() {
        const URL = `https://jsonplaceholder.typicode.com/users/`;
        try {
            const response = await fetch(URL);
            if (response.status !== 200) {
                throw new Error('An Error Occured');
            }

            const contacts = await response.json();
            this.setState({ contacts });

        } catch (e) {
            console.error(e.message);
        }
    }


    render() {

        const contactList = this.state.contacts.map(contact => {
            return (
                <Contact key={contact.id} contact={contact} />
            )
        });

        return (
            // {isLoading ? null : {contactList }}
            
            <ul className={'list-group col-md-3'}>{contactList}</ul>
        )
    }

}

export default ContactList;