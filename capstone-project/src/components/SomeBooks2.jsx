
import BookCardMany from "./BookCardMany.jsx"
import { Link } from "react-router-dom";

function SomeBooks2() {
    return (
        <div class="font-serif text-leaves border border-nature rounded-xl p-10 m-10 columns-4 gap-10 max-sm:columns-2">
            
            <Link to="/Books/eyesgod"><BookCardMany cover="https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg" title="Their Eyes Were Watching God" author="Zora Neale Hurston"/></Link>
            <Link to="/Books/onearth"><BookCardMany cover="https://m.media-amazon.com/images/I/81sSWzjCftL._AC_UF1000,1000_QL80_.jpg" title="On Earth We're Briefly Gorgeous" author="Ocean Vuong"/></Link>
            <Link to="/Books/outline"><BookCardMany cover="https://m.media-amazon.com/images/I/710ueOT0rWL._AC_UF1000,1000_QL80_.jpg" title="Outline" author="Rachel Cusk"/></Link>
            <Link to="/Books/aguaviva"><BookCardMany cover="https://m.media-amazon.com/images/I/91MCFflhpPL._UF1000,1000_QL80_.jpg" title="Agua Viva" author="Clarice Lispector"/></Link>

        </div>
    );
}
export default SomeBooks2;