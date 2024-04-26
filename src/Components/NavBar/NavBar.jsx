import "./NavBar.css";
import logo from "../../assets/Nohopapa Logo_Transparent.png";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="responsive-navbar">
      <img src={logo} className="logo" alt="Nohopapa-Logo-Horizontal" />
      <Hamburger/>
      <ul className="page-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Library-Resources">Library Resources</NavLink>
      </ul>
    </nav>
  );
}
