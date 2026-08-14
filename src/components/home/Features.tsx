const features = [
  {
    title: "AI Disease Diagnosis",
    text: "Identify crop diseases quickly from an uploaded image.",
  },
  {
    title: "Treatment Recommendations",
    text: "Get guidance on how to treat and manage identified issues.",
  },
  {
    title: "Weather Forecasts",
    text: "Stay informed with weather conditions relevant to your farm.",
  },
  {
    title: "Farming Suggestions",
    text: "Receive practical suggestions to improve crop health over time.",
  },
];

export default function Features() {
  return (
    <section className="section features-section">
      <h2 className="section-title">Features</h2>
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