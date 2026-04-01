function BookCard({cover, title, author}) {
    return (
        <div class="font-serif text-leaves border h-200 w-170 border-leaves rounded-xl p-5 mb-10 ">  
            <img src={cover} className="object-contain"></img>
            <br></br>
            <h2 class="text-xl text-leaves">{title}</h2>
            <h5 class="text-sm text-leaves">{author}</h5>
       </div>
    );
}
export default BookCard;