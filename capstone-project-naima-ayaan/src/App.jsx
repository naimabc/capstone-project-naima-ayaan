import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import AllBooks from "./pages/AllBooks";
import QuizResults from "./pages/QuizResults";
import Login from "./pages/Login";
import Book from "./pages/Book";

function App() {
  return (
    <div class="text-center m-10">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/quiz">Quiz</Link> |{" "}
          <Link to="/allbooks">Browse Books</Link> |{" "}
          <Link to="/book">Book</Link> |{" "}

          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/allbooks" element={<AllBooks />}/>
          <Route path="/book" element={<Book />}/>
          <Route path="/quizresults" element={<QuizResults />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  
  );
}

export default App;
