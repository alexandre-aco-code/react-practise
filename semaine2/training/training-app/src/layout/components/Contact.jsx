// Contact.jsx
import { Component } from 'react';
import { PropTypes } from 'prop-types';

class Contact extends Component {

    state = {
        contact: {}
    }

    componentDidMount() {
        this.setState({ contact: this.props.contact });
    }

    render() {
        return (
            <li className={'list-group-item'}>
                <a href="#">{this.state.contact.name}</a>
            </li>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object
}

export default Contact;