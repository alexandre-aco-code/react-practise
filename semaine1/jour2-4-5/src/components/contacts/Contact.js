import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Contact extends Component {
    state = {
        showEmail: false
    }

    maybeShowDetails = () => {
        this.setState({showEmail: !this.state.showEmail});
    }

    deleteContact(id) {
        // On appelle la méthode du parent et on lui donne l'id
        this.props.deleteContact(id);
    }

    render() {
        const {id, name, email} = this.props.contact;
        const {showEmail} = this.state;
        let text = showEmail ? 'Cacher' : 'Voir +';

        return (
            <article className="card card-body mb-3">
                <p><Link to={`/view/contact/${id}`}>Voir details</Link></p>
                <p>{name}</p>
                {showEmail ? <p>{email}</p> : null}

                <div className="row">
                    <button className="btn btn-xs btn-info" onClick={this.maybeShowDetails}>{text}</button>
                    {/*// On récupère l'id et on le remonte à la méthode deleteContact */}
                    <button className="btn btn-xs btn-danger" onClick={this.deleteContact.bind(this, id)}>Effacer le
                        Contact
                    </button>
                </div>
            </article>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    // On attend une function pour effacer le contact
    deleteContact: PropTypes.func
};

export default Contact;
