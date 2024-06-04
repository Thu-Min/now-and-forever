import React from "react";
import about from "../../assets/app_data/image/home/about.jpg"

const About = () => {
    return (
        <div className="m-[100px] sm:m-[25px]">
            <div className="bg-[#E4D3B8] p-[75px] flex gap-[100px] sm:flex-col sm:p-[25px] sm:gap-[30px]">
                <div className="w-[417px] sm:w-[293px]">
                    <img className="h-[493px] object-cover" src={about} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px] sm:w-[293px] sm:gap-[20px]">
                    <h1 className="text-[32px] sm:text-[24px]">About Now & Forever</h1>
                    <h2 className="text-[48px] sm:text-[24px]">Plan your Wedding truly EXPECTIONAL</h2>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                    <button className="p-3 w-[30%] mx-auto bg-white rounded sm:w-[50%]">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default About;