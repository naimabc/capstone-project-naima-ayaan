function TeamProfile({name, role, bio, image}) {
    return (
        <div class="border rounded-lg p-10 m-20 max-w-sm mx-auto">  
            <h2 class="text-2xl">{name}:</h2>
            <h5 class="text-lg">Role: {role}</h5>
            <br></br>
            <img src={image}></img>
            <br></br>
            <p >{bio}</p>
       </div>
    );
}
export default TeamProfile;