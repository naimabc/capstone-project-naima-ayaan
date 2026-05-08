function BookCardMany({ cover, title, author, value }) {
    return (
        <div value={value} className="font-serif text-leaves border border-leaves rounded-xl p-3  w-75 h-full">
            <div className="h-135">
                <img src={cover} className="object-contain" />
                <br />
                <h2 clasName="text-xl text-leaves">{title}</h2>
                <h5 class="text-sm text-leaves">{author}</h5>
            </div>
        </div>
    );
}
export default BookCardMany;