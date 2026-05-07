import Header from "../components/Header.jsx";
import MySearch from "./MySearch.jsx";
import FilterButton from "../components/FilterButton.jsx";
import { Link } from "react-router-dom";

function Search() {
  return(
     <>
            <Header title='Browse All Books!' subtitle='Our Complete Library'/>
            <div className="font-serif text-leaves border rounded-xl p-10 m-10 columns-4 gap-10 max-sm:columns-2">
                <MySearch/>
            </div>
        </>
  );
}


export default Search;