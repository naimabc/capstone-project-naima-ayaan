function BookCard({cover, title, author}) {
    return (
        <div class="border rounded-3xl p-5 m-5 object-center max-w-3xs ">  
            <img src={cover} class=""></img>
            <br></br>
            <h2 class="text-xl">{title}</h2>
            <h5 class="text-sm">{author}</h5>
       </div>
    );
}
export default BookCard;