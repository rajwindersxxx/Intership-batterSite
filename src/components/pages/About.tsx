import AboutCEO from "../sections/AboutCEO";
import ChangingThings from "../sections/ChangingThings";
import HeroStart from "../sections/Hero/HeroStart";

function About() {
  return (
    <div>
      <HeroStart />
      <AboutCEO />
      <ChangingThings />
      <h2 className="text-xl text-center p-4">COMING SOON</h2>
    </div>
  );
}

export default About;
