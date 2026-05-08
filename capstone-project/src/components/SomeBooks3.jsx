
import BookCardMany from "./BookCardMany.jsx"
import { Link } from "react-router-dom";

function SomeBooks3() {
    return (
        <div class="font-serif text-leaves border border-nature rounded-xl p-10 m-10 columns-4 gap-10 max-sm:columns-2">
            
            <Link to="/Books/coffeecold"><BookCardMany cover="https://m.media-amazon.com/images/I/81XuBDUvMaL._AC_UF1000,1000_QL80_.jpg" title="Before the Coffee Gets Cold" author="Toshikazu Kawaguchi"/></Link>
            <Link to="/Books/richasians"><BookCardMany cover="https://m.media-amazon.com/images/I/71qzZ9tf+AL._AC_UF1000,1000_QL80_.jpg" title="Crazy Rich Asians" author="Kevin Kwan"/></Link>
            <Link to="/Books/morisakibook"><BookCardMany cover="https://m.media-amazon.com/images/I/91IoQbOhRlL._AC_UF1000,1000_QL80_.jpg" title="Days at the Morisaki Bookshop" author="Satoshi Yagisawa"/></Link>
            <Link to="/Books/brightcreatures"><BookCardMany cover="https://m.media-amazon.com/images/I/81X7rAcaQkL._AC_UF1000,1000_QL80_.jpg" title="Remarkably Bright Creatures" author="Shelby Van Pelt"/></Link>

        </div>
    );
}
export default SomeBooks3;