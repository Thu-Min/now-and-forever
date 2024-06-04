import React from "react";
import founder from "../../assets/app_data/image/about/founder.jpg"
import planner from "../../assets/app_data/image/about/planner1.jpeg"
import makeup from "../../assets/app_data/image/about/makeup.jpeg"
import makeuptwo from "../../assets/app_data/image/about/makeup1.jpg"
import floral from "../../assets/app_data/image/about/floral1.jpg"
import photographer from "../../assets/app_data/image/about/photographer1.png"

const AboutSection = () => {
    return (
        <div className="m-[100px] mb-0 p-[75px] space-y-20">
            <div className="flex items-start gap-[100px]">
                <div className="w-[369px]">
                    <img className="h-[300px] w-full object-cover" src={founder} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px]">
                    <h1 className="text-[32px]">About the Owner</h1>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>

            <div className="flex items-start gap-[100px]">
                <div className="w-[369px]">
                    <img className="h-[300px] w-full object-cover" src={planner} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px]">
                    <h1 className="text-[32px]">Wedding Planner Team</h1>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>

            <div className="flex items-start gap-[100px]">
                <div className="w-[369px]">
                    <img className="h-[300px] w-full object-cover" src={makeup} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px]">
                    <h1 className="text-[32px]">Make-Up & Hair Stylish Team</h1>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>

            <div className="flex items-start gap-[100px]">
                <div className="w-[369px]">
                    <img className="h-[300px] w-full object-cover" src={makeuptwo} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px]">
                    <h1 className="text-[32px]">Costume Designer Team</h1>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>

            <div className="flex items-start gap-[100px]">
                <div className="w-[369px]">
                    <img className="h-[300px] w-full object-cover" src={floral} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px]">
                    <h1 className="text-[32px]">Floral Designer Team</h1>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>

            <div className="flex items-start gap-[100px]">
                <div className="w-[369px]">
                    <img className="h-[300px] w-full object-cover" src={photographer} alt="" />
                </div>
                <div className="w-[573px] flex flex-col gap-[16px]">
                    <h1 className="text-[32px]">Photographer/Videographer Team</h1>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;