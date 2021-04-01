import React, { Component } from "react";
import axios from "axios";

import Contact from "../layouts/Contact";

class Contacts extends Component {
  state = {
    contacts: [{id: 11, name: "John" }, {id:22, name: "Jane" }, {id: 43, name: "Bob" }],
  };

  // testMethod(e) {
  //   e.preventDefault();
  //
  //   this.setState({ contacts: [] });
  //
  //   console.log(this);
  // }

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");

    // POST request with axios
    // const post = {
    //   title: "titre",
    //   body: "body",
    // };
    //
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", post)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.error(err));

    if (res.status === 200) {
      // Ajouter notre résultat ajax a ce qu'on a deja en state.contacts
      // spread operator ...
      // this.setState({ contacts: [...this.state.contacts, ...res.data] });
      this.setState({ contacts: res.data });
    }
  }

  render() {
    return (
      <div>
        <h2>Afficher les contacts</h2>

          {this.state.contacts.map((contact, index) => {
              /*  return <li key={index}>{contact.name}</li>;*/
              return <Contact key={index} contact={contact} />

          })}

        {/* Exemple de méthode custom avec bind this, la méthode est a décommenter pour tester. */}
        {/*<form action="" onSubmit={this.testMethod.bind(this)}>*/}
        {/*  <button>Enregistrer</button>*/}
        {/*</form>*/}
      </div>
    );
  }
}

export default Contacts;
