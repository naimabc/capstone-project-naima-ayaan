
import BookCardMany from "./BookCardMany.jsx"
import { Link } from "react-router-dom";

function SomeBooks2() {
    return (
        <div class="font-serif text-leaves border rounded-xl p-10 m-10 columns-4 gap-10 max-sm:columns-2">
            
            <Link to="/Books/eyesgod"><BookCardMany cover="https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg" title="Their Eyes Were Watching God" author="Zora Neale Hurston"/></Link>
            <Link to="/Books/onearth"><BookCardMany cover="https://m.media-amazon.com/images/I/81sSWzjCftL._AC_UF1000,1000_QL80_.jpg" title="On Earth We're Briefly Gorgeous" author="Ocean Vuong"/></Link>
            <Link to="/Books/slaught5"><BookCardMany cover="https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg" title="Slaughterhouse-Five" author="Kurt Vonnegut"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>

        </div>
    );
}
export default SomeBooks2;