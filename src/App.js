import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences,
  resumeSection,
} from "./editable-stuff/config.js";

import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";
import ResumeOverlay from "./components/home/ResumeOverlay";
import ScrollToTopButton from "./components/ScrollToTopButton";

/* ===============================
   HOME PAGE
================================ */
const Home = React.forwardRef(({ onOpenResume }, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />

      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}

      {experiences.show && (
        <Experience heading={experiences.heading} experiences={experiences} />
      )}

      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}

      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
    </>
  );
});

/* ===============================
   APP ROOT
================================ */
const App = () => {
  const titleRef = React.useRef(null);

  // ✅ Resume overlay state (MUST live here)
  const [resumeOpen, setResumeOpen] = React.useState(false);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && (
        <Navbar ref={titleRef} onOpenResume={() => setResumeOpen(true)} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home ref={titleRef} onOpenResume={() => setResumeOpen(true)} />
          }
        />
      </Routes>

      {/* ✅ Hide arrow when resume overlay is open */}
      <ScrollToTopButton hide={resumeOpen} />

      {/* Resume Overlay (same-page viewer) */}
      {resumeSection.show && (
        <ResumeOverlay
          show={resumeOpen}
          onClose={() => setResumeOpen(false)}
          heading={resumeSection.heading}
          fileId={resumeSection.fileId}
        />
      )}

      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
