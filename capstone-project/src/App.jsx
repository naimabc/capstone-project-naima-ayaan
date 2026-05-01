import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import AllBooks from "./pages/AllBooks";
import QuizResults from "./pages/QuizResults";
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
            <Link to="/allbooks">Browse Books</Link> |{" "}
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/allbooks" element={<AllBooks />}/>
            <Route path="/Books/mempol" element={<MemPol />}/>
            <Route path="/Books/onearth" element={<OnEarth />}/>
            <Route path="/Books/manfallsky" element={<ManFallSky />}/>
            <Route path="/Books/slaught5" element={<Slaught5 />}/>
            <Route path="/Books/bigbird" element={<BigBird />}/>
            <Route path="/Books/outline" element={<Outline />}/>
            <Route path="/Books/eyesgod" element={<EyesGod />}/>
            <Route path="/Books/aguaviva" element={<AguaViva />}/>
           <Route path="/Books/coffeecold" element={<CoffeeCold />}/>
            <Route path="/quizresults" element={<QuizResults />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  
  );
}

export default App;
