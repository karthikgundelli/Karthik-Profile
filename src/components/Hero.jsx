import "../styles/hero.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="hero fade-in">
      <h1>
        Hi, I’m <span>Karthik Gundelli</span>
      </h1>
      <p>
        Frontend / MERN Stack Developer building responsive and scalable web applications.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View Projects</a>
        <a href="/Karthik-RESUME.pdf" className="btn secondary">Download Resume</a>
      </div>
    </section>
  );
}
