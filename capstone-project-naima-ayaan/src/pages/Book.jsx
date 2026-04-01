import BookCard from "../components/BookCard.jsx";
import Header from "../components/Header.jsx";
import Text from "../components/Text.jsx";


function Book() {
  return(
     <>
            <Header title='Jane Eyre' subtitle='Charlotte Bronte'/>
            <div className="columns-3 flex gap-10 max-sm:columns-2">

            <BookCard cover="https://m.media-amazon.com/images/I/91mWGZ17QRL._AC_UF1000,1000_QL80_.jpg" title="The Memory Police" author="Yoko Ogawa"/>
            <Text subtitle='Synopsis' text='synopsis of book here blah blah blah poor orphen girl blah blah blah older dude who is secretly married'/>
            </div>
        </>
  );
}


export default Book;