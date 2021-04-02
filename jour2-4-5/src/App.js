import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import About from "./components/pages/About";
import NotFound from "./components/errors/NotFound";
import ContactDetail from "./components/contacts/ContactDetail";
import Jsx from "./components/cours/Jsx";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contacts} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/view/contact/:id"
                            component={ContactDetail}
                        />
                        <Route exact path="/cours" component={Jsx} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;
