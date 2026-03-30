function BookCard({cover, title, author}) {
    return (
        <div class="font-serif bg-neutral-200 text-neutral-700 border border-neutral-400 rounded-3xl p-5 mb-10">  
            <img src={cover} class=""></img>
            <br></br>
            <h2 class="text-xl">{title}</h2>
            <h5 class="text-sm">{author}</h5>
       </div>
    );
}
export default BookCard;