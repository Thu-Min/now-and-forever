import beach from "../../assets/app_data/image/review/beach.jpeg"
import royallake from "../../assets/app_data/image/review/royallake.jpeg"
import rusia from "../../assets/app_data/image/review/rusia.jpg"
import seoulhall from "../../assets/app_data/image/review/seoulhall.jpg"
import yangongallery from "../../assets/app_data/image/review/yangongallery.jpeg"
import premium1 from "../../assets/app_data/image/service/premium1.jpg"
import silver2 from "../../assets/app_data/image/service/silver2.jpg"
import silver3 from "../../assets/app_data/image/service/silver3.jpg"
import sushi from "../../assets/app_data/image/review/sushi.jpg"
import steak from "../../assets/app_data/image/review/steak.jpg"
import thai from "../../assets/app_data/image/review/thai.jpg"
import slad from "../../assets/app_data/image/review/slad.jpeg"
import jinn from "../../assets/app_data/image/review/jinn.jpg"
import jumi from "../../assets/app_data/image/review/jumi.jpg"
import prep from "../../assets/app_data/image/review/prep.jpg"
import zinn from "../../assets/app_data/image/review/zinn.jpg"
import splendor from "../../assets/app_data/image/review/splendor.jpg"
import nova from "../../assets/app_data/image/review/nova.jpg"
import grand from "../../assets/app_data/image/review/grand.jpg"
import diy from "../../assets/app_data/image/review/diy.jpg"
import reason from "../../assets/app_data/image/review/reason.jpg"
import getty from "../../assets/app_data/image/review/getty.jpg"
import expert from "../../assets/app_data/image/review/expert.jpg"
import elle from "../../assets/app_data/image/review/elle.jpg"

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
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={royallake} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Enchanted Gardens</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={rusia} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Crystal Ballroom</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={seoulhall} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Seoul Hall</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={yangongallery} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Evergreen Manor</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="weddingpackage">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Wedding Package</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={premium1} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Platinum Package</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={silver2} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Gold Package</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={silver3} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Silver Package</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="catering">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Catering Services</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={sushi} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Gourmet Delights Catering</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={steak} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Farm-to-Table Feasts</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={thai} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Elegant Affairs Catering</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={slad} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Seaside Savour Restaurant</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="photography">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Photography/Videography Teams</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={jinn} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Eternal Moments Photography</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={jumi} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">DreamLens Videography</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={prep} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Timeless Memories Studios</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={zinn} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Heartfelt Films</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="floral">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Floral Design Teams</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={splendor} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Bloom & Blossom Designs</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={nova} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Petal Perfection Florals</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={grand} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Garden Grace Floristry</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={diy} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Elegant Blooms</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="makup">
                    <h2 className="md:text-[38px] my-5 sm:text-[26px]">Make-Up and Stylist Teams</h2>
                    <div className="md:grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={reason} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Glamour Artistry</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={getty} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Radiant Beauty Team</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={expert} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Chic Bridal Stylists</h3>
                            </div>
                        </div>
                        <div className="bg-white md:w-[270px] sm:w-full rounded">
                            <img className="w-full md:h-[200px] sm:h-full object-cover rounded" src={elle} alt="" />
                            <div className="md:mx-3 md:my-2 sm:mx-3 sm:my-5">
                                <h3 className="md:text-[18px] sm:text-[24px]">Enchanting Elegance</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSection;