function Archetype({ArchName, genres, info, image}) {
    return (
        <div class="border rounded-3xl p-10 m-20 object-center">  
            <h2 class="text-2xl">{ArchName}:</h2>
            <h5 class="text-lg">Genres: {genres}</h5>
            <br></br>
            <img src={image}></img>
            <br></br>
            <p >{info}</p>
       </div>
    );
}
export default Archetype;