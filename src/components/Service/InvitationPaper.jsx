import five1 from "../../assets/app_data/image/service/5.1.jpg"
import five2 from "../../assets/app_data/image/service/5.2.jpg"
import five3 from "../../assets/app_data/image/service/5.3.jpg"
import five4 from "../../assets/app_data/image/service/5.4.jpg"
import four1 from "../../assets/app_data/image/service/4.1.jpg"
import four2 from "../../assets/app_data/image/service/4.2.jpg"
import four3 from "../../assets/app_data/image/service/4.3.jpg"
import four4 from "../../assets/app_data/image/service/4.4.jpg"
import three1 from "../../assets/app_data/image/service/3.1.jpg"
import three2 from "../../assets/app_data/image/service/3.2.jpg"
import three3 from "../../assets/app_data/image/service/3.5.jpg"
import three4 from "../../assets/app_data/image/service/3.4.jpg"

const InvitationPaper = () => {
    return (
        <div className="md:space-y-20">
            <div>
                <h2 className="md:text-[38px] my-5 sm:text-[26px]">Elegance</h2>
                <div className="md:grid md:grid-cols-4 sm:grid-cols-1 sm:space-y-10">
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={five1} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={five2} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={five3} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={five4} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="md:text-[38px] my-5 sm:text-[26px]">Amazing</h2>
                <div className="md:grid md:grid-cols-4 sm:grid-cols-1 sm:space-y-10">
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={four1} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={four2} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={four3} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={four4} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="md:text-[38px] my-5 sm:text-[26px]">White</h2>
                <div className="md:grid md:grid-cols-4 sm:grid-cols-1 sm:space-y-10">
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={three1} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={three2} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={three3} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={three4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvitationPaper;