function BookCardMany({cover, title, author, value}) {
    return (
        <div value={value} class="font-serif text-leaves border h-130 border-leaves rounded-xl p-3 mb-10">  
            <img src={cover} className="object-contain"></img>
            <br></br>
            <h2 class="text-xl text-leaves">{title}</h2>
            <h5 class="text-sm text-leaves">{author}</h5>
       </div>
    );
}
export default BookCardMany;