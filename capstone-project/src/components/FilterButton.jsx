
function FilterButton({title, handleFilter}) {
    return (
        <div class="text-center bg-leaves hover:bg-stone rounded-xl p-2 m-5 w-50">
            <h1 class="text-neutral-100 font-serif">{title}</h1>
            <select name="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Romance">Romance</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Coming-Of-Age">Coming-Of-Age</option>
                <option value="Dystopia">Dystopia</option>
                <option value="Poetry">Poetry</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Thriller">Thriller</option>
                <option value="Fantasy">Fantasy</option>
            </select>
       </div>
    );
}

export default FilterButton;