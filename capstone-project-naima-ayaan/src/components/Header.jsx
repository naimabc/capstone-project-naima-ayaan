function Header({title,subtitle}) {
    return (
        <div class="text-center rounded-xl p-10 m-10 bg-neutral-400 font-serif">
            <h1 class="text-3xl text-neutral-100">{title}</h1>
            <h3 class="text-neutral-300">{subtitle}</h3>
       </div>
    );
}
export default Header;