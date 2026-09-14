import { NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
    return (
        <header>
            <nav className="navbar">

                <div className="logo">
                    <h2>Portfolio</h2>
                </div>

                <ul className="nav-links">

                    <li>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/skills">
                            Skills
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/education">
                            Education
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>

                    {/* DARK / LIGHT TOGGLE */}
                    <li>
                        <button
                            type="button"
                            className="theme-toggle"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? "☀️ Light" : "🌙 Dark"}
                        </button>
                    </li>

                </ul>

            </nav>
        </header>
    );
}

export default Navbar;