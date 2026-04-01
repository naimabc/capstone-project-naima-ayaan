function Text({subtitle, text}) {
    return (
        <div class="rounded-lg bg-sage p-5 max-w-lg mx-auto font-serif">  
            <h2 class="text-2xl text-stone">{subtitle}:</h2>
            <p>{text}</p>
        
       </div>
    );
}
export default Text;