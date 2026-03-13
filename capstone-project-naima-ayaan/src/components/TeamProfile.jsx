function TeamProfile({name, role, bio, image}) {
    return (
        <div>  
            <h2>{name}:</h2>
            <h5>Role: {role}</h5>
            <br></br>
            <img src={image}></img>
            <br></br>
            <p >{bio}</p>
       </div>
    );
}
export default Header;