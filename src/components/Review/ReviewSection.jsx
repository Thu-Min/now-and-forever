import beach from "../../assets/app_data/image/review/beach.jpeg"

const ReviewSection = () => {
    return (
        <>
            <div className="md:mx-[100px] md:p-[75px] md:space-y-10 sm:mx-[25px] sm:p-[25px] sm:space-y-10">
                <div className="md:flex md:justify-around sm:grid sm:grid-cols-3 sm:place-items-start sm:place-content-center sm:gap-10">
                    <a href="#venue">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="p-5 bg-[#F27083] w-10 rounded-full"></div>
                            <label htmlFor="" className="text-center">Venus</label>
                        </div>
                    </a>
                    <a href="#weddingpackage">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="p-5 bg-[#F27083] w-10 rounded-full"></div>
                            <label htmlFor="" className="text-center">Wedding Package</label>
                        </div>
                    </a>
                    <a href="#catering">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="p-5 bg-[#F27083] w-10 rounded-full"></div>
                            <label htmlFor="" className="text-center">Catering</label>
                        </div>
                    </a>
                    <a href="#photography">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="p-5 bg-[#F27083] w-10 rounded-full"></div>
                            <label htmlFor="" className="text-center">Photography Videography</label>
                        </div>
                    </a>
                    <a href="#floral">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="p-5 bg-[#F27083] w-10 rounded-full"></div>
                            <label htmlFor="" className="text-center">Floral Design</label>
                        </div>
                    </a>
                    <a href="#makup">
                        <div className="flex flex-col items-center w-[100px]">
                            <div className="p-5 bg-[#F27083] w-10 rounded-full"></div>
                            <label htmlFor="" className="text-center">Make-Up & Stylish Team</label>
                        </div>
                    </a>   
                </div>
                <div id="venue">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Most Popular Venues</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="weddingpackage">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Most Popular Venues</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="catering">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Most Popular Venues</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="photography">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Most Popular Venues</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="floral">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Most Popular Venues</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="makup">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Most Popular Venues</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={beach} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Beach</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">Location</h3>
                                <h3 className="md:text-[18px] sm:text-[24px]">$500</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSection;