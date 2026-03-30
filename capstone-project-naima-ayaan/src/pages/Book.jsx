import BookCard from "../components/BookCard.jsx";
import Header from "../components/Header.jsx";
import Text from "../components/Text.jsx";


function Book() {
  return(
     <>
            <Header title='Jane Eyre' subtitle='Charlotte Bronte'/>
            <div className="columns-3 flex gap-10 max-sm:columns-2">

            <BookCard cover="https://i5.walmartimages.com/seo/Jane-Eyre-Masterpiece-Library-Edition-Hardcover-9781441342140_e9924ae6-71b6-4018-89b3-3a9590bb934f.b05ce944f40376224ecdd2a7b323db46.jpeg" class="w-1/2" title="" author=""/>
            <Text subtitle='Synopsis' text='synopsis of book here blah blah blah poor orphen girl blah blah blah older dude who is secretly married'/>
            </div>
        </>
  );
}


export default Book;