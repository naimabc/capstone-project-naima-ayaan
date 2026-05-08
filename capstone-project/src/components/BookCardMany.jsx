function BookCardMany({ cover, title, author, value }) {
    return (
        <div value={value} className="inline-block font-serif text-leaves border border-leaves rounded-xl p-3 w-75 h-135">
            <div className="">
                <img src={cover} className="object-contain" />
                <br />
                <h2 clasName="text-xl text-leaves">{title}</h2>
                <h5 class="text-sm text-leaves">{author}</h5>
            </div>
        </div>
    );
}
export default BookCardMany;