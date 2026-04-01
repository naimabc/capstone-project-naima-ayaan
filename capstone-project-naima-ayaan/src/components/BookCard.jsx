function BookCard({cover, title, author}) {
    return (
        <div class="font-serif text-leaves border h-200 border-leaves rounded-3xl p-5 mb-10">  
            <img src={cover} className="h-180 w-130"></img>
            <br></br>
            <h2 class="text-xl">{title}</h2>
            <h5 class="text-sm">{author}</h5>
       </div>
    );
}
export default BookCard;