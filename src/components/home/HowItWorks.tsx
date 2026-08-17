import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = [1, 2, 3, 4, 5].map((n) => t(`home.step${n}`));

  return (
    <section className="section how-it-works-section" id="how-it-works">
      <h2 className="section-title">{t("home.howItWorksTitle")}</h2>
      <div className="steps-flow">
        {steps.map((step, i) => (
          <div className="step-item" key={step}>
            <div className="step-box">{step}</div>
            {i < steps.length - 1 && <span className="step-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}