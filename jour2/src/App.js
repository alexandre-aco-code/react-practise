import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Body from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import About from "./components/pages/About";
import Footer from "./components/layouts/Footer";
import NotFound from "./components/errors/NotFound";
import ContactDetail from "./components/contacts/ContactDetail";
import JSX from "./components/cours/Jsx";

class App extends Component {
    render() {
        //l.27 le : veut dire joker
        return (
            <Router>
                <Header />

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Body} />
                        <Route exact path="/contact" component={Contacts} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/view/contact/:id"
                            component={ContactDetail}
                        />
                        <Route exact component={NotFound} />
                    </Switch>
                </div>

                <JSX />

                <Footer text="texte du footer" />
            </Router>
        );
    }
}

export default App;
