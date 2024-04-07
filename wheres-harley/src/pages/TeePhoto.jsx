import React from "react";
import photo from "../assets/tee_photo.png";
import { useNavigate } from "react-router-dom";

const TeePhoto = () => {
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
        maxWidth: '800px',
        margin: '0 auto', // Centers the container
        marginBottom: '20px'
    };

    const harleySpotStyle = {
        position: 'absolute',
        left: '60.3%',
        top: '60%',
        width: '4%',
        height: '4%',
        backgroundColor: 'transparent', // For visibility, could be set to rgba(255,0,0,0.5)
    };

    const imageStyle = {
        display: 'block',
        width: '100%',
        height: 'auto', // Ensures the image maintains its aspect ratio
    };

    const handleClick = () => navigate('/tee-video');

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

export default TeePhoto;
