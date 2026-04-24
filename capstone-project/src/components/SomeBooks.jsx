
import BookCardMany from "./BookCardMany.jsx"

function SomeBooks() {
    return (
        <div class="font-serif text-leaves border rounded-xl p-10 m-10 columns-4 gap-10 max-sm:columns-2">
            
            <BookCardMany cover="https://m.media-amazon.com/images/I/91K8LzXdaYL._AC_UF1000,1000_QL80_.jpg" title="What it Means When a Man Falls From the Sky" author="Lesley Nneka Arimah"/>
            <BookCardMany cover="https://prodimage.images-bn.com/pimages/9781101911815_p0_v2_s1200x630.jpg" title="The Memory Police" author="Yoko Ogawa"/>
            <BookCardMany cover="https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg" title="Slaughterhouse-Five" author="Kurt Vonnegut"/>
            <BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/>

        </div>
    );
}
export default SomeBooks;