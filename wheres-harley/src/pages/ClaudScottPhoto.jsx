import React from "react";
import photo from "../assets/claud_scott_photo.png";
import { useNavigate } from "react-router-dom";

const ClaudScottPhoto = () => {
    const navigate = useNavigate();

    // Simplified container style to handle both text positioning and image centering
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Adjusts the spacing between items
        height: '100vh',
        textAlign: 'center',
        paddingBottom: '50px'
    };

    // Apply necessary styles directly to the image container and clickable area
    const imageContainerStyle = {
        position: 'relative',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto', // Centers the container
        marginBottom: '20px'
    };

    const harleySpotStyle = {
        position: 'absolute',
        left: '85%',
        top: '7%',
        width: '12%',
        height: '12%',
        backgroundColor: 'transparent', // For visibility, could be set to rgba(255,0,0,0.5)
    };

    const imageStyle = {
        display: 'block',
        width: '100%',
        height: 'auto', // Ensures the image maintains its aspect ratio
    };

    const handleClick = () => navigate('/claud-scott-video');

    return (
        <div style={containerStyle}>
            <h1>Where's Harley?</h1>
            <div style={imageContainerStyle}>
                <img style={imageStyle} src={photo} alt="Find Harley" />
                <div style={harleySpotStyle} onClick={handleClick}/>
            </div>
        </div>
    );
};

export default ClaudScottPhoto;
