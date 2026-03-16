function Header({title,subtitle}) {
    return (
        <div class="text-center border rounded-xl p-10 m-10">
            <h1 class="text-3xl">{title}</h1>
            <h3>{subtitle}</h3>
       </div>
    );
}
export default Header;