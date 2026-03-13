import Header from "../components/Header.jsx";
import TeamProfile from "../components/TeamProfile.jsx";

function About() {
  return (
    <div>
      <Header title='About Us' subtitle='Meet the team!'/>
      <TeamProfile name='Naima' role='Code Manager' bio='bio here' img='https://emojiguide.org/images/emoji/c/8z8e4013re4yc.png'/> 
    </div>


  );
}

export default About;

