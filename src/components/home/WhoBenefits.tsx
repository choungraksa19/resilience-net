import { useTranslation } from "react-i18next";

export default function WhoBenefits() {
  const { t } = useTranslation();
  const groups = [1, 2, 3, 4].map((n) => t(`home.benefit${n}`));

  return (
    <section className="section who-benefits-section">
      <h2 className="section-title">{t("home.whoBenefitsTitle")}</h2>
      <div className="benefits-grid">
        {groups.map((g) => (
          <div className="benefit-card" key={g}>
            <p>{g}</p>
          </div>
        ))}
      </div>
    </section>
  );
}