import Header from "../components/Header.jsx";
import TeamProfile from "../components/TeamProfile.jsx";
import Text from "../components/Text.jsx";

function About() {
  return (
    <div>
      <Header title='About Us' subtitle='Meet the team!'/>
      <TeamProfile name='Naima' role='Code Manager' bio='bio here' img='https://emojiguide.org/images/emoji/c/8z8e4013re4yc.png'/> 
      <TeamProfile name='Ayaan' role='Project Manager' bio='bio here' img='https://emojiguide.org/images/emoji/c/8z8e4013re4yc.png'/>
      <Text subtitle='Our Mission' text='mission here'/>
    </div>


  );
}

export default About;

