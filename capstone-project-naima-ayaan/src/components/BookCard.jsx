function BookCard({cover, title, author}) {
    return (
        <div class="border rounded-3xl p-10 m-20 object-center">  
            <img src={cover}></img>
            <br></br>
            <h2 class="text-xl">{title}</h2>
            <h5 class="text-sm">{author}</h5>
       </div>
    );
}
export default BookCard;