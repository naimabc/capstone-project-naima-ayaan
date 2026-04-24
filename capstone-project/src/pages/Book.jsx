import BookCard from "../components/BookCard.jsx";
import Header from "../components/Header.jsx";
import Text from "../components/Text.jsx";


function Book() {
  return(
     <>
            <Header title='The Memory Police' subtitle='Yoko Ogawa'/>
            <div className="columns-2 gap-20 max-sm:columns-1">

            <BookCard cover="https://m.media-amazon.com/images/I/91mWGZ17QRL._AC_UF1000,1000_QL80_.jpg" title="" author=""/>
            <Text subtitle='Synopsis' text='The Memory Police by Yōko Ogawa is a dystopian novel set on an unnamed island where objects and memories collectively disappear, enforced by a draconian police force. A young novelist tries to protect her editor, R, who retains memories of lost things, as their world shrinks to include the loss of limbs and silence.'/>
            </div>
        </>
  );
}


export default Book;