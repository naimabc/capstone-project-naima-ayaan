import BookCard from "../../components/BookCard.jsx";
import Header from "../../components/Header.jsx";
import Text from "../../components/Text.jsx";


function Book({btitle, bauthor, bcover, synopsis}) {
  return(
     <>
            <Header title={btitle} subtitle={bauthor}/>
            <div className="columns-2 gap-20 max-sm:columns-1">

            <BookCard cover={bcover} title="" author=""/>
            <Text subtitle='Synopsis' text={synopsis}/>
            </div>
        </>
  );
}


export default Book;