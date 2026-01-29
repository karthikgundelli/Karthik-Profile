import "../styles/contact.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className="contact fade-in">
      <h2>Contact</h2>

      <div className="contact-box">
        <p>Email: <span>karthikgundelly4@gmail.com</span></p>
        <p>Phone: <span>6281062845</span></p>

        <div className="contact-links">
          <a
            href="https://linkedin.com/in/gundelli-karthik-598b71243"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://portfolio-pi-lilac-31.vercel.app/" target="_blank">
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
