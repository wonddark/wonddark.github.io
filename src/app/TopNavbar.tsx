"use client";
import navItems from "@constants/nav-items";

const TopNavbar = () => {
  return (
    <div className="block lg:hidden sticky top-0 z-10 top-nav">
      <ul className="flex justify-stretch w-full">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item${
              "".includes(`#${item.id}`) ? " current" : ""
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNavbar;
