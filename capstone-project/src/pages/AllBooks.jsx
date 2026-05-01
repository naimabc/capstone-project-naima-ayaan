import BookCardMany from "../components/BookCardMany.jsx";
import Header from "../components/Header.jsx";
import FilterButton from "../components/FilterButton.jsx";
import { Link } from "react-router-dom";

function AllBooks() {
  return(
     <>
            <Header title='Browse All Books!' subtitle='Our Complete Library'/>
            <FilterButton title="Filter"/>
            <div className="font-serif text-leaves border rounded-xl p-10 m-10 columns-4 gap-10 max-sm:columns-2">
            <Link to="/Books/OnEarth"><BookCardMany cover="https://m.media-amazon.com/images/I/81sSWzjCftL._AC_UF1000,1000_QL80_.jpg" title="On Earth We're Briefly Gorgeous" author="Ocean Vuong"/></Link>
            <Link to="/Books/manfallsky"><BookCardMany cover="https://m.media-amazon.com/images/I/91K8LzXdaYL._AC_UF1000,1000_QL80_.jpg" title="What it Means When a Man Falls From the Sky" author="Lesley Nneka Arimah"/></Link>
            <Link to="/Books/slaught5"><BookCardMany cover="https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg" title="Slaughterhouse-Five" author="Kurt Vonnegut"/></Link>
            <Link to="/Books/mempol"><BookCardMany cover="https://prodimage.images-bn.com/pimages/9781101911815_p0_v2_s1200x630.jpg" title="The Memory Police" author="Yoko Ogawa"/></Link>
            <Link to="/Books/eyesgod"><BookCardMany cover="https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg" title="Their Eyes Were Watching God" author="Zora Neale Hurston"/></Link>
            <Link to="/Books/outline"><BookCardMany cover="https://m.media-amazon.com/images/I/710ueOT0rWL._AC_UF1000,1000_QL80_.jpg" title="Outline" author="Rachel Cusk"/></Link>
            <Link to="/Books/aguaviva"><BookCardMany cover="https://m.media-amazon.com/images/I/91MCFflhpPL._UF1000,1000_QL80_.jpg" title="Agua Viva" author="Clarice Lispector"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            <Link to="/Books/eyesgod"><BookCardMany cover="https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg" title="Their Eyes Were Watching God" author="Zora Neale Hurston"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            <Link to="/Books/eyesgod"><BookCardMany cover="https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg" title="Their Eyes Were Watching God" author="Zora Neale Hurston"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            <Link to="/Books/bigbird"><BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/></Link>
            </div>
        </>
  );
}


export default AllBooks;