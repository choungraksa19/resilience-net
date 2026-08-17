import { useTranslation } from "react-i18next";

export default function Problem() {
  const { t } = useTranslation();

  const problems = [1, 2, 3, 4, 5].map((n) => ({
    title: t(`home.problem${n}Title`),
    text: t(`home.problem${n}Text`),
  }));

  return (
    <section className="section problem-section">
      <h2 className="section-title">{t("home.problemTitle")}</h2>
      <div className="problem-grid">
        {problems.map((p) => (
          <div className="problem-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}