import Header from "../components/Header.jsx";
import SomeBooks3 from "../components/SomeBooks3.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Type3 from "../components/archetypes/Type3.jsx";





function QuizResults3() {
  return(
    <div>
      <Header title='Results:' subtitle='Your Archetype is the...'/>
      <Type3/>
      <Subtitle subtitle="Your recommended books:"/>

      <SomeBooks3/>
   </div>
  );
}


export default QuizResults3;