import Header from "../components/Header.jsx";
import Archetype from "../components/Archetype.jsx";
import Subtitle from "../components/Subtitle.jsx";
import SomeBooks from "../components/SomeBooks.jsx";

function Profile() {
  return(
    <div>
      <Header title='Username' subtitle='subtitle'/>
      <Archetype archName="Hero" genres="Fantasy, Adventure" info="info" image=""/>
      <Subtitle subtitle='Your Saved Books'/>
      <SomeBooks/>

  </div>
  );
}


export default Profile;
