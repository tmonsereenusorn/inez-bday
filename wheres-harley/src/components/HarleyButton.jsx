import React from "react";
import backgroundImg from "../assets/harley_button.png";

const HarleyButton = ({ text, onClick }) => {
    const buttonStyle = {
        backgroundImage: `url(${backgroundImg})`,
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