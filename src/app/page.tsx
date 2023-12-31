import Navbar from "@/app/Navbar";
import Experiences from "@/app/Experiences";
import { fontHero, fontHero2 } from "@/constants/font-styles";
import GithubLogo from "@/app/GithubLogo";
import GmailLogo from "@/app/GmailLogo";

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
        <p className="mb-24">
          I build useful, beautiful and accesible data driven applications for
          the web
        </p>
        <Navbar />
        <div className="mt-40 text-center">
          <a
            href="/cv-osmanys-fuentes-lombá-en-2023.pdf"
            download="cv-osmanys-fuentes-lombá-en-2023.pdf"
            className="border border-teal-200 hover:border-transparent pres:border-teal-200 hover:bg-teal-800 text-teal-200 hover:text-teal-50 py-4 px-14 rounded-sm tracking-widest cursor-pointer"
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
      <main className="col-span-full lg:col-span-8 flex flex-col gap-2">
        {/*<div id="about">
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
            Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus
            faucibus scelerisque eleifend donec pretium vulputate. Enim ut
            tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit
            amet nisl suscipit adipiscing. Elementum integer enim neque volutpat
            ac tincidunt vitae. Id leo in vitae turpis massa sed elementum.
            Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in
            est ante in. Ut enim blandit volutpat maecenas volutpat blandit
            aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet
            porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus
            ornare suspendisse sed. Fermentum posuere urna nec tincidunt
            praesent semper feugiat nibh. Ac turpis egestas integer eget
            aliquet.
          </p>
        </div>*/}
        <Experiences />
        {/*<div id="projects">
          <ul>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
              Velit aliquet sagittis id consectetur purus ut faucibus. Lorem
              dolor sed viverra ipsum. Facilisis gravida neque convallis a cras.
              Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat
              pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris
              in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui
              sapien eget mi proin sed libero. Convallis a cras semper auctor
              neque vitae tempus quam. Netus et malesuada fames ac turpis
              egestas. Morbi enim nunc faucibus a pellentesque sit amet
              porttitor. Suspendisse potenti nullam ac tortor vitae. Blandit
              volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor
              urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend
              donec pretium vulputate. Enim ut tellus elementum sagittis vitae
              et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
              Elementum integer enim neque volutpat ac tincidunt vitae. Id leo
              in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu
              dui vivamus arcu felis. Suspendisse in est ante in. Ut enim
              blandit volutpat maecenas volutpat blandit aliquam etiam. Elit
              eget gravida cum sociis natoque. Aliquet porttitor lacus luctus
              accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse
              sed. Fermentum posuere urna nec tincidunt praesent semper feugiat
              nibh. Ac turpis egestas integer eget aliquet.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
              Velit aliquet sagittis id consectetur purus ut faucibus. Lorem
              dolor sed viverra ipsum. Facilisis gravida neque convallis a cras.
              Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat
              pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris
              in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui
              sapien eget mi proin sed libero. Convallis a cras semper auctor
              neque vitae tempus quam. Netus et malesuada fames ac turpis
              egestas. Morbi enim nunc faucibus a pellentesque sit amet
              porttitor. Suspendisse potenti nullam ac tortor vitae. Blandit
              volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor
              urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend
              donec pretium vulputate. Enim ut tellus elementum sagittis vitae
              et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
              Elementum integer enim neque volutpat ac tincidunt vitae. Id leo
              in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu
              dui vivamus arcu felis. Suspendisse in est ante in. Ut enim
              blandit volutpat maecenas volutpat blandit aliquam etiam. Elit
              eget gravida cum sociis natoque. Aliquet porttitor lacus luctus
              accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse
              sed. Fermentum posuere urna nec tincidunt praesent semper feugiat
              nibh. Ac turpis egestas integer eget aliquet.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
              Velit aliquet sagittis id consectetur purus ut faucibus. Lorem
              dolor sed viverra ipsum. Facilisis gravida neque convallis a cras.
              Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat
              pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris
              in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui
              sapien eget mi proin sed libero. Convallis a cras semper auctor
              neque vitae tempus quam. Netus et malesuada fames ac turpis
              egestas. Morbi enim nunc faucibus a pellentesque sit amet
              porttitor. Suspendisse potenti nullam ac tortor vitae. Blandit
              volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor
              urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend
              donec pretium vulputate. Enim ut tellus elementum sagittis vitae
              et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
              Elementum integer enim neque volutpat ac tincidunt vitae. Id leo
              in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu
              dui vivamus arcu felis. Suspendisse in est ante in. Ut enim
              blandit volutpat maecenas volutpat blandit aliquam etiam. Elit
              eget gravida cum sociis natoque. Aliquet porttitor lacus luctus
              accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse
              sed. Fermentum posuere urna nec tincidunt praesent semper feugiat
              nibh. Ac turpis egestas integer eget aliquet.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
              Velit aliquet sagittis id consectetur purus ut faucibus. Lorem
              dolor sed viverra ipsum. Facilisis gravida neque convallis a cras.
              Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat
              pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris
              in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui
              sapien eget mi proin sed libero. Convallis a cras semper auctor
              neque vitae tempus quam. Netus et malesuada fames ac turpis
              egestas. Morbi enim nunc faucibus a pellentesque sit amet
              porttitor. Suspendisse potenti nullam ac tortor vitae. Blandit
              volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor
              urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend
              donec pretium vulputate. Enim ut tellus elementum sagittis vitae
              et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
              Elementum integer enim neque volutpat ac tincidunt vitae. Id leo
              in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu
              dui vivamus arcu felis. Suspendisse in est ante in. Ut enim
              blandit volutpat maecenas volutpat blandit aliquam etiam. Elit
              eget gravida cum sociis natoque. Aliquet porttitor lacus luctus
              accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse
              sed. Fermentum posuere urna nec tincidunt praesent semper feugiat
              nibh. Ac turpis egestas integer eget aliquet.
            </li>
            <li>
              Lorem ipsum purus in mollis nunc sed id semper. Suspendisse
              faucibus interdum posuere lorem ipsum. Dictum non consectetur a
              erat. Risus nullam eget felis eget nunc lobortis mattis aliquam
              faucibus. Sed adipiscing diam donec adipiscing tristique risus nec
              feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum
              mattis. In nibh mauris cursus mattis molestie a iaculis at erat.
              Velit aliquet sagittis id consectetur purus ut faucibus. Lorem
              dolor sed viverra ipsum. Facilisis gravida neque convallis a cras.
              Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat
              pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris
              in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui
              sapien eget mi proin sed libero. Convallis a cras semper auctor
              neque vitae tempus quam. Netus et malesuada fames ac turpis
              egestas. Morbi enim nunc faucibus a pellentesque sit amet
              porttitor. Suspendisse potenti nullam ac tortor vitae. Blandit
              volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor
              urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend
              donec pretium vulputate. Enim ut tellus elementum sagittis vitae
              et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
              Elementum integer enim neque volutpat ac tincidunt vitae. Id leo
              in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu
              dui vivamus arcu felis. Suspendisse in est ante in. Ut enim
              blandit volutpat maecenas volutpat blandit aliquam etiam. Elit
              eget gravida cum sociis natoque. Aliquet porttitor lacus luctus
              accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse
              sed. Fermentum posuere urna nec tincidunt praesent semper feugiat
              nibh. Ac turpis egestas integer eget aliquet.
            </li>
          </ul>
        </div>*/}
      </main>
    </div>
  );
}
