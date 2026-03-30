function Text({subtitle, text}) {
    return (
        <div class="rounded-lg bg-neutral-200 p-10 m-10  max-w-lg mx-auto font-serif">  
            <h2 class="text-2xl text-neutral-700">{subtitle}:</h2>
            <p>{text}</p>
        
       </div>
    );
}
export default Text;