import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import HealthSummaryCard from "../components/dashboard/HealthSummaryCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import RecentScansTable from "../components/dashboard/RecentScansTable";
import QuickActions from "../components/dashboard/QuickActions";
import {
  sampleHealthSummary,
  sampleWeather,
  sampleRecommendation,
  sampleRecentScans,
} from "../data/dashboardSampleData";
import "../components/dashboard/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="page dashboard-page">
      <WelcomeBanner />

      <div className="dashboard-grid">
        <HealthSummaryCard summary={sampleHealthSummary} />
        <WeatherCard weather={sampleWeather} />
        <RecommendationCard recommendation={sampleRecommendation} />
      </div>

      <RecentScansTable scans={sampleRecentScans} />

      <QuickActions />
    </div>
  );
}