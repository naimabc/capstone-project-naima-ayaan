import Header from "../components/Header.jsx";
import TeamProfile from "../components/TeamProfile.jsx";
import Text from "../components/Text.jsx";


function About() {
  return (
    <div>
      <Header title='About Us' subtitle='Meet the team!'/>
      <Text subtitle='Our Mission' text="To help solve the literacy crisis by encouraging more people to read. One of the biggest causes of the crisis is people's lack of interest in reading, so we hope to help spark that interest by helping people find books they genuinely enjoy."/>
      <TeamProfile name='Naima' role='Code Manager' bio='Oakland Tech Senior - Computer Academy' img=""/> 
      <TeamProfile name='Ayaan' role='Project Manager' bio='Oakland Tech Senior - Computer Academy' img=""/>
      
    </div>


  );
}

export default About;

