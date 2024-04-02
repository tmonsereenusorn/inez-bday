import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import video from "../assets/tee_video.mp4";
import HarleyButton from "../components/HarleyButton";

const TeeVideo = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/next-page')
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Secret Message #1</h1>
            <video controls width="250">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <HarleyButton text=" Next!!" onClick={nextPage} />
        </div>
    )
}

export default TeeVideo