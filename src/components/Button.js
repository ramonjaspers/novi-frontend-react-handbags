import React from 'react';

function Button({ link, text, isDisabled }) {
    return (
        <button onClick={() => {console.log(text)}} href={link} disabled={isDisabled ?? false}>{text}</button>
    );
}

export default Button;