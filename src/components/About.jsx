import '../styles/about.css';
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="about fade-in">
      <h2>About Me</h2>
      <p>
        I’m an entry-level MERN Stack Developer with strong hands-on experience in
        building responsive and user-centric web applications. I enjoy turning
        complex problems into clean, simple, and intuitive solutions using
        React.js and modern JavaScript.
      </p>
    </section>
  );
}
