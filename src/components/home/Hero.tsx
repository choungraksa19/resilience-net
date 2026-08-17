import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-brand">ResilienceNet</span>
        <p className="hero-tagline">{t("home.tagline")}</p>
        <h1 className="hero-headline">{t("home.headline")}</h1>
        <p className="hero-subtext">{t("home.subtext")}</p>
        <div className="hero-actions">
          <Link to="/scan" className="btn btn-primary">
            {t("home.scanYourCrop")}
          </Link>
          <a href="#how-it-works" className="btn btn-secondary">
            {t("home.learnMore")}
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-inner">🌱</div>
      </div>
    </section>
  );
}