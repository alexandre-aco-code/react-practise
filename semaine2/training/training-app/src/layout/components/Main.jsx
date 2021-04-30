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

        const contacts = users.map((user) => {
            return <li className={'list-group-item'} key={user.id}>
                <a href="#">{user.name} | Voir +</a>
            </li>
        });

        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <ul className={'list-group'}>
                            {contacts}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}


export default Main;
