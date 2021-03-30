import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/layouts/Header.jsx";
import Body from "./Components/pages/Body.jsx";
import NotFound from './Components/errors/NotFound.jsx';
import About from "./Components/pages/About.jsx";
import Contacts from "./Components/pages/Contacts.jsx";
import Footer from "./Components/layouts/Footer.jsx";

class App extends Component {
    render() {
        return (
            <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/contact" component={Contacts} />
                    <Route exact path="/about" component={About} />
                    {/* <Route exact path="/view/contact/:id" component={ContactDetail} /> */}
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer/>
            </Router>
        );
    }
}

export default App;
