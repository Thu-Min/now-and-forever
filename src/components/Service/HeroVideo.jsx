import React from "react";
import heroVideoTwo from "../../assets/app_data/video/hero-video-two.mp4"

const HeroVideo = () => {
    return (
        <div className="md:overflow-hidden md:h-[100vh] sm:object-cover">
            <video autoPlay muted loop className="sm:h-[100vh] sm:object-cover w-full">
                <source src={heroVideoTwo} type="video/mp4" />
            </video>
        </div>
    )
}

export default HeroVideo;