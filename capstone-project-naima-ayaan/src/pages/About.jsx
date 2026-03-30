import Header from "../components/Header.jsx";
import TeamProfile from "../components/TeamProfile.jsx";
import Text from "../components/Text.jsx";


function About() {
  return (
    <div>
      <Header title='About Us' subtitle='Meet the team!'/>
      <Text subtitle='Our Mission' text='mission here'/>
      <TeamProfile name='Naima' role='Code Manager' bio='bio here' img=""/> 
      <TeamProfile name='Ayaan' role='Project Manager' bio='bio here' img=""/>
      
    </div>


  );
}

export default About;

