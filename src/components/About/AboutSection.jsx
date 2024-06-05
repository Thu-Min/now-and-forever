import React from "react";
import founder from "../../assets/app_data/image/about/founder.jpg"
import planner from "../../assets/app_data/image/about/planner1.jpeg"
import makeup from "../../assets/app_data/image/about/makeup.jpeg"
import makeuptwo from "../../assets/app_data/image/about/makeup1.jpg"
import floral from "../../assets/app_data/image/about/floral1.jpg"
import photographer from "../../assets/app_data/image/about/photographer1.png"

const AboutSection = () => {
    return (
        <div className="md:m-[100px] md:mb-0 md:p-[75px] md:space-y-20 sm:m-[25px] sm:p-[25px] sm:space-y-10">
            <div className="flex md:flex-row items-start md:gap-[100px] sm:flex-col sm:gap-[25px]">
                <div className="md:w-[369px] sm:w-full">
                    <img className="md:h-[300px] sm:h-[131px] sm:w-full object-cover" src={founder} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col gap-[16px]">
                    <h1 className="md:text-[32px] sm:text-[18px]">About the Owner</h1>
                    <p className="md:text-[20px] md:leading-8 sm:text-[12px] sm:leading-2 text-justify">
                        Meet Yu, the heart and soul behind Now & Forever. With a passion for storytelling and a keen eye for detail, Yu founded Now & Forever to create beautiful, personalised weddings that reflect each couple's unique love story. Combining years of experience in event management and design, Yu is known for creative vision, meticulous attention to detail, and a commitment to providing a stress-free planning experience.
                    </p>
                </div>
            </div>

            <div className="flex md:flex-row items-start md:gap-[100px] sm:flex-col sm:gap-[25px]">
                <div className="md:w-[369px] sm:w-full">
                    <img className="md:h-[300px] sm:h-[131px] sm:w-full object-cover" src={planner} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col gap-[16px]">
                    <h1 className="md:text-[32px] sm:text-[18px]">Wedding Planner Team</h1>
                    <p className="md:text-[20px] md:leading-8 sm:text-[12px] sm:leading-2 text-justify">
                        Our Wedding Planner Team at Now & Forever is dedicated to turning your wedding dreams into reality. With extensive experience and a passion for creating unforgettable events, our planners handle every detail, from venue selection to vendor coordination, ensuring a seamless and stress-free experience. Personalized attention and creative solutions are our hallmarks, making your special day uniquely yours.
                    </p>
                </div>
            </div>

            <div className="flex md:flex-row items-start md:gap-[100px] sm:flex-col sm:gap-[25px]">
                <div className="md:w-[369px] sm:w-full">
                    <img className="md:h-[300px] sm:h-[131px] sm:w-full object-cover" src={makeup} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col gap-[16px]">
                    <h1 className="md:text-[32px] sm:text-[18px]">Makeup & Hair Stylist Team</h1>
                    <p className="md:text-[20px] md:leading-8 sm:text-[12px] sm:leading-2 text-justify">
                        Our Makeup & Hair Stylist Team brings out your natural beauty, ensuring you look and feel your best on your wedding day. With expert techniques and a deep understanding of the latest trends, our stylists create stunning looks that match your personal style and the theme of your wedding. Trust us to enhance your beauty for those unforgettable moments.
                    </p>
                </div>
            </div>

            <div className="flex md:flex-row items-start md:gap-[100px] sm:flex-col sm:gap-[25px]">
                <div className="md:w-[369px] sm:w-full">
                    <img className="md:h-[300px] sm:h-[131px] sm:w-full object-cover" src={makeuptwo} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col gap-[16px]">
                    <h1 className="md:text-[32px] sm:text-[18px]">Costume Designer Team</h1>
                    <p className="md:text-[20px] md:leading-8 sm:text-[12px] sm:leading-2 text-justify">
                        The Costume Designer Team at Now & Forever specialises in creating or curating the perfect attire for your wedding. From elegant bridal gowns to stylish suits and bridal party outfits, our designers ensure every detail complements your vision. We offer personalised fittings and custom designs to make sure you feel confident and beautiful on your big day.
                    </p>
                </div>
            </div>

            <div className="flex md:flex-row items-start md:gap-[100px] sm:flex-col sm:gap-[25px]">
                <div className="md:w-[369px] sm:w-full">
                    <img className="md:h-[300px] sm:h-[131px] sm:w-full object-cover" src={floral} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col gap-[16px]">
                    <h1 className="md:text-[32px] sm:text-[18px]">Floral Designer Team</h1>
                    <p className="md:text-[20px] md:leading-8 sm:text-[12px] sm:leading-2 text-justify">
                        Our Floral Designer Team crafts breathtaking floral arrangements that add a touch of natural beauty to your wedding. From bouquets and boutonnieres to stunning centrepieces and venue decorations, our designers use fresh, vibrant flowers to create designs that reflect your style and enhance the ambiance of your celebration.
                    </p>
                </div>
            </div>

            <div className="flex md:flex-row items-start md:gap-[100px] sm:flex-col sm:gap-[25px]">
                <div className="md:w-[369px] sm:w-full">
                    <img className="md:h-[300px] sm:h-[131px] sm:w-full object-cover" src={photographer} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col gap-[16px]">
                    <h1 className="md:text-[32px] sm:text-[18px]">Photography and Videography Team</h1>
                    <p className="md:text-[20px] md:leading-8 sm:text-[12px] sm:leading-2 text-justify">
                        Capture every precious moment with our Photography and Videography Team. With a keen eye for detail and a passion for storytelling, our team ensures that your special day is documented beautifully. From candid shots to cinematic videos, we create timeless memories that you and your loved ones will cherish forever.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;