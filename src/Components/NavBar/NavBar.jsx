import "./NavBar.css";
import logo from "../../assets/Nohopapa Logo_Transparent.png";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = isOpen ? "menu-open-link" : "menu-close-link";

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <nav className="responsive-navbar">
      <img src={logo} className="logo" alt="Nohopapa-Logo-Horizontal" />
      <Hamburger
        toggle={() => {
          setIsOpen(!isOpen);
        }}
        toggled={isOpen}
      />
      <ul className="page-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Library-Resources">Library Resources</NavLink>
        <NavLink to="/Internal-Resources">Nohopapa Reports</NavLink>
      </ul>

      <section
        className={`mobile-menu ${isOpen ? "menu-open" : "menu-closed"}`}
      >
        <ul className="mobile-page-links">
          <NavLink className={navLinkClass} to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink className={navLinkClass} to="/Library-Resources" onClick={handleNavLinkClick}>
            Library Resources
          </NavLink>
          <NavLink className={navLinkClass} to="/Internal-Resources" onClick={handleNavLinkClick}>
            Nohopapa Reports
          </NavLink>
        </ul>
      </section>
    </nav>
  );
}
