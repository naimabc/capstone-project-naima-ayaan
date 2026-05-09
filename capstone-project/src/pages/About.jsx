import Header from "../components/Header.jsx";
import TeamProfile from "../components/TeamProfile.jsx";
import Text from "../components/Text.jsx";
import Naima from "../assets/naima.jpeg";
import Ayaan from "../assets/ayaan.jpeg";


function About() {
  return (
    <div>
      <Header title='About Us' subtitle='Meet the team!'/>
      <Text subtitle='Our Mission' text="To help solve the literacy crisis by encouraging more people to read. One of the biggest causes of the crisis is people's lack of interest in reading, so we hope to help spark that interest by helping people find books they genuinely enjoy."/>
      <div className="columns-2 gap-5 max-sm:columns-2 translate-y-10 -translate-x-30">
        <div className="-translate-y-20 translate-x-55">
      <TeamProfile name='Naima' role='Code Manager' bio='Oakland Tech Senior - Computer Academy' image={Naima}/> 
      </div>
      <TeamProfile name='Ayaan' role='Project Manager' bio='Oakland Tech Senior - Computer Academy' image={Ayaan}/>
      </div>
    </div>


  );
}

export default About;

