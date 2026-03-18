import Archetype from "../components/Archetype.jsx";
import Header from "../components/Header.jsx";
import QuizButton from "../components/QuizButton.jsx";
import { Link } from "react-router-dom";


function Home() {
    return(
        <>
            <Header title='Welcome!' subtitle='Kazi'/>
            <Link to="/quiz"><QuizButton title="Click to Take Quiz!"/></Link>
            <h1 class="text-2xl">The Archetypes:</h1>
            <div className="columns-3 flex">
            <Archetype ArchName="Hero" genres="Fantasy, Adventure" info="info" image=""/>
            <Archetype ArchName="Mage" genres="Fantasy, Adventure" info="info" image=""/>
            <Archetype ArchName="Knight" genres="Fantasy, Adventure" info="info" image=""/>
            </div>
        </>
    );
}
export default Home;
