import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = [1, 2, 3, 4].map((n) => ({
    title: t(`home.feature${n}Title`),
    text: t(`home.feature${n}Text`),
  }));

  return (
    <section className="section features-section">
      <h2 className="section-title">{t("home.featuresTitle")}</h2>
      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}