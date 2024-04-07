import React from "react";
import photo from "../assets/val_pk_photo.png";
import { useNavigate } from "react-router-dom";

const ValPKPhoto = () => {
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
        maxWidth: '500px',
        margin: '0 auto', // Centers the container
        marginBottom: '20px'
    };

    const harleySpotStyle = {
        position: 'absolute',
        left: '66%',
        top: '82%',
        width: '3.9%',
        height: '3.5%',
        backgroundColor: 'transparent', // For visibility, could be set to rgba(255,0,0,0.5)
    };

    const imageStyle = {
        display: 'block',
        width: '100%',
        height: 'auto', // Ensures the image maintains its aspect ratio
    };

    const handleClick = () => navigate('/val-pk-video');

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

export default ValPKPhoto;
