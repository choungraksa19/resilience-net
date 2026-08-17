import { useTranslation } from "react-i18next";

export default function Impact() {
  const { t } = useTranslation();
  const impacts = [1, 2, 3, 4, 5].map((n) => t(`home.impact${n}`));

  return (
    <section className="section impact-section">
      <h2 className="section-title">{t("home.impactTitle")}</h2>
      <ul className="impact-list">
        {impacts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}