import React from "react";
import heroImgOne from "../../assets/app_data/image/review/home1.jpg"

const HeroImage = () => {
    return (
        <div className="w-[100%] sm:h-[100vh]">
            <img src={heroImgOne} className="object-cover w-full h-full" alt="" />
        </div>
    )
}

export default HeroImage;