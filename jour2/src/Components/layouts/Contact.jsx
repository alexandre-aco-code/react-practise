import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Contact extends React.Component {
    render() {
        const { id, name, email } = this.props.contact;
        return (
            <article className="card card-body mb-3">
                {/* <li><Link to={`/view/contact/id`}>Voir détails</Link></li> */}
                <li>{name}</li>;
                <li>{email}</li>;
                <hr/>
            </article>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;