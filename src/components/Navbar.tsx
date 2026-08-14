import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/scan", label: "Scan Crop" },
  { to: "/weather", label: "Weather" },
  { to: "/recommendations", label: "Recommendations" },
  { to: "/history", label: "Scan History" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">ResilienceNet</div>

      <button
        className="hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}