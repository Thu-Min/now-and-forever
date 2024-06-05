import premium1 from "../../assets/app_data/image/service/premium1.jpg"
import premium2 from "../../assets/app_data/image/service/premium2.jpg"
import premium3 from "../../assets/app_data/image/service/premium3.jpg"
import premium4 from "../../assets/app_data/image/service/premium4.jpg"
import gold1 from "../../assets/app_data/image/service/gold1.jpg"
import gold2 from "../../assets/app_data/image/service/gold2.jpg"
import gold3 from "../../assets/app_data/image/service/gold3.jpg"
import gold4 from "../../assets/app_data/image/service/gold4.jpg"
import silver1 from "../../assets/app_data/image/service/silver1.jpg"
import silver2 from "../../assets/app_data/image/service/silver2.jpg"
import silver3 from "../../assets/app_data/image/service/silver3.jpg"
import silver4 from "../../assets/app_data/image/service/silver4.jpg"

const WeddingPackage = () => {
    return (
        <div className="md:space-y-20">
            <div>
                <h2 className="md:text-[38px] my-5 sm:text-[26px]">Premium Package</h2>
                <div className="md:grid md:grid-cols-4 sm:grid-cols-1 sm:space-y-10">
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={premium1} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={premium2} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={premium3} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={premium4} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="md:text-[38px] my-5 sm:text-[26px]">Gold Package</h2>
                <div className="md:grid md:grid-cols-4 sm:grid-cols-1 sm:space-y-10">
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={gold1} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={gold2} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={gold3} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={gold4} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="md:text-[38px] my-5 sm:text-[26px]">Silver Package</h2>
                <div className="md:grid md:grid-cols-4 sm:grid-cols-1 sm:space-y-10">
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={silver1} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={silver2} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={silver3} alt="" />
                    </div>
                    <div className="bg-white md:w-[270px] sm:w-full rounded">
                        <img className="w-full md:h-full sm:h-full object-cover rounded" src={silver4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeddingPackage;