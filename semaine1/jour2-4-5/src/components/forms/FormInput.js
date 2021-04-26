import PropTypes from 'prop-types';

const FormInput = (
    {
        name,
        type,
        id,
        placeholder,
        label
    }
) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                placeholder={placeholder}/>
        </div>
    );
};

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
}

export default FormInput;
