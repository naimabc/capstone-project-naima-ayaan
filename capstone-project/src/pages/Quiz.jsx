import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion.jsx"
import { useState } from "react";

function Quiz() {

  return(
    <div>
      <Header title='Quiz' subtitle='What Archetype Are You?'/>
      <QuizQuestion question='Which of the following stories sounds the most interesting?' option1='A courageous hero goes on a high-stakes mission to infiltrate a supervillain’s headquarters before the city is destroyed, culminating in a suspenseful final battle' option2='A poet struggles with finding purpose following the death of a loved one—told through a series of fragmented journal entries' option3='A woman forms a heartwarming friendship with a sick animal at her local zoo, nurturing it as it heals' option4='A man discovers his reality is not what it seems as he begins to realize he is stuck in a time loop'/>
      <QuizQuestion question='When you pick up a book, what are you hoping to find inside its pages?' option1='High-stakes suspense—you want something entertaining that will keep you on your toes' option2='Philosophical and emotional depth—you want to explore the mysteries of the universe and the human experience' option3='Optimistic and uplifting stories—you want to escape from the stress of daily life' option4='Norm-defying narratives—you want something original that challenges how you see the world'/>
      <QuizQuestion question='What is your preferred type of narrative voice?' option1='Event-focused and action-oriented—without wasting too much time on descriptions or characters’ thoughts and emotions' option2='Poetic, lyrical prose—you don’t mind abstract language or philosophical tangents' option3='Simple and easy to read—you want reading to be relaxing, and you don’t want to have to decipher the story' option4='Unreliable or unconventional narration—you want your perspective to be challenged'/>
      
      
      <Link to="/quizresults"><QuizButton title='See Results'/></Link>
    </div>
  );
}


export default Quiz;
