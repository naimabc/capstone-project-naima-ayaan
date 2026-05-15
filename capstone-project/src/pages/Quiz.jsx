/* eslint-disable no-unused-vars */
import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion.jsx"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Quiz() {

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [score,setScore] = useState(0);
  const navigate = useNavigate();
  

  function handleSubmit(event) {
    event.preventDefault();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    //QUESTION 1
    if (answer1 == "type1") {
      count1++;
    }
    if (answer1 == "type2") {
      count2++;
    }
    if (answer1 == "type3") {
      count3++;
    }
    if (answer1 == "type4") {
      count4++;
    }

    //QUESTION 2
    if (answer2 == "type1") {
      count1++;
    }
    if (answer2 == "type2") {
      count2++;
    }
    if (answer2 == "type3") {
      count3++;
    }
    if (answer2 == "type4") {
      count4++;
    }

    //QUESTION 3
    if (answer3 == "type1") {
      count1++;
    }
    if (answer3 == "type2") {
      count2++;
    }
    if (answer3 == "type3") {
      count3++;
    }
    if (answer3 == "type4") {
      count4++;
    }

    //QUESTION 4
    if (answer4 == "type1") {
      count1++;
    }
    if (answer4 == "type2") {
      count2++;
    }
    if (answer4 == "type3") {
      count3++;
    }
    if (answer4 == "type4") {
      count4++;
    }

    //QUESTION 5
    if (answer5 == "type1") {
      count1++;
    }
    if (answer5 == "type2") {
      count2++;
    }
    if (answer5 == "type3") {
      count3++;
    }
    if (answer5 == "type4") {
      count4++;
    }

    if (count1 >= count2 && count1 >= count3 && count1 >= count4) {
      setScore("type1");
    }
    else if (count2 >= count3 && count2 >= count4){
      setScore("type2")
    }
    else if (count3 >= count4){
      setScore("type3")
    }
    else {
      setScore("type4")
    }
    
  }

  return (
    <div className="accent-sage text-leaves font-serif">
      <Header title='Quiz' subtitle='What Archetype Are You?' />
      <form onSubmit={(handleSubmit)}>
        {/* QUESTION 1 */}
        <div className="border rounded-xl m-20 p-10 object-center max-w-3xl mx-auto">
        <p className="text-lg font-bold">Which of the following stories sounds the most interesting?</p>
        <label>
          <input type="radio" name="q1" id="q1" value="type1"
            onChange={(event) => setAnswer1("type1")}
            checked={answer1 === "type1"}
          /> A courageous hero goes on a high-stakes mission to infiltrate a supervillain’s headquarters before the city is destroyed, culminating in a suspenseful final battle
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q1" id="q1" value="type2"
            onChange={(event) => setAnswer1("type2")}
            checked={answer1 === "type2"}
          />A poet struggles with finding purpose following the death of a loved one—told through a series of fragmented journal entries
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q1" id="q1" value="type3"
            onChange={(event) => setAnswer1("type3")}
            checked={answer1 === "type3"}
          />A woman forms a heartwarming friendship with a sick animal at her local zoo, nurturing it as it heals
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q1" id="q1" value="type4"
            onChange={(event) => setAnswer1("type4")}
            checked={answer1 === "type4"}
          />A man discovers his reality is not what it seems as he begins to realize he is stuck in a time loop
        </label>
        </div>

        {/* QUESTION 2 */}
        <div className="border rounded-xl m-20 p-10 object-center max-w-3xl mx-auto">
        <p className="text-lg font-bold">When you pick up a book, what are you hoping to find inside its pages?</p>
        <label>
          <input type="radio" name="q2" value="type1"
            onChange={(event) => setAnswer2("type1")}
            checked={answer2 === "type1"}
          />High-stakes suspense—you want something entertaining that will keep you on your toes
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q2" value="type2"
            onChange={(event) => setAnswer2("type2")}
            checked={answer2 === "type2"}
          />Philosophical and emotional depth—you want to explore the mysteries of the universe and the human experience
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q2" value="type3"
            onChange={(event) => setAnswer2("type3")}
            checked={answer2 === "type3"}
          />Optimistic and uplifting stories—you want to escape from the stress of daily life
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q2" value="type4"
            onChange={(event) => setAnswer2("type4")}
            checked={answer2 === "type4"}
          />Norm-defying narratives—you want something original that challenges how you see the world
        </label>
        </div>

        {/* QUESTION 3 */}
        <div className="border rounded-xl m-20 p-10 object-center max-w-3xl mx-auto">
        <p className="text-lg font-bold">What is your preferred type of narrative voice?</p>
        <label>
          <input type="radio" name="q3" value="type1"
            onChange={(event) => setAnswer3("type1")}
            checked={answer3 === "type1"}
          />Event-focused and action-oriented—without wasting too much time on descriptions or characters’ thoughts and emotions
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q3" value="type2"
            onChange={(event) => setAnswer3("type2")}
            checked={answer3 === "type2"}
          />Poetic, lyrical prose—you don’t mind abstract language or philosophical tangents
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q3" value="type3"
            onChange={(event) => setAnswer3("type3")}
            checked={answer3 === "type3"}
          />Simple and easy to read—you want reading to be relaxing, and you don’t want to have to decipher the story
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q3" value="type4"
            onChange={(event) => setAnswer3("type4")}
            checked={answer3 === "type4"} 
            />Unreliable or unconventional narration—you want your perspective to be challenged
        </label>
        </div>

        {/* QUESTION 4 */}
        <div className="border rounded-xl m-20 p-10 object-center max-w-3xl mx-auto">
        <p className="text-lg font-bold">What kind of ending would satisfy you most?</p>
        <label>
          <input type="radio" name="q4" value="type1"
            onChange={(event) => setAnswer4("type1")}
            checked={answer4 === "type1"}
          />An epic final battle ending in triumph
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q4" value="type2"
            onChange={(event) => setAnswer4("type2")}
            checked={answer4 === "type2"}
          />A deeply introspective realization
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q4" value="type3"
            onChange={(event) => setAnswer4("type3")}
            checked={answer4 === "type3"}
          />A heartwarming ending where all conflict is resolved
        </label>
        <br/><br/>
        <label>
          <input type="radio" name="q4" value="type4"
            onChange={(event) => setAnswer4("type4")}
            checked={answer4 === "type4"} 
            />An ambiguous ending that leaves you with lingering questions
        </label>
        </div>

        {/* QUESTION 5 */}
        <div className="border rounded-xl m-20 p-10 object-center max-w-3xl mx-auto">
        <p className="text-lg font-bold">Which of these is your favorite color?</p>
        <label>
          <input type="radio" name="q5" value="type1"
            onChange={(event) => setAnswer5("type1")}
            checked={answer5 === "type1"}
          />Red
        </label>
        <br/>
        <label>
          <input type="radio" name="q5" value="type2"
            onChange={(event) => setAnswer5("type2")}
            checked={answer5 === "type2"}
          />Blue
        </label>
        <br/>
        <label>
          <input type="radio" name="q5" value="type3"
            onChange={(event) => setAnswer5("type3")}
            checked={answer5 === "type3"}
          />Yellow
        </label>
        <br/>
        <label>
          <input type="radio" name="q5" value="type4"
            onChange={(event) => setAnswer5("type4")}
            checked={answer5 === "type4"} 
            />Purple
        </label>
        </div>


        <input class="text-center bg-leaves hover:bg-stone rounded-xl p-5 m-5 w-80 inline-block text-xl text-neutral-100 font-serif"
        type="submit" value="See Results" />
      </form>

      
      {/* {score != null &&  score <= 5 &&  <h2> Your score is {score}/3. </h2>}  */}
      {score == "type1" && navigate ("/QuizResults1")}
      {score == "type2" && navigate ("/QuizResults2")}
      {score == "type3" && navigate ("/QuizResults3")}
      {score == "type4" && navigate ("/QuizResults4")}
      

      
      {/* <Link to="/QuizResults"><QuizButton title='See Results' /></Link> */}
    </div>
  );
}


export default Quiz;
