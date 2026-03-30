function BookCard({cover, width, title, author}) {
    return (
        <div class="font-serif text-neutral-700 border border-leaves rounded-xl p-3 mb-10">  
            <img src={cover} class={width}></img>
            <br></br>
            <h2 class="text-xl">{title}</h2>
            <h5 class="text-sm">{author}</h5>
       </div>
    );
}
export default BookCard;