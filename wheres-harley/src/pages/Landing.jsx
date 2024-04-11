import React from "react";
import backgroundImg from "../assets/wheres_harley_landing_page.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import harley1 from "../assets/harley_button.png";
import harley2 from "../assets/harley_button_2.png";
import harley3 from "../assets/harley_button_3.png";
import harley4 from "../assets/harley_button_4.png";
import harley5 from "../assets/harley_button_5.png";
import harley6 from "../assets/harley_button_6.png";
import harley7 from "../assets/harley_button_7.png";
import PersonalHarleyButton from "../components/PersonalHarleyButton";

const Landing = () => {
    const navigate = useNavigate(); // Hook for navigation

    const landingStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        height: '100vh', // Full height of the viewport
        color: 'white', // Assuming white text color for better readability
        paddingTop: '10px', // Adjust this value to move your content down
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

    const onClickAshley = () => {
        navigate('/ashley-photo'); // Navigate to the next page
    };

    const onClickLily = () => {
        navigate('/lily-photo'); // Navigate to the next page
    };

    const onClickMae = () => {
        navigate('/mae-photo'); // Navigate to the next page
    };

    const onClickAlina = () => {
        navigate('/alina-photo'); // Navigate to the next page
    };

    const onClickClaudScott = () => {
        navigate('/claud-scott-photo'); // Navigate to the next page
    };

    return (
        <div style={landingStyle}>
            <h1 style={{ fontSize: '48px' }}>🎉🎉🎉 HAPPY BIRTHDAYYYYYYYY 🎉🎉🎉</h1>
            <p style={{ fontSize: '24px', paddingTop: '0px' }}>Find and click on a wild Harley in each photo to uncover secret messages 🫵😯</p>
            <div style={buttonContainerStyle}>
                <PersonalHarleyButton text="TEE" onClick={onClickTee} harleyImage={harley1} color={'blue'} />
                <PersonalHarleyButton text="VAL" onClick={onClickValPK} harleyImage={harley2} color={'blue'} />
                <PersonalHarleyButton text="ASHLEY" onClick={onClickAshley} harleyImage={harley3} color={'blue'} />
                <PersonalHarleyButton text="LILY" onClick={onClickLily} harleyImage={harley4} color={'blue'} />
            </div>
            <div style={buttonContainerStyle}>
                <PersonalHarleyButton text="MAE" onClick={onClickMae} harleyImage={harley5} color={'blue'} />
                <PersonalHarleyButton text="ALINA" onClick={onClickAlina} harleyImage={harley6} color={'blue'} />
                <PersonalHarleyButton text="CLOD" onClick={onClickClaudScott} harleyImage={harley7} color={'blue'} />
            </div>
        </div>
    );
}

export default Landing;