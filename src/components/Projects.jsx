import "../styles/projects.css";
import { projects } from "../data/projects";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="projects" className="projects fade-in">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
            <a href={project.link} target="_blank">Live Demo →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
