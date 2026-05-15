
import BookCardMany from "./BookCardMany.jsx"
import { Link } from "react-router-dom";

function SomeBooks1() {
    return (
        <div class="flex font-serif text-leaves border border-nature rounded-xl p-10 m-10 gap-1 max-sm:columns-2">
            
            <Link to="/Books/poppywar"><BookCardMany cover="https://m.media-amazon.com/images/I/71N+1tUQeoL._AC_UF1000,1000_QL80_.jpg" title="The Poppy War" author="R.F. Kuang"/></Link>
            <Link to="/Books/endersgame"><BookCardMany cover="https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg" title="Ender's Game" author="Orson Scott Card"/></Link>
            <Link to="/Books/silentpatient"><BookCardMany cover="https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg" title="The Silent Patient" author="Alex Michaelides"/></Link>
            <Link to="/Books/hungergames"><BookCardMany cover="https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg" title="The Hunger Games" author="Suzanne Collins"/></Link>

        </div>
    );
}
export default SomeBooks1;