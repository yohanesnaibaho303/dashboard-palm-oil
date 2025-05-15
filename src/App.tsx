import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "./pages/login/LoginContainer";
import DashboardContainer from "./components/layout/dashboard/DashboardContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<DashboardContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
