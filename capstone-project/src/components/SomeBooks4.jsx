
import BookCardMany from "./BookCardMany.jsx"
import { Link } from "react-router-dom";

function SomeBooks4() {
    return (
        <div class="flex font-serif text-leaves border border-nature rounded-xl p-10 m-10 gap-1 max-sm:columns-2">
            
            <Link to="/Books/manfallsky"><BookCardMany cover="https://m.media-amazon.com/images/I/91K8LzXdaYL._AC_UF1000,1000_QL80_.jpg" title="What it Means When a Man Falls From the Sky" author="Lesley Nneka Arimah"/></Link>
            <Link to="/Books/mempol"><BookCardMany cover="https://prodimage.images-bn.com/pimages/9781101911815_p0_v2_s1200x630.jpg" title="The Memory Police" author="Yoko Ogawa"/></Link>
            <Link to="/Books/slaught5"><BookCardMany cover="https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg" title="Slaughterhouse-Five" author="Kurt Vonnegut"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>

        </div>
    );
}
export default SomeBooks4;