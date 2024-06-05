import WeddingPackage from "./WeddingPackage"
import FloralDesign from "./FloralDesign"
import VenueAndVendor from "./VenueAndVendor"
import PhotographyAndVideography from "./PhotographyAndVideography"
import MakeUpAndHairStyle from "./MakeUpAndHariStyle"
import InvitationPaper from "./InvitationPaper"
import { useState } from "react"

const services = {
    "Wedding Package": WeddingPackage,
    "Floral Design": FloralDesign,
    "Venue and Vendor": VenueAndVendor,
    "Photography and Videography": PhotographyAndVideography,
    "Makeup and Hairstyle": MakeUpAndHairStyle,
    "Invitation Paper": InvitationPaper,
};
  
const ServiceList = () => {
    const [selectedService, setService] = useState("Wedding Package");

    const handleServiceClick = (serviceName) => {
        setService(serviceName);
    };

    const SelectedComponent = services[selectedService];

    return (
        <>
            <div className="md:m-[0px] sm:m-[25px]">
                <div className="md:p-[75px] flex flex-col md:gap-[16px] sm:p-[25px] sm:gap-[20px]">
                    <div className=" sm:space-y-[20px]">
                        <h1 className="md:text-[32px] sm:text-[24px]">Services</h1>
                        <h2 className="md:text-[48px] sm:text-[24px]">See all our services</h2>
                        <p className="md:text-[20px] leading-8 sm:text-[16px]">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <ul className="md:gap-[20px] md:text-[24px] grid md:grid-cols-3 md:place-items-start sm:grid-cols-2 sm:text-[16px] sm:gap-[10px]">
                            {Object.keys(services).map((serviceName) => (
                                <button
                                    key={serviceName}
                                    onClick={() => handleServiceClick(serviceName)}
                                    style={{ color: selectedService === serviceName ? "#F27083" : "#000" }}
                                >
                                    {serviceName}
                                </button>
                            ))}
                        </ul>

                        <div className="service-details">
                            {SelectedComponent && <SelectedComponent />}
                        </div>

                        <div className="text-center">
                            <button className="p-3 md:w-[30%] mx-auto bg-black text-white rounded sm:w-[50%]">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceList;