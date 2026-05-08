import { useState } from "react";
import BookCardMany from "../components/BookCardMany";
import { Link } from "react-router-dom";


function MySearch() {
    const [search, setSearch] = useState('');

    const allBooks = [
        { 'id': 1, 'link': "/Books/onearth", 'author': "Ocean Vuong", "title": "On Earth We're Briefly Gorgeous", 'cover': "https://m.media-amazon.com/images/I/81sSWzjCftL._AC_UF1000,1000_QL80_.jpg", 'value': "poetry", 'main': "all" },
        { 'id': 2, 'link': "/Books/manfallsky", 'author': "Lesley Nneka Arimah", "title": "What it Means When a Man Falls From the Sky", 'cover': "https://m.media-amazon.com/images/I/91K8LzXdaYL._AC_UF1000,1000_QL80_.jpg", 'value': "contemporary", 'main': "all" },
        { 'id': 3, 'link': "/Books/slaught5", 'author': "Kurt Vonnegut", "title": "Slaughterhouse-Five", 'cover': "https://m.media-amazon.com/images/I/71Q0c9qf-1L._AC_UF1000,1000_QL80_.jpg", 'value': "dystopia", 'main': "all" },
        { 'id': 4, 'link': "/Books/mempol", 'author': "Yoko Ogawa", "title": "The Memory Police", 'cover': "https://prodimage.images-bn.com/pimages/9781101911815_p0_v2_s1200x630.jpg", 'value': "dystopia", 'main': "all" },
        { 'id': 5, 'link': "/Books/eyesgod", 'author': "Zora Neale Hurston", "title": "Their Eyes Were Watching Gods", 'cover': "https://m.media-amazon.com/images/I/71YvIyTP6fL._AC_UF1000,1000_QL80_.jpg", 'value': "coming-of-age", 'main': "all" },
        { 'id': 6, 'link': "/Books/outline", 'author': "Rachel Cusk", "title": "Outline", 'cover': "https://m.media-amazon.com/images/I/710ueOT0rWL._AC_UF1000,1000_QL80_.jpg", 'value': "contemporary", 'main': "all" },
        { 'id': 7, 'link': "/Books/aguaviva", 'author': "Clarice Lispector", "title": "Agua Viva", 'cover': "https://m.media-amazon.com/images/I/91MCFflhpPL._UF1000,1000_QL80_.jpg", 'value': "poetry", 'main': "all" },
        { 'id': 8, 'link': "/Books/bigbird", 'author': "Hiromi Kawakami", "title": "Under the Eye of the Big Bird", 'cover': "https://m.media-amazon.com/images/I/71Rd-R7WcqL._UF1000,1000_QL80_.jpg", 'value': "science-fiction", 'main': "all" },
        { 'id': 9, 'link': "/Books/coffeecold", 'author': "Toshikazu Kawaguchi", "title": "Before the Coffee Gets Cold", 'cover': "https://m.media-amazon.com/images/I/81XuBDUvMaL._AC_UF1000,1000_QL80_.jpg", 'value': "contemporary", 'main': "all" },
        { 'id': 10, 'link': "/Books/richasians", 'author': "Kevin Kwan", "title": "Crazy Rich Asians", 'cover': "https://m.media-amazon.com/images/I/71qzZ9tf+AL._AC_UF1000,1000_QL80_.jpg", 'value': "romance", 'main': "all" },
        { 'id': 11, 'link': "/Books/endersgame", 'author': "Orson Scott Card", "title": "Ender's Games", 'cover': "https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg", 'value': "science-fiction", 'main': "all" },
        { 'id': 12, 'link': "/Books/silentpatient", 'author': "Alex Michaelide", "title": "The Silent Patient", 'cover': "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg", 'value': "thriller", 'main': "all" },
        { 'id': 13, 'link': "/Books/poppywar", 'author': "R.F. Kuang", "title": "The Poppy War", 'cover': "https://m.media-amazon.com/images/I/71N+1tUQeoL._AC_UF1000,1000_QL80_.jpg", 'value': "fantasy", 'main': "all" },
        { 'id': 14, 'link': "/Books/morisakibook", 'author': "Satoshi Yagisawa", "title": "Days at the Morisaki Bookshop", 'cover': "https://m.media-amazon.com/images/I/91IoQbOhRlL._AC_UF1000,1000_QL80_.jpg", 'value': "coming-of-age", 'main': "all" },
        { 'id': 15, 'link': "/Books/brightcreatures", 'author': "Shelby Van Pelt", "title": "Remarkably Bright Creatures", 'cover': "https://m.media-amazon.com/images/I/81X7rAcaQkL._AC_UF1000,1000_QL80_.jpg", 'value': "romance", 'main': "all" },
        { 'id': 16, 'link': "/Books/hungergames", 'author': "Suzanne Collins", "title": "The Hunger Games", 'cover': "https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg", 'value': "dystopia", 'main': "all" },
    ]

    const filteredBooks = allBooks.filter((book) => {
        return (
            book.value.includes(search) ||
            book.main.includes(search)
        );
    });

    return (
        <div className="grid grid-cols-12 gap-y-5">
            <div className="translate-x-5">
                <select
                    className="border rounded border-nature"
                    class="select"
                    defaultValue="all"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                >
                    <option value="all">All</option>
                    <option value="romance">Romance</option>
                    <option value="contemporary">Contemporary</option>
                    <option value="coming-of-age">Coming-Of-Age</option>
                    <option value="dystopia">Dystopia</option>
                    <option value="poetry">Poetry</option>
                    <option value="science-fiction">Science Fiction</option>
                    <option value="thriller">Thriller</option>
                    <option value="fantasy">Fantasy</option>
                </select>
            </div>
            <br />
            <div className="translate-y-10 -translate-x-10">
                {filteredBooks.map((book) => (
                    <div className="mb-5" key={book.id}>
                        <Link to={book.link}><BookCardMany title={book.title} cover={book.cover} author={book.author} value={book.value} /></Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MySearch;