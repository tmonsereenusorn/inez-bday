import React from "react";


const PersonalHarleyButton = ({ text, onClick, harleyImage, padding }) => {
    const containerStyle = {
        cursor: 'pointer',
        display: 'inline-block', // Allows the container to fit the content
        margin: '20px auto',
        textAlign: 'center', // Centers the text
        padding: padding || '20px 40px',
    };

    const textStyle = {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textDecoration: 'underline', // Underlines the text
        marginBottom: '2px', // Adds some space between the text and the image
    };

    const imageStyle = {
        display: 'block', // Ensures the image is on a new line
        backgroundImage: `url(${harleyImage})`,
        backgroundSize: 'contain', // Ensures the image fits within the dimensions
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '200px', // Fixed width
        height: '100px', // Fixed height
        paddingBottom: '100%', // Use padding-bottom to control the aspect ratio of the image
        backgroundColor: 'transparent',
        maxWidth: '100%',
        height: 'auto', // Maintain aspect ratio
        margin: '5px 0', // Minimal margin around the image for spacing, adjust as needed
    };

    return (
        <div style={containerStyle} onClick={onClick} role="button" tabIndex="0">
            <div style={textStyle}>{text}</div>
            <div style={imageStyle}></div>
        </div>
    );
}

export default PersonalHarleyButton