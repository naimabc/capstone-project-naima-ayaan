import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";

function Quiz() {
  return(
    <div>
  <Header title='Quiz' subtitle='What Archetype Are You?'/>
  <Link to="/quizresults"><QuizButton title='See Results'/></Link>
  </div>
  );
}


export default Quiz;
