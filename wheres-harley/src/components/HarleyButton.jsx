import React from "react";


const HarleyButton = ({ text, onClick, harleyImage }) => {
    const buttonStyle = {
        backgroundImage: `url(${harleyImage})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'bold',
        display: 'block',
        margin: '20px auto',
    }

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    )
}

export default HarleyButton