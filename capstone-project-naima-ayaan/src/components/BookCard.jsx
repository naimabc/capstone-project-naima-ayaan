function BookCard({cover, title, author}) {
    return (
        <div class="font-serif text-leaves">  
            <img src={cover} className="object-scale-down"></img>
            <br></br>
            <h2 class="text-xl text-leaves">{title}</h2>
            <h5 class="text-sm text-leaves">{author}</h5>
       </div>
    );
}
export default BookCard;