const groups = [
  "Small-Scale Farmers",
  "Agricultural Organizations",
  "Government Agencies",
  "NGOs Supporting Agriculture",
];

export default function WhoBenefits() {
  return (
    <section className="section who-benefits-section">
      <h2 className="section-title">Who Benefits</h2>
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