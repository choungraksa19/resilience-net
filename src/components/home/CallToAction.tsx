import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="section cta-section">
      <h2>{t("home.ctaTitle")}</h2>
      <Link to="/scan" className="btn btn-primary btn-large">
        {t("home.scanYourCrop")}
      </Link>
    </section>
  );
}