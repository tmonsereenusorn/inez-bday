import React from "react";
import backgroundImg from "../assets/wheres_harley_landing_page.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import HarleyButton from "../components/HarleyButton";
import harley1 from "../assets/harley_button.png";
import harley2 from "../assets/harley_button_2.png";

const Landing = () => {
    const navigate = useNavigate(); // Hook for navigation

    const landingStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        height: '100vh', // Full height of the viewport
        color: 'white', // Assuming white text color for better readability
        paddingTop: '50px', // Adjust this value to move your content down
        textAlign: 'center',
    };

    const buttonContainerStyle = {
        display: 'flex',       // Aligns children in a row
        flexDirection: 'row',  // Explicitly set the direction to row
        alignItems: 'center',  // Align items vertically
        justifyContent: 'center', // Centers the container in the parent div
        width: 'fit-content',  // Shrink the width to fit the content
        margin: '0 auto',      // Center the container horizontally
        gap: '10px',           // Adjust gap as needed
    };

    const onClickTee = () => {
        navigate('/tee-photo'); // Navigate to the next page
    };

    const onClickValPK = () => {
        navigate('/val-pk-photo'); // Navigate to the next page
    };

    return (
        <div style={landingStyle}>
            <h1 style={{ fontSize: '48px' }}>🎉🎉🎉 HAPPY BIRTHDAYYYYYYYY 🎉🎉🎉</h1>
            <p style={{ fontSize: '24px', paddingTop: '0px' }}>Find and click on a wild Harley in each photo to uncover secret messages 🫵😯</p>
            <div style={buttonContainerStyle}>
                <HarleyButton text="TEE" onClick={onClickTee} harleyImage={harley1} color={'blue'} />
                <HarleyButton text="VAL + PK" onClick={onClickValPK} harleyImage={harley2} color={'blue'} />
            </div>
            
        </div>
    );
}

export default Landing;