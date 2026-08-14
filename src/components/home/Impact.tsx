const impacts = [
  "Faster Diagnosis",
  "Reduced Crop Losses",
  "Increased Crop Production",
  "Improved Food Security",
  "Lower Farming Costs",
];

export default function Impact() {
  return (
    <section className="section impact-section">
      <h2 className="section-title">Impact</h2>
      <ul className="impact-list">
        {impacts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}