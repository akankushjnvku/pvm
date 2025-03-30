import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainPage from "./Pages/MainPage";
import Profile from "./Components/Profile/Profile";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = {
    about: useRef(null),
    education: useRef(null),
    technicalSkills: useRef(null),
    publications: useRef(null),
    researchExperience: useRef(null),
    journalPapers: useRef(null),
    conferences: useRef(null),
    researchProjects: useRef(null),
    contact: useRef(null),
    achievements: useRef(null),
    courses: useRef(null),
    teachingMentorshipExperience: useRef(null),
    extraCurricular: useRef(null),
    references: useRef(null),
    curriculum: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-5 bg-gray-200 gap-5">
      {/* Sidebar - Hidden on Mobile, 1/4 width on Desktop */}
      <div className="hidden md:block md:w-1/4">
        <Sidebar activeSection={activeSection} />
      </div>

      {/* Main Content - Takes full width on Mobile, 3/4 on Desktop */}
      <div className="w-full md:w-3/4 flex-1">
        <MainPage sectionRefs={sectionRefs} />
      </div>

      {/* Profile - Full width on Mobile, Adjusts on Desktop */}
      <div className="w-full md:w-1/4">
        <Profile />
      </div>
    </div>
  );
};

export default App;
