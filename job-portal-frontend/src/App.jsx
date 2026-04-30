import { createTheme, MantineProvider } from "@mantine/core";
import {Provider} from "react-redux"
import { Notifications } from "@mantine/notifications";
import '@mantine/carousel/styles.css';
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css"; 
import "./App.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FindTalent from "./Pages/FindTalent";
import TalentProfile from "./Components/FindTalents/TalentProfile";
import PostJobPage from "./Pages/PostJobPage";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import Store from "./Store";

function App() {
  // To use mantine color theme, we need to create an array of color palattes
  const theme = createTheme({
    focusRing: "never",
    primaryColor: "orient",
    primaryShade: 5,
    fontFamily: "poppins, sans-serif",
    colors: {
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      orient: [
        "#f1fafe",
        "#e2f3fc",
        "#bfe8f8",
        "#86d5f3",
        "#45c0eb",
        "#1da8da",
        "#1088b9",
        "#0e6d96",
        "#105d7e",
        "#134c67",
        "#0d3144",
      ],
    },
  });

  return (
    <>
    <Provider store = {Store}>
      {/*  MantineProvider is used to provide Mantine styles and theming to the application */}
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
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
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<SignUpPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </MantineProvider>
      </Provider>
    </>
  );
}

export default App;
