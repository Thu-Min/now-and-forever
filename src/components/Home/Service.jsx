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
        <div className="m-[100px]">
            <div className="p-[75px] bg-[#E4D3B8] flex flex-col gap-[16px]">
                <div>
                    <h1 className="text-[32px]">Services</h1>
                    <h2 className="text-[48px]">Choose the best suit service for you</h2>
                    <p className="text-[20px] leading-8">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <ul className="flex gap-[30px] text-[24px]">
                    {Object.keys(images).map((packageName) => (
                        <button
                        key={packageName}
                        onClick={() => handleProjectClick(packageName)}
                        style={{ color: selectedPackage === packageName ? "#F27083" : "#000" }}
                        >
                            {packageName} Package
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