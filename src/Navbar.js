import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <h1 className="logo">Mochi</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/manga">Manga</Link>
            </div>
        </div>
    )
}

export default Navbar