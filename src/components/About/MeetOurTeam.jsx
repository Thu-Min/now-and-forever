import meetteam1 from "../../assets/app_data/image/about/meetteam1.jpg"

const MeetOurTeam = () => {
    return (
        <>
            <div className="mx-[100px] p-[75px] flex flex-col items-center space-y-10">
                <div className="space-y-5 flex flex-col items-center">
                    <h1 className="text-2xl">Meet Our Team</h1>
                    <p className="w-[50%] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam, laborum nemo pariatur nulla excepturi. Optio enim nulla libero est, cum accusamus dolores, doloribus fugit quasi quibusdam autem distinctio odio.</p>
                </div>
                <div className="h-[413px] w-full flex justify-center space-x-5">
                    <img className="w-[30%] h-full object-cover" src={meetteam1} alt="" />
                    <img className="w-[30%] h-full object-cover" src={meetteam1} alt="" />
                </div>
                <button className="p-3 w-[20%] mx-auto bg-[#F27083] text-white rounded">Send Us Email</button>
            </div>
        </>
    )
}

export default MeetOurTeam;