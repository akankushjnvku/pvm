import React from "react";

const Sidebar = ({ activeSection }) => {
  return (
    <div className="w-full md:w-60 bg-gray-800 text-white p-5 rounded-lg md:mb-0 shadow-lg">
      <ul className="space-y-2">
        <li>
          <a
            href="#about"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "about" ? "underline font-bold" : ""
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#education"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "education" ? "underline font-bold" : ""
            }`}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#technicalSkills"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "technicalSkills" ? "underline font-bold" : ""
            }`}
          >
            Technical Skills
          </a>
        </li>
        <li>
          <a
            href="#researchExperience"
            className={`block p-0.6 rounded hover:bg-gray-700 ${
              activeSection === "researchExperience"
                ? "font-bold underline"
                : ""
            }`}
          >
            Research Experience
          </a>
          <ul>
            <li>
              <a
                href="#journalPapers"
                className={`block p-0.4 ml-3 hover:bg-gray-600 rounded ${
                  activeSection === "journalPapers" ? "font-bold underline" : ""
                }`}
              >
                - Journal Papers
              </a>
            </li>
            <li>
              <a
                href="#conferences"
                className={`block p-0.4 ml-3 hover:bg-gray-600 rounded ${
                  activeSection === "conferences" ? "font-bold underline" : ""
                }`}
              >
                - Conferences
              </a>
            </li>
            <li>
              <a
                href="#researchProjects"
                className={`block p-0.4 ml-3 hover:bg-gray-600 rounded ${
                  activeSection === "researchProjects"
                    ? "font-bold underline"
                    : ""
                }`}
              >
                - Research Projects
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#achievements"
            className={`block p-1 hover:bg-gray-700 rounded ${
              activeSection === "achievements" ? "font-bold underline" : ""
            }`}
          >
            Achievements
          </a>
        </li>

        <li>
          <a
            href="#courses"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "courses" ? "font-bold underline" : ""
            }`}
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#teachingMentorshipExperience"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "teachingMentorshipExperience"
                ? "font-bold underline"
                : ""
            }`}
          >
            Teaching/ Mentorship Experience
          </a>
        </li>
        <li>
          <a
            href="#extraCurricular"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "extraCurricular" ? "font-bold underline" : ""
            }`}
          >
            Extra-Curricular
          </a>
        </li>
        <li>
          <a
            href="#references"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "references" ? "font-bold underline" : ""
            }`}
          >
            References
          </a>
        </li>
        <li>
          <a
            href="#curriculum"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "curriculum" ? "font-bold underline" : ""
            }`}
          >
            Curriculum Vitae
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`block p-1 rounded hover:bg-gray-700 ${
              activeSection === "contact" ? "font-bold underline" : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
