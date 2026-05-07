import { useState } from "react";
import BookCardMany from "../components/BookCardMany";
import { Link } from "react-router-dom";


function MySearch(){


const [filter,setFilter] = useState ('');


const allBooks = [
   {'id':1, 'link':"/Books/onearth",'author':"Ocean Vuong", "title":"On Earth We're Briefly Gorgeous", 'cover':"https://m.media-amazon.com/images/I/81sSWzjCftL._AC_UF1000,1000_QL80_.jpg", 'value':"Poetry"},
   {'id':2,'link':"/Books/manfallsky",'author':"Lesley Nneka Arimah", "title":"What it Means When a Man Falls From the Sky", 'cover':"https://m.media-amazon.com/images/I/91K8LzXdaYL._AC_UF1000,1000_QL80_.jpg", 'value':"Contemporary"},
   {'id':3,'link':"/Books/slaught5",'author':"Kurt Vonnegut", "title":"Slaughterhouse-Five", 'cover':"https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg", 'value':"Dystopia"},
   {'id':4,'link':"/Books/mempol",'author':"Yoko Ogawa", "title":"The Memory Police", 'cover':"https://prodimage.images-bn.com/pimages/9781101911815_p0_v2_s1200x630.jpg", 'value':"Dystopia"},
   {'id':5,'link':"/Books/eyesgod",'author':"Zora Neale Hurston", "title":"Their Eyes Were Watching Gods", 'cover':"https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg", 'value':"Coming-Of-Age"},
   {'id':6,'link':"/Books/outline",'author':"Rachel Cusk", "title":"Outline", 'cover':"https://m.media-amazon.com/images/I/710ueOT0rWL._AC_UF1000,1000_QL80_.jpg", 'value':"Contemporary"},
   {'id':7,'link':"/Books/aguaviva",'author':"Clarice Lispector", "title":"Agua Viva", 'cover':"https://m.media-amazon.com/images/I/91MCFflhpPL._UF1000,1000_QL80_.jpg", 'value':"Poetry"},
   {'id':8,'link':"/Books/bigbird",'author':"Hiromi Kawakami", "title":"Under the Eye of the Big Bird", 'cover':"https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg", 'value':"Science Fiction"},
   {'id':9,'link':"/Books/coffeecold",'author':"Toshikazu Kawaguchi", "title":"Before the Coffee Gets Cold", 'cover':"https://m.media-amazon.com/images/I/81XuBDUvMaL._AC_UF1000,1000_QL80_.jpg", 'value':"Contemporary"},
   {'id':10,'link':"/Books/richasians",'author':"Kevin Kwan", "title":"Crazy Rich Asians", 'cover':"https://m.media-amazon.com/images/I/71qzZ9tf+AL._AC_UF1000,1000_QL80_.jpg", 'value':"Romance"},
   {'id':11,'link':"/Books/endersgame",'author':"Orson Scott Card", "title":"Ender's Games", 'cover':"https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg", 'value':"Science Fiction"},
   {'id':12,'link':"/Books/silentpatient",'author':"Alex Michaelide", "title":"The Silent Patient", 'cover':"https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg", 'value':"Thriller"},
   {'id':13,'link':"/Books/poppywar",'author':"R.F. Kuang", "title":"The Poppy War", 'cover':"https://m.media-amazon.com/images/I/71N+1tUQeoL._AC_UF1000,1000_QL80_.jpg", 'value':"Fantasy"},
   {'id':14,'link':"/Books/morisakibook",'author':"Satoshi Yagisawa", "title":"Days at the Morisaki Bookshop", 'cover':"https://m.media-amazon.com/images/I/91IoQbOhRlL._AC_UF1000,1000_QL80_.jpg", 'value':"Coming-Of-Age"},
   {'id':15,'link':"/Books/brightcreatures",'author':"Shelby Van Pelt", "title":"Remarkably Bright Creatures", 'cover':"https://m.media-amazon.com/images/I/81X7rAcaQkL._AC_UF1000,1000_QL80_.jpg", 'value':"Romance"},
   {'id':16,'link':"/Books/hungergames",'author':"Suzanne Collins", "title":"The Hunger Games", 'cover':"https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg", 'value':"Dystopia"},
]


const filteredBooks = allBooks.filter( (book) => {
   const lowerSearch = filter.toLowerCase();


   return (
       book.title.toLowerCase().includes(lowerSearch) ||
       book.value.toLowerCase().includes(lowerSearch) ||
       book.author.toLowerCase().includes(lowerSearch)
   );
});


   return (
       <div>

<div>
       
           <input className = "border" type="text" placeholder="search here!" value = {filter} onChange = {(event) => setFilter(event.target.value)}
           />
           </div>

        <div>
           {filter !== "" &&
          
         


                   filteredBooks.map((book) => (

                        <div key={book.id}>

                            <Link to={book.link}><BookCardMany title={book.title} cover={book.cover} author={book.author} value={book.value}/></Link> 
                                
                        </div>
             
                   
                   ))}
            
            



</div>
       </div>
   )
};


export default MySearch;
