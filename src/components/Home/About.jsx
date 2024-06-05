import React from "react";
import about from "../../assets/app_data/image/home/about.jpg"

const About = () => {
    return (
        <div className="md:m-[100px] sm:m-[25px]">
            <div className="bg-[#E4D3B8] md:p-[75px] md:flex md:flex-row md:gap-[100px] sm:flex-col sm:p-[25px] sm:gap-[30px]">
                <div className="md:w-[417px] sm:w-[293px]">
                    <img className="h-[493px] object-cover" src={about} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col md:gap-[16px] sm:w-[293px] sm:gap-[20px]">
                    <h1 className="md:text-[32px] sm:text-[24px]">About Now & Forever</h1>
                    <h2 className="md:text-[48px] sm:text-[24px]">Plan your Wedding truly EXPECTIONAL</h2>
                    <p className="md:text-[20px] leading-8 text-justify">
                        Welcome to Now & Forever, your premier wedding planner service! At Now & Forever, we believe that every love story is unique and deserves to be celebrated in the most special way possible. Our mission is to turn your wedding dreams into reality, creating unforgettable moments that you and your guests will cherish forever.
                    </p>
                    <button className="p-3 w-[30%] mx-auto bg-white rounded sm:w-[50%]">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default About;