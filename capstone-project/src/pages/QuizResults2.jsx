import Header from "../components/Header.jsx";
import SomeBooks2 from "../components/SomeBooks2.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Type2 from "../components/archetypes/Type2.jsx";





function QuizResults2() {
  return(
    <div>
      <Header title='Results:' subtitle='Your Archetype is the...'/>
      <Type2/>
      <Subtitle subtitle="Your recommended books:"/>

      <SomeBooks2/>
   </div>
  );
}


export default QuizResults2;