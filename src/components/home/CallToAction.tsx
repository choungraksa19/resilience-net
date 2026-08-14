import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="section cta-section">
      <h2>Start protecting your crops today.</h2>
      <Link to="/scan" className="btn btn-primary btn-large">
        Scan Your Crop
      </Link>
    </section>
  );
}