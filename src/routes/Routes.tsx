import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/index";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
