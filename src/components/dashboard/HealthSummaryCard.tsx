import type { CropHealthSummary } from "../../data/dashboardSampleData";

interface HealthSummaryCardProps {
  summary: CropHealthSummary;
}

export default function HealthSummaryCard({ summary }: HealthSummaryCardProps) {
  const items = [
    { label: "Healthy", value: summary.healthy, className: "status-healthy" },
    { label: "Needs Attention", value: summary.needsAttention, className: "status-attention" },
    { label: "Critical", value: summary.critical, className: "status-critical" },
  ];

  return (
    <div className="dashboard-card health-summary">
      <h2 className="card-title">Crop Health Summary</h2>
      <div className="health-grid">
        {items.map((item) => (
          <div className={`health-stat ${item.className}`} key={item.label}>
            <span className="health-value">{item.value}</span>
            <span className="health-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}