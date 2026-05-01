import Header from "../components/Header.jsx";
import SomeBooks4 from "../components/SomeBooks4.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Type4 from "../components/archetypes/Type4.jsx";




function QuizResults() {
  return(
    <div>
      <Header title='Results:' subtitle='Your Archetype is the...'/>
      <Type4/>
      <Subtitle subtitle="Your recommended books:"/>

      <SomeBooks4/>
   </div>
  );
}


export default QuizResults;