import Header from "../components/Header.jsx";
import SomeBooks from "../components/SomeBooks.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Type1 from "../components/archetypes/Type1.jsx";
import Type2 from "../components/archetypes/Type2.jsx";
import Type3 from "../components/archetypes/Type3.jsx";
import Type4 from "../components/archetypes/Type4.jsx";
import Type5 from "../components/archetypes/Type5.jsx";




function QuizResults() {
  return(
    <div>
      <Header title='Results:' subtitle='Your Archetype is the...'/>
      <Type1/>
      <Subtitle subtitle="Your recommended books:"/>
      <SomeBooks/>
    </div>
  );
}


export default QuizResults;