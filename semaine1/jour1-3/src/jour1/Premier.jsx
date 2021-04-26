// Simple React Snippet
// imrc

import { Component } from 'react';

// cc

class Premier extends Component {
    state = {  } // propriété state => données locales du composant
    render() { // méthode de class => obligatoire 
        return ( <h1>Premier Composant</h1> );
    }
}
 
export default Premier; // exporte la class
// l'utiliser dans le composant App