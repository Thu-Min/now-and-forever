import React from "react";
import heroImgOne from "../../assets/app_data/image/about/heroimg1.jpg"

const HeroVideo = () => {
    return (
        <div className="w-[100%]">
            <img src={heroImgOne} className="object-fit w-full" alt="" />
        </div>
    )
}

export default HeroVideo;