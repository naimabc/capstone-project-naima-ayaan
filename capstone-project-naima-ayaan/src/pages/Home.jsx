// import Archetype from "../components/archetypes/Archetype.jsx";
import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";
import Type1 from "../components/archetypes/Type1.jsx";
import Type2 from "../components/archetypes/Type2.jsx";
import Type3 from "../components/archetypes/Type3.jsx";
import Type4 from "../components/archetypes/Type4.jsx";
import Type5 from "../components/archetypes/Type5.jsx";




function Home() {
    return(
        <>
            <Header title='Welcome!' subtitle='Kazi'/>
            <Link to="/quiz"><QuizButton title="Click to Take Quiz!"/></Link>
            <br></br>
            <br></br>
            <h1 class="text-2xl">The Archetypes:</h1>
            <div>
                <Type1/>
                <Type2/>
                <Type3/>
                <Type4/>
                <Type5/>
                
            </div>
        </>
    );
}
export default Home;
