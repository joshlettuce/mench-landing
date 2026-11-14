import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenchLanding from "./pages/LandingPage.jsx";
import InvitePage from "./pages/InvitePage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import FamPage from "./pages/FamPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenchLanding />} />
        <Route path="/invite/:token" element={<InvitePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/fam" element={<FamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
