import { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector.tsx";

function HeaderMenu() {
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    window.onhashchange = () => {
      setCurrentSection(window.location.hash);
    };
    return () => {
      window.onhashchange = null;
    };
  }, []);

  return (
    <div
      className="h-fit fixed top-0 left-0 right-0 z-50 top-nav hidden md:block">
      <nav className="w-fit mx-auto pt-14 pb-9">
        <ul
          className="flex gap-8">
          <li>
            <a href="#home"
               className={`${currentSection === "" || currentSection === "#home" ? "border-b border-primary text-primary hover:brightness-125" : "hover:underline hover:text-primary"} px-1.5 pb-1`}>Home</a>
          </li>
          <li>
            <a href="#about"
               className={`${currentSection === "#about" ? "border-b border-primary text-primary hover:brightness-125" : "hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>About</a>
          </li>
          <li>
            <a href="#experience"
               className={`${currentSection === "#experience" ? "border-b border-primary text-primary hover:brightness-125" : "hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Experience</a>
          </li>
          <li>
            <a href="#projects"
               className={`${currentSection === "#projects" ? "border-b border-primary text-primary hover:brightness-125" : "hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Projects</a>
          </li>
          <li>
            <a href="#contact"
               className={`${currentSection === "#contact" ? "border-b border-primary text-primary hover:brightness-125" : "hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Contact</a>
          </li>
          <li className="relative">
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;