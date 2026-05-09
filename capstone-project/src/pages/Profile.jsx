import Header from "../components/Header.jsx";
import Subtitle from "../components/Subtitle.jsx";
import SomeBooks4 from "../components/SomeBooks4.jsx";
import Type1 from "../components/archetypes/Type1.jsx";
import Type2 from "../components/archetypes/Type2.jsx";
import Type3 from "../components/archetypes/Type3.jsx";
import Type4 from "../components/archetypes/Type4.jsx";


function Profile() {
  return(
    <div>
      <Header title="Your" subtitle='Profile'/>
      <Subtitle subtitle='Your Reading Type:'/>
      <Type4/>
      <Subtitle subtitle='Saved Books:'/>
      <SomeBooks4/>

  </div>
  );
}


export default Profile;
