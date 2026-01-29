import "../styles/skills.css";
import { skills } from "../data/skills";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className="skills fade-in">
      <h2>Skills</h2>

      {Object.entries(skills).map(([key, value]) => (
        <div key={key} className="skill-group">
          <h3>{key.toUpperCase()}</h3>
          <div className="skill-list">
            {value.map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
