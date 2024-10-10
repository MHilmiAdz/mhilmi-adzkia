function Header() {
    return (
        <header className="flex justify-center items-center p-10 bg-zinc-300 w-full">
            <div className="flex space-x-20">
                <h3 className="text-xl font-serif">About</h3>
                <h3 className="text-xl font-serif">Skills</h3>
                <h3 className="text-xl font-serif">Portofolio</h3>
            </div>
        </header>
    );
}

export default Header;