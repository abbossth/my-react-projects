import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="brand-name">My First App</div>
            <nav>
                <ul className="nav-container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>

    </>
  )
}

export default Navbar