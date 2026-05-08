// import Archetype from "../components/archetypes/Archetype.jsx";
import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";
import Subtitle from "../components/Subtitle.jsx";
import Type1 from "../components/archetypes/Type1.jsx";
import Type2 from "../components/archetypes/Type2.jsx";
import Type3 from "../components/archetypes/Type3.jsx";
import Type4 from "../components/archetypes/Type4.jsx";





function Home() {
    return(
        <div>
            <Header title='Welcome!!!' subtitle=''/>
            <Link to="/quiz"><QuizButton title="Click to Take Quiz!"/></Link>
            <br></br>
            <br></br>
            <Subtitle subtitle="All Types:"></Subtitle>
            <div>
                <Type1/>
                <Type2/>
                <Type3/>
                <Type4/>
                
                
            </div>
        </div>
    );
}
export default Home;
