import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion.jsx"

function Quiz() {
  return(
    <div>
      <Header title='Quiz' subtitle='What Archetype Are You?'/>
      <QuizQuestion question='Which of the following stories sounds the most interesting?' option1=' A courageous hero goes on a high-stakes mission to infiltrate a supervillain’s headquarters before the city is destroyed, culminating in a suspenseful final battle' option2=' A poet struggles with finding purpose following the death of a loved one—told through a series of fragmented journal entries' option3=' A woman forms a heartwarming friendship with a sick animal at her local zoo, nurturing it as it heals' option4=' A man discovers his reality is not what it seems as he begins to realize he is stuck in a time loop'/>
      <QuizQuestion question='Question' option1='Option 1' option2='Option 2' option3='Option 3' option4='Option4'/>
      <QuizQuestion question='Question' option1='Option 1' option2='Option 2' option3='Option 3' option4='Option4'/>
      <QuizQuestion question='Question' option1='Option 1' option2='Option 2' option3='Option 3' option4='Option4'/>
      <QuizQuestion question='Question' option1='Option 1' option2='Option 2' option3='Option 3' option4='Option4'/>
      
      <Link to="/quizresults"><QuizButton title='See Results'/></Link>
    </div>
  );
}


export default Quiz;
