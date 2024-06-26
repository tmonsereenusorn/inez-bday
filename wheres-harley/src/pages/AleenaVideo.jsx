import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import video from "../assets/aleena_video.mp4";
import harley1 from "../assets/harley_button.png";
import HarleyButton from "../components/HarleyButton";

const AleenaVideo = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate('/')
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Aleena's Secret Message</h1>
            <video controls width="800">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <HarleyButton text="Back" onClick={onClickBack} harleyImage={harley1} />
        </div>
    )
}

export default AleenaVideo