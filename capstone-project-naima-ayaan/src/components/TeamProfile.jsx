function TeamProfile({name, role, bio, image}) {
    return (
        <div class="border rounded-3xl p-10 m-20  w-sm object-center">  
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