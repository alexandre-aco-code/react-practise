import React, { Component, Fragment } from "react";
import loader from './loader.gif';
// import { Link } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
// } from "react-router-dom";

class UsersListComponent extends Component {
    state = {
        users: [],
        loading: true,
        showContactDetails: false,
    };

    async componentDidMount() {
        // Notre requete ici
        const url = "https://jsonplaceholder.typicode.com/users/";
        const response = await fetch(url);
        // console.log(response);

        try {
            if (response.status === 200) {
                const users = await response.json();
                console.log(users);
                this.setState({ users, loading: false })
            }

        } catch (err) {
            console.log(err.message);
        }

        // this.setState({ users: users })
        // setState Users
        // loading = false
    }


    toggleDetail = () => {
        console.log(!this.state.showContactDetails);
        this.setState({ showContactDetails: !this.state.showContactDetails })
    }

    render() {
        const { users, loading } = this.state;

        const usersList = users.map((user, index) => {
            return (
                <li key={index}>
                    <p>{index}. {user.name}</p>
                    <p>
                        <button onClick={this.toggleDetail}>En savoir plus</button>
                    </p>
                </li>
            )
        });

        return (
            // Si loading === true //
            // On affiche un loader //
            // sinon on affiche les  users // Une boucle
            <Fragment>

                <ul>
                    {loading ? <img src={loader} alt="Chargement..." /> : <ul>{usersList}</ul>}
                    {/* {this.state.users.map(user => <li>{user.name}</li>)} */}
                </ul>

            </Fragment>
        );
    }
}

export default UsersListComponent;
