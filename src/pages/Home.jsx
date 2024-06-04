import React from "react";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import About from "../components/Home/About";
import Service from "../components/Home/Service";
import Contact from "../components/Home/Contact";

function Home () {
    return (
        <div className="bg-[#F6EFDF]">
            <HeroVideo />
            <About />
            <Service />
            <Contact />
        </div>
    )
}

export default Home;