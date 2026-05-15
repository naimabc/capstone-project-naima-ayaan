import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import QuizResults1 from "./pages/QuizResults1";
import QuizResults2 from "./pages/QuizResults2";
import QuizResults3 from "./pages/QuizResults3";
import QuizResults4 from "./pages/QuizResults4";
import Login from "./pages/Login";
import MemPol from "./pages/Books/MemPol";
import OnEarth from "./pages/Books/OnEarth";
import ManFallSky from "./pages/Books/ManFallSky";
import Slaught5 from "./pages/Books/Slaught5";
import BigBird from "./pages/Books/BigBird";
import EyesGod from "./pages/Books/EyesGod";
import Outline from "./pages/Books/Outline";
import AguaViva from "./pages/Books/AguaViva";
import CoffeeCold from "./pages/Books/CoffeeCold";
import RichAsians from "./pages/Books/RichAsians";
import EndersGame from "./pages/Books/EndersGame";
import SilentPatient from "./pages/Books/SilentPatient";
import MorisakiBook from "./pages/Books/MorisakiBook";
import PoppyWar from "./pages/Books/PoppyWar";
import BrightCreatures from "./pages/Books/BrightCreatures";
import HungerGames from "./pages/Books/HungerGames";
import Search from "./pages/Search";


function App() {

  return (
    <div class="bg-zest">
      <div class="text-center p-10">
        <BrowserRouter basename="capstone-project-naima-ayaan">
          <nav class="text-leaves font-serif">
            <Link to="/">Home</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/profile">Profile</Link> |{" "}
            <Link to="/quiz">Quiz</Link> |{" "}
            <Link to="/search">Browse Books</Link> |{" "}
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/Books/mempol" element={<MemPol />}/>
            <Route path="/Books/onearth" element={<OnEarth />}/>
            <Route path="/Books/manfallsky" element={<ManFallSky />}/>
            <Route path="/Books/slaught5" element={<Slaught5 />}/>
            <Route path="/Books/bigbird" element={<BigBird />}/>
            <Route path="/Books/outline" element={<Outline />}/>
            <Route path="/Books/eyesgod" element={<EyesGod />}/>
            <Route path="/Books/aguaviva" element={<AguaViva />}/>
            <Route path="/Books/coffeecold" element={<CoffeeCold />}/>
            <Route path="/Books/richasians" element={<RichAsians />}/>
            <Route path="/Books/endersgame" element={<EndersGame />}/>
            <Route path="/Books/silentpatient" element={<SilentPatient />}/>
            <Route path="/Books/morisakibook" element={<MorisakiBook />}/>
            <Route path="/Books/poppywar" element={<PoppyWar />}/>
            <Route path="/Books/brightcreatures" element={<BrightCreatures />}/>
            <Route path="/Books/hungergames" element={<HungerGames />}/>
            <Route path="/quizresults1" element={<QuizResults1 />} />
            <Route path="/quizresults2" element={<QuizResults2 />} />
            <Route path="/quizresults3" element={<QuizResults3 />} />
            <Route path="/quizresults4" element={<QuizResults4 />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  
  );
}

export default App;
