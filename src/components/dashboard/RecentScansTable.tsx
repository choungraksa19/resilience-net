import type { RecentScan } from "../../data/dashboardSampleData";

interface RecentScansTableProps {
  scans: RecentScan[];
}

function statusClass(status: RecentScan["status"]) {
  if (status === "Healthy") return "status-healthy";
  if (status === "Needs Attention") return "status-attention";
  return "status-critical";
}

export default function RecentScansTable({ scans }: RecentScansTableProps) {
  return (
    <div className="dashboard-card recent-scans">
      <h2 className="card-title">Recent Crop Scans</h2>

      <div className="table-wrapper">
        <table className="scans-table">
          <thead>
            <tr>
              <th>Crop</th>
              <th>Disease</th>
              <th>Confidence</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan) => (
              <tr key={scan.id}>
                <td data-label="Crop">{scan.crop}</td>
                <td data-label="Disease">{scan.disease}</td>
                <td data-label="Confidence">{scan.confidence}%</td>
                <td data-label="Date">{scan.date}</td>
                <td data-label="Status">
                  <span className={`status-badge ${statusClass(scan.status)}`}>
                    {scan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}