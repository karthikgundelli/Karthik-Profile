import { useState } from "react";
import "../styles/experience.css";

export default function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <section id="experience" className="experience">
      <h2 onClick={() => setOpen(!open)} className="toggle-title">
        Experience {open ? "−" : "+"}
      </h2>

      {open && (
        <div className="exp-card fade-in show">
          <h3>Web Developer Intern</h3>
          <p>Internship Studio | July 2024 – August 2024</p>
          <ul>
            <li>Built responsive UI using React.js</li>
            <li>Improved performance</li>
            <li>Deployed using Vercel</li>
          </ul>
        </div>
      )}
    </section>
  );
}
