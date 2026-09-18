import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Capsules from "./capsule/components/capsules";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="create" element={<h1>Create</h1>} />
          <Route path="capsules" element={<Capsules />} />
        </Route>
      </Routes>
    </div>
  );
}