import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion.jsx"
import ProgressBar from "../components/ProgressBar.jsx"

function Quiz() {
  return(
    <div>
      <Header title='Quiz' subtitle='What Archetype Are You?'/>
      <QuizQuestion/>
      <ProgressBar/>
      <Link to="/quizresults"><QuizButton title='See Results'/></Link>
    </div>
  );
}


export default Quiz;
