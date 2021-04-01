import React, { Component } from "react";
import  { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { id, name, email } = this.props.contact;
    return (
      <article className="card card-body mb-3">
        <p><Link to={`/view/contact/${id}`}>Voir details</Link></p>
        <p>{name}</p>
        <p>{email}</p>
      </article>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
