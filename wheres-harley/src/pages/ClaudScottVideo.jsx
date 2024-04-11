import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import video from "../assets/claud_scott_video.mp4";
import harley1 from "../assets/harley_button.png";
import HarleyButton from "../components/HarleyButton";

const ClaudScottVideo = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate('/')
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Lily's Secret Message</h1>
            <video controls width="400">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <HarleyButton text="Back" onClick={onClickBack} harleyImage={harley1} />
        </div>
    )
}

export default ClaudScottVideo