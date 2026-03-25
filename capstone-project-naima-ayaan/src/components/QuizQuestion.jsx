import Subtitle from '../components/Subtitle';

function QuizQuestion({question,option1,option2,option3,option4}) {
    return (
      <div class="border rounded-xl m-20 p-10 object-center max-w-xl mx-auto">
        <p>
          <Subtitle subtitle={question}/>
          <br></br>
          <br></br>
          <label>
            <input type="radio" name="myRadio" value={option1} />
            {option1}
          </label>
          <br></br>
          <label>
            <input type="radio" name="myRadio" value={option2} />
            {option2}
          </label>
          <br></br>
          <label>
            <input type="radio" name="myRadio" value={option3} />
            {option3}
          </label>
          <br></br>
          <label>
            <input type="radio" name="myRadio" value={option4} />
            {option4}
          </label>
        </p>

      </div>
    );
}
export default QuizQuestion;