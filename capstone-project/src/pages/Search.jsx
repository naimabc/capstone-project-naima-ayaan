import Header from "../components/Header.jsx";
import MySearch from "./MySearch.jsx";
import Subtitle from "../components/Subtitle.jsx";
import { Link } from "react-router-dom";

function Search() {
  return(
     <>
            <Header title='Browse All Books!' subtitle='Our Complete Library'/>
             <p className="text-left text-xl font-serif text-leaves  m-2 ml-5 w-20">Filter:</p>
            <div className="font-serif text-leaves columns-4 gap-10 max-sm:columns-2">
                <MySearch/>
            </div>
        </>
  );
}


export default Search;