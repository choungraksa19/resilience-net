import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-brand">ResilienceNet</span>
        <p className="hero-tagline">AI-Powered Food Security & Sustainable Agriculture</p>
        <h1 className="hero-headline">
          Smarter Farming. Healthier Crops. Stronger Communities.
        </h1>
        <p className="hero-subtext">
          ResilienceNet uses AI-powered crop analysis, weather information, and
          farming recommendations to help farmers make better decisions and
          reduce crop losses.
        </p>
        <div className="hero-actions">
          <Link to="/scan" className="btn btn-primary">
            Scan Your Crop
          </Link>
          <a href="#how-it-works" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-inner">🌱</div>
      </div>
    </section>
  );
}