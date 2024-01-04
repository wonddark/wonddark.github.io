"use client";
import experiences from "@constants/experiences";
import { MouseEventHandler } from "react";

const Experience = (item: (typeof experiences)[0]) => {
  const setHovered: MouseEventHandler<HTMLLIElement> = ({ currentTarget }) => {
    currentTarget.className = currentTarget.className + " hovered";
  };
  const unsetHovered: MouseEventHandler<HTMLLIElement> = ({
    currentTarget,
  }) => {
    currentTarget.className = currentTarget.className.replace(" hovered", "");
  };
  return (
    <li
      className="p-[17px] rounded-[7px] cursor-pointer text-[1.1rem] exp-item"
      onMouseEnter={setHovered}
      onMouseLeave={unsetHovered}
    >
      <p className="font-semibold text-teal-100">{item.role}</p>
      <p className="italic my-2">{item.company}</p>
      <div className="grid grid-cols-[70%_30%]">
        <div className="pr-4">{item.jobDescription}</div>
        <div className="flex justify-end pl-1">
          <div className="italic">
            <span>{item.dateStart}</span> -{" "}
            <span>{!item.current ? item.dateEnd : "Present"}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

const Experiences = () => {
  return (
    <div id="experience" className="pt-6 lg:pt-28">
      <p className="uppercase">Professional experience</p>
      <ul>
        {experiences.map((item) => (
          <Experience key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
