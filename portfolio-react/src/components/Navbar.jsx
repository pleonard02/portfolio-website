import { NavLink } from "react-router-dom";

function Navbar() {
    const links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Projects", path: "/projects" },
        { label: "Skills", path: "/skills" },
        { label: "Other", path: "/other" },
    ];

    return (
        <nav className="glass-nav" aria-label="Main navigation">
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    className={({isActive}) => (isActive ? "active" : "")}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    ); 
}

export default Navbar;