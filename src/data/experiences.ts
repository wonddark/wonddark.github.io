type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl: string | null;
  startDate: string;
  endDate: string | null;
  logo: string | null;
};

export const experiences: Experience[] = [
  {
    id: "datamart",
    role: "Frontend Developer",
    company: "Datamart SpA",
    companyUrl: "https://datamart.co/",
    startDate: "2022/06/13",
    endDate: null,
    logo: "",
  },
  {
    id: "primaram",
    role: "Web Developer",
    company: "Prima-Ram S.A.",
    companyUrl: "https://primaram.com/",
    startDate: "2023/10/16",
    endDate: "2023/12/07",
    logo: "",
  },
  {
    id: "dardeus",
    role: "Web Developer",
    company: "Dardeus Inc.",
    companyUrl: "https://www.dardeus.com/",
    startDate: "2021/05/3",
    endDate: "2022/04/11",
    logo: "",
  },
  {
    id: "360SmartConnect",
    role: "Web Developer",
    company: "360SmartConnect",
    companyUrl: "https://www.360sc.io/",
    startDate: "2021/01/4",
    endDate: "2022/04/30",
    logo: "",
  },
  {
    id: "soleil",
    role: "Web Developer",
    company: "Soleil Dreams Solutions",
    companyUrl: "#",
    startDate: "2020/10/4",
    endDate: "2020/12/15",
    logo: "",
  },
  {
    id: "ryder",
    role: "Web Developer",
    company: "Ryder System Inc.",
    companyUrl: "https://www.ryder.com/",
    startDate: "2020/07/7",
    endDate: "2020/10/21",
    logo: "",
  },
  {
    id: "icm",
    role: "Web Developer",
    company: "ICM Inc.",
    companyUrl: "#",
    startDate: "2019/09/7",
    endDate: "2020/11/18",
    logo: "",
  },
  {
    id: "pibloc",
    role: "Web Developer",
    company: "PiBloc",
    companyUrl: "https://www.pibloc.com/",
    startDate: "2019/02/4",
    endDate: "2019/06/28",
    logo: "",
  },
];
