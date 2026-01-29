import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Karthik</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
        <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
        <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
        <li><a onClick={() => setOpen(false)} href="#experience">Experience</a></li>
        <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
