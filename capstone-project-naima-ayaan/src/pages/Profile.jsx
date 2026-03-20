import Header from "../components/Header.jsx";
import Archetype from "../components/Archetype.jsx";
import Subtitle from "../components/Subtitle.jsx";
import BookCarousel from "../components/BookCarousel.jsx";

function Profile() {
  return(
    <div>
      <Header title='Username' subtitle='subtitle'/>
      <Archetype type='[type]' description='description here'/>
      <Subtitle subtitle='Your Saved Books'/>
      <BookCarousel/>

  </div>
  );
}


export default Profile;
