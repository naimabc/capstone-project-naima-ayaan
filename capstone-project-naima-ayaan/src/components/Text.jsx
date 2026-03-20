function Text({subtitle, text}) {
    return (
        <div class="border rounded-lg p-10 m-10  max-w-lg mx-auto">  
            <h2 class="text-2xl">{subtitle}:</h2>
            <p>{text}</p>
        
       </div>
    );
}
export default Text;