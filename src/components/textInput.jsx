import React from 'react';
import TextField from '@mui/material/TextField';
import { PropTypes } from 'prop-types'

const TextInput = (props) => {
    return (
        <TextField id={props.id}
            label={props.label}
            onChange={props.onchange} />
    );
}

TextInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onchange: PropTypes.func
}

export default TextInput;
