const problems = [
  {
    title: "Crop Disease",
    text: "Diseases can spread quickly and are often hard to identify early without expert help.",
  },
  {
    title: "Unpredictable Weather",
    text: "Sudden weather changes make planning and protecting crops more difficult.",
  },
  {
    title: "Lack of Fast Expert Advice",
    text: "Many farmers don't have quick access to agricultural specialists when issues arise.",
  },
  {
    title: "Crop Losses",
    text: "Delayed diagnosis and treatment often leads to preventable crop damage.",
  },
  {
    title: "Food-Security Risk",
    text: "Repeated crop losses threaten the stability of local and regional food supplies.",
  },
];

export default function Problem() {
  return (
    <section className="section problem-section">
      <h2 className="section-title">The Problem</h2>
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