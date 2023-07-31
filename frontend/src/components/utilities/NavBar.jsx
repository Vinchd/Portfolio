import { templateExtend, TemplateName } from "@gitgraph/react";
import React, { useEffect, useState } from "react";
import NavHome, {
  NavContact,
  NavCv,
  NavProjects,
} from "./datanavbar/DataNavBar.jsx";

export default function NavBar({ activeSection, center }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [value, setValue] = useState(81);
  const [graphKey, setGraphKey] = useState(0);

  const withoutHash = templateExtend(TemplateName.Metro, {
    branch: {
      label: {
        display: false,
      },
      lineWidth: 10,
    },
    commit: {
      message: {
        displayHash: false,
        displayAuthor: false,
        font: "normal 14pt Poppins",
        color: "#E6EDF3",
      },
      spacing: value,
    },
    colors: ["#415575", "#238636", "#7699CF", "#565554", "#D81159"],
  });
  const options = {
    author: " ",
    template: withoutHash,
    orientation: "vertical-reverse",
  };

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const newHeight = window.innerHeight;
      setWindowHeight(newHeight);
      if (newHeight > 840 && newHeight < 860) {
        setGraphKey((prevKey) => prevKey + 1);
        setValue(70);
      }
      if (newHeight > 740 && newHeight < 760) {
        setGraphKey((prevKey) => prevKey + 1);
        setValue(60);
      }
      if (newHeight > 650 && newHeight < 670) {
        setGraphKey((prevKey) => prevKey + 1);
        setValue(50);
      }
      if (newHeight > 560 && newHeight < 580) {
        setGraphKey((prevKey) => prevKey + 1);
        setValue(44);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerHeight < 700) {
          setGraphKey((prevKey) => prevKey + 1);
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return (
    <nav
      className={`nav hidden h-full min-w-[350px] max-w-[350px] ${center} justify-center overflow-hidden bg-tertiary lg:flex`}
    >
      {activeSection === "home" && (
        <NavHome
          graphKey={graphKey}
          options={options}
          handleClick={handleClick}
        />
      )}
      {activeSection === "projects" && (
        <NavProjects
          graphKey={graphKey}
          options={options}
          handleClick={handleClick}
        />
      )}
      {activeSection === "cv" && (
        <NavCv
          graphKey={graphKey}
          options={options}
          handleClick={handleClick}
        />
      )}
      {activeSection === "contact" && (
        <NavContact
          graphKey={graphKey}
          options={options}
          handleClick={handleClick}
        />
      )}
    </nav>
  );
}
