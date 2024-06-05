import React from "react";
import about from "../../assets/app_data/image/home/about.jpg"
import Modal from "../BookNowModal/Modal";
import { useState } from "react"

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="md:m-[100px] sm:m-[25px]">
            <div className="bg-[#E4D3B8] md:p-[75px] md:flex md:flex-row md:gap-[100px] sm:flex-col sm:p-[25px] sm:gap-[30px]">
                <div className="md:w-[417px] sm:w-[293px]">
                    <img className="h-[493px] object-cover" src={about} alt="" />
                </div>
                <div className="md:w-[573px] flex flex-col md:gap-[16px] sm:w-[293px] sm:gap-[20px]">
                    <h1 className="md:text-[32px] sm:text-[24px]">About Now & Forever</h1>
                    <h2 className="md:text-[48px] sm:text-[24px]">Plan your Wedding truly EXPECTIONAL</h2>
                    <p className="md:text-[20px] leading-8 text-justify">
                        Welcome to Now & Forever, your premier wedding planner service! At Now & Forever, we believe that every love story is unique and deserves to be celebrated in the most special way possible. Our mission is to turn your wedding dreams into reality, creating unforgettable moments that you and your guests will cherish forever.
                    </p>
                    <button onClick={openModal} className="p-3 w-[30%] mx-auto bg-white rounded sm:w-[50%]">Book Now</button>
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
    )
}

export default About;