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
               className={`${currentSection === "" || currentSection === "#home" ? "border-b border-primary text-primary hover:brightness-125" : "text-default hover:underline hover:text-primary"} px-1.5 pb-1`}>Inicio</a>
          </li>
          <li>
            <a href="#about"
               className={`${currentSection === "#about" ? "border-b border-primary text-primary hover:brightness-125" : "text-default hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Bio</a>
          </li>
          <li>
            <a href="#experience"
               className={`${currentSection === "#experience" ? "border-b border-primary text-primary hover:brightness-125" : "text-default hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Experiencia</a>
          </li>
          <li>
            <a href="#projects"
               className={`${currentSection === "#projects" ? "border-b border-primary text-primary hover:brightness-125" : "text-default hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Proyectos</a>
          </li>
          <li>
            <a href="#contact"
               className={`${currentSection === "#contact" ? "border-b border-primary text-primary hover:brightness-125" : "text-default hover:border-b hover:border-primary hover:text-primary"} px-1.5 pb-1`}>Contacto</a>
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