export default function Header() {
    return (
        <header>
            <div className="left">
                <h1>Learn to code!</h1>
            </div>
            <div className="right">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}