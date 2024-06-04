import logoNoBackground from "../../assets/app_data/logo-no-background.png"

const Footer = () => {
    return (
        <>
            <div className="md:px-[165px] md:pb-[50px] sm:px-[24px] sm:py-[50px]">
                <div className="flex flex-col space-y-10">
                    <div className="flex md:flex-row md:justify-between md:items-center sm:flex-col sm:items-center sm:gap-[10px]">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logoNoBackground} className="w-auto md:h-10 sm:h-[70px]" alt="Now & Forever Logo" />
                        </a>
                        <p className="md:text-[12px] md:w-[30%] sm:w-full sm:text-[12px]">
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                    <hr />
                    <div className="md:flex md:justify-between md:gap-[64px] sm:grid sm:grid-cols-2 sm:gap-[32px]">
                        <div>
                            <ul className="md:space-y-[16px] sm:space-y-[8px]">
                                <li>
                                    Home
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Service
                                </li>
                                <li>
                                    Review
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="md:space-y-[16px] sm:space-y-[8px]">
                                <li>
                                    Cookie Policy
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                    Booking Policy
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="md:space-y-[16px] sm:space-y-[8px]">
                                <li>
                                    Contact
                                </li>
                                <li>
                                    +66 61 294 6670
                                </li>
                                <li>
                                    now&forever.com
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="md:space-y-[16px] sm:space-y-[8px]">
                                <li>
                                    Address
                                </li>
                                <li>
                                    1179 Lance Road Norfolk VA, 23502
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex md:flex-row justify-between sm:flex-col">
                        <p className="sm:text-[14px]">Copyright © 2024 Now & Forever. All rights reserved.</p>
                        <p className="sm:text-[14px]">Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer; 