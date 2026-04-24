import BookCardMany from "../components/BookCardMany.jsx";
import Header from "../components/Header.jsx";
import FilterButton from "../components/FilterButton.jsx";


function AllBooks() {
  return(
     <>
            <Header title='Browse All Books!' subtitle='Our Complete Library'/>
            <FilterButton title="Filter"/>

            <div className="columns-4 gap-10 max-sm:columns-2">
            <BookCardMany cover="https://i5.walmartimages.com/seo/Jane-Eyre-Masterpiece-Library-Edition-Hardcover-9781441342140_e9924ae6-71b6-4018-89b3-3a9590bb934f.b05ce944f40376224ecdd2a7b323db46.jpeg" title="Jane Eyre" author="Charlotte Bronte"/>
            <BookCardMany cover="https://m.media-amazon.com/images/I/91K8LzXdaYL._AC_UF1000,1000_QL80_.jpg" title="What it Means When a Man Falls From the Sky" author="Lesley Nneka Arimah"/>
            <BookCardMany cover="https://prodimage.images-bn.com/pimages/9781101911815_p0_v2_s1200x630.jpg" title="The Memory Police" author="Yoko Ogawa"/>
            <BookCardMany cover="https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg" title="Slaughterhouse-Five" author="Kurt Vonnegut"/>
            <BookCardMany cover="https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg" title="Under the Eye of the Big Bird" author="Hiromi Kawakami"/>
            <BookCardMany cover="https://i5.walmartimages.com/seo/Jane-Eyre-Masterpiece-Library-Edition-Hardcover-9781441342140_e9924ae6-71b6-4018-89b3-3a9590bb934f.b05ce944f40376224ecdd2a7b323db46.jpeg" title="Jane Eyre" author="Charlotte Bronte"/>
            <BookCardMany cover="https://i5.walmartimages.com/seo/Jane-Eyre-Masterpiece-Library-Edition-Hardcover-9781441342140_e9924ae6-71b6-4018-89b3-3a9590bb934f.b05ce944f40376224ecdd2a7b323db46.jpeg" title="Jane Eyre" author="Charlotte Bronte"/>
            <BookCardMany cover="https://i5.walmartimages.com/seo/Jane-Eyre-Masterpiece-Library-Edition-Hardcover-9781441342140_e9924ae6-71b6-4018-89b3-3a9590bb934f.b05ce944f40376224ecdd2a7b323db46.jpeg" title="Jane Eyre" author="Charlotte Bronte"/>

            </div>
        </>
  );
}


export default AllBooks;