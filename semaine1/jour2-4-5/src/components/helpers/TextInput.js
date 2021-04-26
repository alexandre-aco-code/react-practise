import {Fragment} from "react";
import PropTypes from 'prop-types';

const TextInput = (
    {
        name,
        placeholder,
        type,
        id,
        label
    }
) => {
    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input id={id} className="form-control" type={type} name={name} placeholder={placeholder}/>
            </div>
        </Fragment>
    )
}

TextInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string
}

export default TextInput;
