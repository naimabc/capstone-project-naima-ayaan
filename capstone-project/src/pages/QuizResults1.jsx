import Header from "../components/Header.jsx";
import SomeBooks1 from "../components/SomeBooks1.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Type1 from "../components/archetypes/Type1.jsx";





function QuizResults1() {
  return(
    <div>
      <Header title='Results:' subtitle='Your Archetype is the...'/>
      <Type1/>
      <Subtitle subtitle="Your recommended books:"/>

      <SomeBooks1/>
   </div>
  );
}


export default QuizResults1;