import React from 'react';

function Button({ link, text }) {
    return (
        <button href={link}>{text}</button>
    );
}

export default Button;