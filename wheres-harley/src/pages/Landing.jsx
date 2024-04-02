import React from "react";
import backgroundImg from "../assets/wheres_harley_landing_page.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import HarleyButton from "../components/HarleyButton";

const Landing = () => {
    const navigate = useNavigate(); // Hook for navigation

    const landingStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        height: '100vh', // Full height of the viewport
        color: 'white', // Assuming white text color for better readability
        paddingTop: '50px', // Adjust this value to move your content down
        textAlign: 'center'
    };

    const startGame = () => {
        navigate('/tee-photo'); // Navigate to the next page
    };

    return (
        <div style={landingStyle}>
            <h1 style={{ fontSize: '48px' }}>🎉🎉🎉 HAPPY BIRTHDAYYYYYYYY 🎉🎉🎉</h1>
            <p style={{ fontSize: '24px', paddingTop: '0px' }}>Find and click on a wild Harley in each photo to uncover secret messages 🫵😯</p>
            <HarleyButton text="Start" onClick={startGame} />
        </div>
    );
}

export default Landing;