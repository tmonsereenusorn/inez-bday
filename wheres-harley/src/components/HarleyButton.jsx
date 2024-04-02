import React from "react";


const HarleyButton = ({ text, onClick, harleyImage, padding, fontSize }) => {
    const buttonStyle = {
        backgroundImage: `url(${harleyImage})`,
        backgroundSize: 'contain', // Adjust as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        border: 'none',
        padding: padding || '20px 40px',
        cursor: 'pointer',
        color: 'blue',
        fontWeight: 'bold',
        display: 'block',
        margin: '20px auto',
        fontSize: fontSize || '1.2rem'
    }

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    )
}

export default HarleyButton