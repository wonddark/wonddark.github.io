import { useEffect, useState } from "react";

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
      className="h-fit fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#131516] top-nav hidden md:block">
      <nav className="w-fit mx-auto pt-14 pb-9">
        <ul
          className="flex gap-8 font-medium leading-[1.25] tracking-[0.08em] underline-offset-4">
          <li>
            <a href="#home"
               className={`${currentSection === "" || currentSection === "#home" ? "border-b border-[#009394] text-[#009394] hover:brightness-125" : "hover:underline hover:text-[#009394]"} px-1.5`}>Home</a>
          </li>
          <li>
            <a href="#about"
               className={`${currentSection === "#about" ? "border-b border-[#009394] text-[#009394] hover:brightness-125" : "hover:border-b hover:border-[#009394] hover:text-[#009394]"} px-1.5`}>About</a>
          </li>
          <li>
            <a href="#experience"
               className={`${currentSection === "#experience" ? "border-b border-[#009394] text-[#009394] hover:brightness-125" : "hover:border-b hover:border-[#009394] hover:text-[#009394]"} px-1.5`}>Experience</a>
          </li>
          <li>
            <a href="#toolbox"
               className={`${currentSection === "#toolbox" ? "border-b border-[#009394] text-[#009394] hover:brightness-125" : "hover:border-b hover:border-[#009394] hover:text-[#009394]"} px-1.5`}>Toolbox</a>
          </li>
          <li>
            <a href="#projects"
               className={`${currentSection === "#projects" ? "border-b border-[#009394] text-[#009394] hover:brightness-125" : "hover:border-b hover:border-[#009394] hover:text-[#009394]"} px-1.5`}>Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;