import { Link } from "react-router-dom";

const actions = [
  { to: "/scan", label: "Scan New Crop" },
  { to: "/history", label: "View History" },
  { to: "/weather", label: "View Weather" },
  { to: "/recommendations", label: "View Recommendations" },
];

export default function QuickActions() {
  return (
    <div className="dashboard-card quick-actions">
      <h2 className="card-title">Quick Actions</h2>
      <div className="quick-actions-grid">
        {actions.map((action) => (
          <Link to={action.to} className="btn btn-primary" key={action.to}>
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}