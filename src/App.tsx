function App() {
  return (
    <main className="relative grid min-h-full grid-cols-1 justify-stretch border-cyan-900 bg-cyan-900 md:grid-cols-[minmax(0,300px)_1fr] md:rounded-lg md:border">
      <aside className="fixed top-0 right-0 left-0 bg-cyan-950 p-2 md:relative md:right-auto md:rounded-lg md:px-0 md:py-4">
        <div className="flex items-center gap-3 md:flex-col">
          <div className="grid aspect-square w-14 place-content-center place-items-center rounded-full border-2 border-b-0 border-teal-600 md:w-32">
            <img
              src="/img/me.png"
              alt="Osmanys Fuentes Lomba - Web Developer"
              className="aspect-square w-12 rounded-full object-cover object-[-10%_-10%] md:w-28"
            />
          </div>
          <div className="md:space-y-1 md:text-center">
            <h1 className="text-lg md:text-xl">Osmanys Fuentes</h1>
            <h2 className="font-mono text-xs text-teal-300 uppercase md:text-sm">
              Web developer
            </h2>
          </div>
        </div>
        <nav className="sticky top-0 mt-2 md:mt-5">
          <ul className="flex shadow-cyan-800 md:block md:shadow-[shadow:0_1px_0_0_inset]">
            <li className="shadow-[shadow:-1px_0_0_0_inset] shadow-cyan-800 hover:bg-cyan-900 md:shadow-[shadow:0_-1px_0_0_inset]">
              <a
                href="#about"
                className="inline-block h-full w-full px-2 py-1 hover:text-teal-200 md:px-3 md:py-2"
              >
                About
              </a>
            </li>
            <li className="shadow-[shadow:-1px_0_0_0_inset] shadow-cyan-800 hover:bg-cyan-900 md:shadow-[shadow:0_-1px_0_0_inset]">
              <a
                href="#experience"
                className="inline-block h-full w-full px-2 py-1 hover:text-teal-200 md:px-3 md:py-2"
              >
                Experience
              </a>
            </li>
            <li className="shadow-[shadow:-1px_0_0_0_inset] shadow-cyan-800 hover:bg-cyan-900 md:shadow-[shadow:0_-1px_0_0_inset]">
              <a
                href="#projects"
                className="inline-block h-full w-full px-2 py-1 hover:text-teal-200 md:px-3 md:py-2"
              >
                Projects
              </a>
            </li>
            <li className="shadow-cyan-800 hover:bg-cyan-900 md:shadow-[shadow:0_-1px_0_0_inset]">
              <a
                href="#contact"
                className="inline-block h-full w-full px-2 py-1 hover:text-teal-200 md:px-3 md:py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="mt-28 rounded-r-lg p-4 md:mt-0">
        <article id="about" className="space-y-3">
          <h3 className="mb-5 border-b font-mono text-lg font-bold text-teal-400 uppercase">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
            atque autem consectetur consequatur consequuntur culpa cupiditate
            debitis dolore doloremque eius error et explicabo facere facilis hic
            id illum laborum magnam minus modi mollitia nemo nesciunt nihil nisi
            numquam officia officiis quas quasi quod reiciendis rem saepe
            sapiente, tempora ullam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi at, commodi consectetur consequuntur et in, iure
            minima modi molestias nesciunt, numquam quae quos ratione
            repellendus tempore vitae voluptas? Accusantium!
          </p>
          <p className="font-mono text-xs text-neutral-300 uppercase">
            React, Redux, NextJS, api integration, advanced form validation,
            routing, single page applications
          </p>
        </article>
        <article id="experience" className="space-y-3">
          <h3 className="mb-5 border-b font-mono text-lg font-bold text-teal-400 uppercase">
            Experience
          </h3>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              architecto asperiores aut culpa cupiditate dignissimos dolore ea
              earum est et excepturi harum hic in minima molestiae natus
              nesciunt nisi, nostrum officiis provident reiciendis vitae
              voluptas. Ex, quae.
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              Hic impedit inventore laudantium minus molestias obcaecati
              perferendis ratione rerum sit soluta! Accusamus architecto commodi
              consectetur consequatur consequuntur dolorem ea eos, ex expedita
              facilis, incidunt iusto nam necessitatibus optio possimus quas
              reiciendis rem repellat reprehenderit vel voluptatibus!
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              Ab aliquam, autem cumque dolor dolorum eius enim, fugiat ipsam
              itaque iusto maiores necessitatibus nobis, perferendis
              reprehenderit sapiente sint vitae voluptate! A cupiditate deleniti
              error ex ipsam molestiae necessitatibus perspiciatis quas
              repellendus temporibus. Autem expedita laborum tempore!
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              Ad at atque deserunt eos error hic laudantium nesciunt quidem,
              temporibus ullam unde voluptatibus, voluptatum. Aliquam aspernatur
              at atque dignissimos doloribus ex exercitationem harum hic iure
              laudantium molestiae nesciunt, officia omnis, perspiciatis, sequi
              suscipit unde veniam? Rerum.
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              A accusantium asperiores aspernatur assumenda cum cumque dolorem
              excepturi expedita facilis harum, hic impedit modi neque, nobis
              officia, officiis perspiciatis quae qui sint sunt? Ad eius eos
              fuga impedit ipsam iusto nihil non officiis reiciendis, rem vitae.
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              Alias at delectus dolore eligendi expedita, fuga hic id ipsam
              ipsum laborum magnam minima nam neque nihil officiis provident qui
              tenetur unde voluptate voluptatem. At cupiditate dignissimos
              dolore error, est illo inventore minima, quas tenetur voluptas
              voluptatibus?
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              At commodi consequuntur, cupiditate dolorem eos eum illo in itaque
              laudantium minus modi nisi pariatur placeat possimus quidem
              similique totam voluptates, voluptatum? Ab deleniti, deserunt
              ducimus eos eveniet laudantium mollitia optio quia quibusdam,
              sapiente tempore totam voluptates.
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              Accusantium cupiditate dolorum fuga odit provident, quae sunt vero
              voluptatum. Aspernatur assumenda atque consequuntur, corporis
              delectus dignissimos dolores doloribus, eaque eius enim error esse
              eum exercitationem fugit ipsa ipsum minus nisi nobis quas quo sit
              veritatis voluptatibus!
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
            <li>
              Consectetur, consequuntur dolores eaque enim explicabo ipsa iure
              modi nisi placeat ratione rerum voluptate. Corporis deserunt,
              facere ipsa ipsam nemo soluta? Beatae, dignissimos est eum iure
              magni non perferendis vel veniam. Eos facere fuga quidem sed
              suscipit.
              <p className="font-mono text-xs text-neutral-300 uppercase">
                React, Redux, NextJS, api integration, advanced form validation,
                routing, single page applications
              </p>
            </li>
          </ul>
        </article>
        <article id="projects" className="space-y-3">
          <h3 className="mb-5 border-b font-mono text-lg font-bold text-teal-400 uppercase">
            Resume
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
            atque autem consectetur consequatur consequuntur culpa cupiditate
            debitis dolore doloremque eius error et explicabo facere facilis hic
            id illum laborum magnam minus modi mollitia nemo nesciunt nihil nisi
            numquam officia officiis quas quasi quod reiciendis rem saepe
            sapiente, tempora ullam!
          </p>
          <p className="font-mono text-xs text-neutral-300 uppercase">
            React, Redux, NextJS, api integration, advanced form validation,
            routing, single page applications
          </p>
        </article>
        <article id="contact" className="space-y-3">
          <h3 className="mb-5 border-b font-mono text-lg font-bold text-teal-400 uppercase">
            Resume
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
            atque autem consectetur consequatur consequuntur culpa cupiditate
            debitis dolore doloremque eius error et explicabo facere facilis hic
            id illum laborum magnam minus modi mollitia nemo nesciunt nihil nisi
            numquam officia officiis quas quasi quod reiciendis rem saepe
            sapiente, tempora ullam!
          </p>
          <p className="font-mono text-xs text-neutral-300 uppercase">
            React, Redux, NextJS, api integration, advanced form validation,
            routing, single page applications
          </p>
        </article>
      </section>
    </main>
  );
}

export default App;
