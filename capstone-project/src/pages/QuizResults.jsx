import Header from "../components/Header.jsx";
import SomeBooks4 from "../components/SomeBooks4.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Type1 from "../components/archetypes/Type1.jsx";
import Type2 from "../components/archetypes/Type2.jsx";
import Type3 from "../components/archetypes/Type3.jsx";
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