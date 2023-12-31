import navItems from "@/constants/nav-items";

const Navbar = () => {
  return (
    <nav className="mt-[33px]">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex justify-start items-center py-[9px] w-full text-teal-300 opacity-40 nav-item uppercase tracking-wide"
            >
              <hr className="h-[2px] w-[37px] mr-[13px]" />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
