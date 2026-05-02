import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FindJobs from "./FindJobs";
import { Header } from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FindTalent from "./FindTalent";
import TalentProfile from "../Components/FindTalents/TalentProfile";
import PostJobPage from "./PostJobPage";
import JobDescPage from "./JobDescPage";
import ApplyJobPage from "./ApplyJobPage";
import CompanyPage from "./CompanyPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
    const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/post-jobs" element={<PostJobPage />} />
          <Route path="/talent-profile" element={<TalentProfile />} />
          <Route path="/jobs" element={<JobDescPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/posted-jobs" element={<PostedJobPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <SignUpPage />} />
          <Route path="/profile" element={ <ProfilePage /> } />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
