import WeddingPackage from "./WeddingPackage"
import FloralDesign from "./FloralDesign"
import VenueAndVendor from "./VenueAndVendor"
import PhotographyAndVideography from "./PhotographyAndVideography"
import MakeUpAndHairStyle from "./MakeUpAndHariStyle"
import InvitationPaper from "./InvitationPaper"
import Modal from "../BookNowModal/Modal";
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                        <p className="md:text-[20px] leading-8 sm:text-[16px] text-justify">
                            At Now & Forever, we offer a comprehensive range of services to ensure your wedding day is perfect. Our expert Wedding Planner Team manages every detail, from venue selection to vendor coordination, ensuring a seamless experience. Our talented Makeup & Hairstylist Team enhances your natural beauty, while our Costume Designer Team provides personalised fittings and custom attire. The Floral Designer Team creates stunning arrangements to enhance your celebration's ambiance. Finally, our Photography and Videography Team captures every precious moment, creating timeless memories. Explore all our services to see how we can bring your dream wedding to life. Contact us today!
                        </p>
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
                            <button onClick={openModal} className="p-3 md:w-[30%] mx-auto bg-black text-white rounded sm:w-[50%]">Book Now</button>
                        </div>

                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <h2 className="text-2xl mb-4">Enter your Information</h2>
                            <form action="#" class="space-y-8 flex flex-col justify-center items-center w-full">
                                <div className="flex md:flex-row w-full justify-between md:space-x-[50px] sm:flex-col sm:space-x-0">
                                    <div className="md:w-full sm:w-[343px]">
                                        <label for="email" class="block mb-2 text-sm font-medium text-black">Name</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                    <div className="md:w-full sm:w-[343px]">
                                        <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                </div>
                                <div className="flex md:flex-row w-full justify-between md:space-x-[50px] sm:flex-col sm:space-x-0">
                                    <div className="md:w-full sm:w-[343px]">
                                        <label for="email" class="block mb-2 text-sm font-medium text-black">Location</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                    <div className="md:w-full sm:w-[343px]">
                                        <label for="email" class="block mb-2 text-sm font-medium text-black">Theme</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                </div>
                                <div className="flex md:flex-row w-full justify-between md:space-x-[50px] sm:flex-col sm:space-x-0">
                                    <div className="md:w-full sm:w-[343px]">
                                        <label for="email" class="block mb-2 text-sm font-medium text-black">Wedding Date</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                    <div className="md:w-full sm:w-[343px]">
                                        <label for="email" class="block mb-2 text-sm font-medium text-black">Budget</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                </div>
                                <div className="md:w-full sm:w-[343px]">
                                    <label for="email" class="block mb-2 text-sm font-medium text-black">Additional specific requests or preferences</label>
                                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                                </div>

                                <button
                                onClick={closeModal}
                                className="px-4 py-2 mt-5 bg-black text-white rounded-lg"
                                >
                                    Book Now
                                </button>
                            </form>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceList;