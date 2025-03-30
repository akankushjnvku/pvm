import React, { useState } from "react";

const Sidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-5 left-5 bg-gray-800 text-white p-2 rounded-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Menu
      </button>

      {/* Sidebar - Visible on Desktop, Toggleable on Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-60 bg-gray-800 text-white p-5 rounded-r-lg shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:relative md:w-60`}
      >
        <button
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          ✖ Close
        </button>

        <ul className="space-y-2 mt-10 md:mt-0">
          {[
            { id: "about", label: "About" },
            { id: "education", label: "Education" },
            { id: "technicalSkills", label: "Technical Skills" },
            { id: "researchExperience", label: "Research Experience" },
            { id: "journalPapers", label: "- Journal Papers", indent: true },
            { id: "conferences", label: "- Conferences", indent: true },
            { id: "researchProjects", label: "- Research Projects", indent: true },
            { id: "achievements", label: "Achievements" },
            { id: "courses", label: "Courses" },
            { id: "teachingMentorshipExperience", label: "Teaching/Mentorship" },
            { id: "extraCurricular", label: "Sports & Community" },
            { id: "references", label: "References" },
            { id: "curriculum", label: "Curriculum Vitae" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label, indent }) => (
            <li key={id} className={indent ? "ml-4" : ""}>
              <a
                href={`#${id}`}
                className={`block w-full p-2 rounded hover:bg-gray-700 transition ${
                  activeSection === id ? "font-bold underline" : ""
                }`}
                onClick={() => setIsOpen(false)} // Close sidebar on mobile after clicking
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
