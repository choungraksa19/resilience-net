const steps = [
  "Farmer",
  "Upload Crop Image",
  "AI Analyzes Disease",
  "Receive Recommendations",
  "Improve Crop Health",
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works-section" id="how-it-works">
      <h2 className="section-title">How It Works</h2>
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