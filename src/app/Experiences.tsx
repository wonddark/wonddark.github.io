import experiences from "@/constants/experiences";

const Experience = (item: (typeof experiences)[0]) => {
  return (
    <li className="p-[17px] rounded-[7px] hover:bg-teal-800 cursor-pointer hover:text-teal-50 text-[1.1rem]">
      <p className="">{item.role}</p>
      <p>{item.company}</p>
      <div className="grid grid-cols-[70%_30%]">
        <div className="pr-4">{item.jobDescription}</div>
        <div className="flex justify-end pl-1">
          <div>
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
