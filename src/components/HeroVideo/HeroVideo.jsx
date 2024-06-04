import React from "react";
import heroVideoOne from "../../assets/app_data/video/hero-video-one.mp4"

const HeroVideo = () => {
    return (
        <div className="overflow-hidden h-[100vh] sm:object-cover">
            <video autoPlay muted loop className="sm:h-[100vh] sm:object-cover">
                <source src={heroVideoOne} type="video/mp4" />
            </video>
        </div>
    )
}

export default HeroVideo;