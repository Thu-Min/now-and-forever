import logoNoBackground from "../../assets/app_data/logo-no-background.png"

const Footer = () => {
    return (
        <>
            <div className="px-[165px] py-[96px]">
                <div className="flex flex-col space-y-10">
                    <div className="flex justify-between">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logoNoBackground} className="w-auto h-10" alt="Now & Forever Logo" />
                        </a>
                        <p className="font-[20px] w-[30%]">
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                    <hr />
                    <div className="flex justify-between gap-[64px]">
                        <div>
                            <ul className="space-y-[16px]">
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
                            <ul className="space-y-[16px]">
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
                            <ul className="space-y-[16px]">
                                <li>
                                    Contact
                                </li>
                                <li>
                                    +66 61 294 6670
                                </li>
                                <li>
                                    support@now&forever.com
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-[16px]">
                                <li>
                                    Address
                                </li>
                                <li>
                                    1179 Lance Road Norfolk VA, 23502
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p>Copyright © 2024 Now & Forever. All rights reserved.</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer; 