import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/dashboard", label: t("nav.dashboard") },
    { to: "/scan", label: t("nav.scan") },
    { to: "/weather", label: t("nav.weather") },
    { to: "/recommendations", label: t("nav.recommendations") },
    { to: "/history", label: t("nav.history") },
    { to: "/about", label: t("nav.about") },
  ];

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

      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
        <ul className="navbar-links">
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
        <LanguageSelector />
      </div>
    </nav>
  );
}