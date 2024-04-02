import React from "react";
import photo from "../assets/tee_photo.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const TeePhoto = () => {
    const navigate = useNavigate();

    const harleySpotStyle = {
        position: 'absolute',
        left: '55.2%', // X coordinate in percentage
        top: '65.3%', // Y coordinate in percentage where the dog's reflection is
        width: '2%', // Width in percentage of the clickable area
        height: '3%', // Height in percentage of the clickable area
        backgroundColor: 'transparent', // Red color to highlight the area; set to 'transparent' to hide
    };

    const imageStyle = {
        display: 'block', // Use block to apply auto margins
        maxWidth: '100%', // Max width is 100% of the containing block
        maxHeight: '80vh', // Max height is 80% of the viewport height
        margin: '0 auto', // Auto margins to center it horizontally
        position: 'relative', // Position relative for top 50% to work
        top: '50%', // Push the top edge down to 50% of the parent
        transform: 'translateY(-50%)', // Pull back up by 50% of its own height
    };

    const handleClick = () => {
        navigate('/tee-video');
    }

    return (
        <div style={{textAlign: 'center', height: '100vh'}}>
            <h1 style={{ marginBottom: '0em' }}>Where's Harley?</h1>
            <img style={imageStyle} src={photo} alt="Find harley"/>
            <div style={harleySpotStyle} onClick={handleClick}/>
        </div>
    );
}

export default TeePhoto;