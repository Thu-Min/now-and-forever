import HeroImage from "../components/HeroImage/HeroImage"
import AboutSection from "../components/About/AboutSection";
import MeetOurTeam from "../components/About/MeetOurTeam";

const About = () => {
    return (
        <div className="bg-[#F6EFDF]">
            <HeroImage />
            <AboutSection />
            <MeetOurTeam />
        </div>
    );
}

export default About;