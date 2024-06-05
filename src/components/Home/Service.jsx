import React, { useState, useEffect, useMemo } from "react";
import Premium from "../../assets/app_data/image/home/premium.jpg"
import Gold from "../../assets/app_data/image/home/gold.jpg"
import Silver from "../../assets/app_data/image/home/silver.jpg"

const Service = () => {
    const [selectedPackage, setPackage] = useState("Premium");
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const images = useMemo(() => ({
        Premium,
        Gold,
        Silver
    }), []);

    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = Object.values(images).map((image) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error("Error preloading images:", error);
            }
        };

        preloadImages();
    }, [images]);

    const handleProjectClick = (packageName) => {
        setPackage(packageName);
    };

    return (
        <div className="md:m-[100px] sm:m-[25px]">
            <div className="md:p-[75px] bg-[#E4D3B8] flex flex-col md:gap-[16px] sm:p-[25px] sm:gap-[20px]">
                <div className=" sm:space-y-[20px]">
                    <h1 className="md:text-[32px] sm:text-[24px]">Services</h1>
                    <h2 className="md:text-[48px] sm:text-[24px]">Choose the best suit service for you</h2>
                    <p className="md:text-[20px] leading-8 sm:text-[16px] text-justify">
                        With the largest network of local wedding vendors, WeddingWire offers the most comprehensive wedding site out there. You will be able to find the best vendor for your budget and plan your wedding exactly the way you envisioned it. We make it simple to get the pricing, availability, and answers you need from wedding venues and wedding vendors across every town.
                    </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <ul className="flex md:gap-[30px] md:text-[24px] sm:text-[16px] sm:gap-[10px]">
                        {Object.keys(images).map((packageName) => (
                            <button
                            key={packageName}
                            onClick={() => handleProjectClick(packageName)}
                            style={{ color: selectedPackage === packageName ? "#F27083" : "#000" }}
                            >
                                {packageName}
                            </button>
                        ))}
                    </ul>

                    {imagesLoaded && (
                        <div className="w-full h-[517px]">
                            <img className="w-full h-full object-cover" src={images[selectedPackage]} alt={selectedPackage} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Service;