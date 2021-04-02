import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <div style={Style}>
            <h2 className="text-info">{props.footer}</h2>
        </div>
    );
};


const Style = {
    textDecoration: 'underline',
    backgroundColor: 'mediumvioletred',
}

Footer.defaultProps = {
    text: 'le texte par défaut',
    footer: 'texte par defaut'
}

// props = custom properties.
// PropType checking.
Footer.propTypes = {
    text: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired
}


export default Footer;
