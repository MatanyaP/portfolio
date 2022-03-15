export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://matanyap.github.io/portfolio/" rel="noopener noreferrer">
                <img src="https://matanyap.github.io/portfolio/public/logo.png" alt="Logo" />
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </nav>
    )
}