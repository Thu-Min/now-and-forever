import meetteam1 from "../../assets/app_data/image/about/meetteam1.jpg"
import { NavLink } from "react-router-dom";

const MeetOurTeam = () => {
    return (
        <>
            <div className="md:mx-[100px] md:p-[75px] flex flex-col items-center md:space-y-10 sm:mx-[25px] sm:p-[25px] sm:space-y-5">
                <div className="md:space-y-5 sm:space-y-2 flex flex-col items-center">
                    <h1 className="md:text-2xl sm:text-[18px]">Meet Our Team</h1>
                    <p className="md:text-[20px] md:w-[50%] sm:w-full sm:text-[12px] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam, laborum nemo pariatur nulla excepturi. Optio enim nulla libero est, cum accusamus dolores, doloribus fugit quasi quibusdam autem distinctio odio.</p>
                </div>
                <div className="md:h-[413px] sm:h-[200px] w-full flex justify-center space-x-5">
                    <img className="md:w-[30%] sm:w-full h-full object-cover" src={meetteam1} alt="" />
                    <img className="md:w-[30%] sm:w-full h-full object-cover" src={meetteam1} alt="" />
                </div>
                <button className="p-3 md:w-[20%] sm:w-full mx-auto bg-[#F27083] text-white rounded">
                <NavLink to="/contact-us" className="">Send Us Email</NavLink>
                </button>
            </div>
        </>
    )
}

export default MeetOurTeam;