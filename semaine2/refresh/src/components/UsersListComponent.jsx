import React, { Component, Fragment } from "react";
import loader from './loader.gif';
// import { Link } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class UsersListComponent extends Component {
    state = {
        users: [],
        loading: true,
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
                this.setState({ users, loading:false })
            }

        } catch (err) {
            console.log(err.message);
        }
        
        // this.setState({ users: users })
        // setState Users
        // loading = false
    }

    render() {
        const { users, loading } = this.state;

        const showContactInfos = () => {
            console.log("test");
        }

        const usersList = users.map((user, index) => {
            return (
                <Fragment key={index}>
                    <li>{user.name}</li>
                    <li><button onClick={showContactInfos}>En savoir plus</button></li>
                </Fragment>
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
