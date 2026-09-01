import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="capsules" element={<h1>Capsules</h1>} />
        </Route>
      </Routes>
    </div>
  );
}