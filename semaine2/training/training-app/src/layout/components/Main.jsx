// Main.js

import { Component } from 'react';


class Main extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }


    async getUsers() {
        const URL = `https://jsonplaceholder.typicode.com/users/`;

        // fetch(URL)
        //     .then(response => {
        //         if (response.status !== 200) {
        //             throw new Error('Something wrong happened, Please try again later');
        //         }
        //
        //         return response.json();
        //     }).then(users => {
        //     this.setState({users});
        // }).catch(e => {
        //     console.error(e.message);
        // })

        try {
            const response = await fetch(URL);
            if (response.status !== 200) {
                throw new Error('Something wrong happened, Please try again later');
            }
            const users = await response.json();

            this.setState({ users });
        } catch (error) {
            console.error(error.message);
        }
    }


    render() {
        const { users } = this.state;

        const contacts = users.map(user => {
            // return <p key={user.id}>{user.name}</p>
            return (
                <li key={user.id} className={'list-group-item'}>
                    <a href="#">{user.name} | Voir +</a>
                </li>
            )
        })

        return (
            <div className='col-md-4'>
                <ul className={'list-group'}>
                    {contacts}
                </ul>
            </div>
        )
    }

}


export default Main;
