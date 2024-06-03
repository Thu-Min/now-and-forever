import React from "react";
import heroVideoOne from "../../assets/app_data/video/hero-video-one.mp4"

const HeroVideo = () => {
    return (
        <>
            <video autoplay muted loop>
                <source src={heroVideoOne} type="video/mp4" />
            </video>
        </>
    )
}

export default HeroVideo;