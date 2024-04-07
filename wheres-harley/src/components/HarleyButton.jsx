import React from "react";


const HarleyButton = ({ text, onClick, harleyImage, padding, fontSize, color }) => {
    const buttonStyle = {
        backgroundImage: `url(${harleyImage})`,
        backgroundSize: 'contain', // Adjust as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        border: 'none',
        padding: padding || '20px 40px',
        cursor: 'pointer',
        color: color || 'white',
        fontWeight: 'bold',
        display: 'block',
        margin: '20px auto',
        fontSize: fontSize || '1.2rem'
    }

    return (
        <div>
            <button style={buttonStyle} onClick={onClick}>
                {text}
            </button>
        </div>
        
    )
}

export default HarleyButton