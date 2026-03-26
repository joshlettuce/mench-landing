import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenchLanding from "./pages/LandingPage.jsx";
import InvitePage from "./pages/InvitePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenchLanding />} />
        <Route path="/invite/:token" element={<InvitePage />} />
      </Routes>
    </BrowserRouter>
  );
}
