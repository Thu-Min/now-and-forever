import meetteam1 from "../../assets/app_data/image/about/meetteam1.jpg"
import meetteam2 from "../../assets/app_data/image/about/meetteam2.jpg"
import { NavLink } from "react-router-dom";

const MeetOurTeam = () => {
    return (
        <>
            <div className="md:mx-[100px] md:p-[75px] flex flex-col items-center md:space-y-10 sm:mx-[25px] sm:p-[25px] sm:space-y-5">
                <div className="md:space-y-5 sm:space-y-2 flex flex-col items-center">
                    <h1 className="md:text-2xl sm:text-[18px]">Meet Our Team</h1>
                    <p className="md:text-[20px] md:w-full sm:w-full sm:text-[12px] text-justify">
                        At Now & Forever, our dedicated and talented team works together to bring your wedding dreams to life. Led by Yu, our founder and lead planner, who combines years of experience in event management and design with a passion for storytelling and meticulous attention to detail, we ensure every wedding reflects the couple's unique love story. Our Wedding Planner Team handles everything from venue selection to vendor coordination, providing a seamless and stress-free planning process. Our Makeup & Hairstylist Team enhances your natural beauty with expert techniques and the latest trends, while our Costume Designer Team creates or curates perfect attire with personalised fittings and custom designs. The Floral Designer Team crafts stunning floral arrangements that add a touch of natural beauty to your celebration, and our Photography and Videography Team captures every precious moment with a keen eye for detail and storytelling, creating timeless memories you'll cherish forever. Together, we're dedicated to making your wedding day everything you've ever dreamed of and more. Contact us today to start planning your perfect celebration with our expert team.
                    </p>
                </div>
                <div className="md:h-[413px] sm:h-[200px] w-full flex justify-center space-x-5">
                    <img className="md:w-[30%] sm:w-[50%] h-full object-cover" src={meetteam1} alt="" />
                    <img className="md:w-[30%] sm:w-[50%] h-full object-cover" src={meetteam2} alt="" />
                </div>
                <button className="p-3 md:w-[20%] sm:w-full mx-auto bg-[#F27083] text-white rounded">
                <NavLink to="/contact-us" className="">Send Us Email</NavLink>
                </button>
            </div>
        </>
    )
}

export default MeetOurTeam;