import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ label, backgroundColor, onClick }) {
    return (
        <button onClick={onClick}
            style={backgroundColor && { backgroundColor }}>
            {label}
        </button>
    );
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
};