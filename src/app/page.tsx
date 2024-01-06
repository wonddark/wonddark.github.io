import SidebarNav from "@app/SidebarNav";
import Experiences from "@app/Experiences";
import { fontHero, fontHero2 } from "@constants/font-styles";
import GithubLogo from "@app/GithubLogo";
import GmailLogo from "@app/GmailLogo";
import TopNavbar from "@app/TopNavbar";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 max-w-[1200px] mx-auto relative px-2.5">
      <div className="lg:col-span-4 lg:sticky lg:top-0 h-fit pt-6 lg:pt-24">
        <p className="mb-4 text-6xl lg:text-7xl leading-none text-teal-800 tracking-tighter">
          <span className={fontHero.className}>Osmanys Fuentes Lombá</span>
        </p>
        <p className="text-emerald-100 text-2xl tracking-tight mb-6">
          <span className={fontHero2.className}>
            Web Developer and Entrepreneur
          </span>
        </p>
        <p className="lg:mb-24">
          I build useful and accessible data-driven web applications
        </p>
        <SidebarNav />
        <div className="mt-7 lg:mt-40">
          <a
            href="/cv-osmanys-fuentes-lombá-en-2023.pdf"
            download="cv-osmanys-fuentes-lombá-en-2023.pdf"
            className="block border border-teal-200 hover:border-transparent hover:bg-teal-800 text-teal-200 hover:text-teal-50 py-4 px-14 rounded-sm tracking-widest cursor-pointer w-fit mx-auto"
          >
            Download CV
          </a>
        </div>
        <div className="flex gap-5 mt-14 justify-center">
          <a
            href="https://github.com/wonddark"
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-2xl"
          >
            <GithubLogo />
          </a>
          <a href="mailto:ossmanys@gmail.com" className="text-2xl">
            <GmailLogo />
          </a>
        </div>
      </div>
      <main className="col-span-full lg:col-span-8 flex flex-col gap-2 relative">
        <TopNavbar />
        <div
          id="about"
          className="pt-6 lg:pt-28 text-[1.15rem] leading-relaxed"
        >
          <p>
            Lorem ipsum purus in mollis nunc sed id semper. Suspendisse faucibus
            interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus
            nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed
            adipiscing diam donec adipiscing tristique risus nec feugiat.
            Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In
            nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet
            sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra
            ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae
            proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit
            amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae
            justo eget magna fermentum. Ultrices dui sapien eget mi proin sed
            libero. Convallis a cras semper auctor neque vitae tempus quam.
            Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus
            a pellentesque sit amet porttitor. Suspendisse potenti nullam ac
            tortor vitae. Blandit volutpat maecenas volutpat blandit. Nulla
            facilisi etiam dignissim diam quis enim lobortis scelerisque.
          </p>
        </div>
        <Experiences />
        <div id="projects" className="pt-6 lg:pt-28">
          <ul>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
