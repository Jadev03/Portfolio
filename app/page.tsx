export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25)_0,_transparent_55%)]" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-10 md:py-16">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300 ring-1 ring-sky-500/40 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              Computer Science & Engineering Undergraduate
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Sathiendra Thabendra
                </span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                I&apos;m an undergraduate at the{" "}
                <span className="font-semibold text-sky-300">
                  University of Moratuwa
                </span>{" "}
                passionate about building elegant, high-impact software
                solutions. I love combining solid engineering fundamentals with
                clean, modern UI design.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.45)] transition hover:bg-sky-400"
              >
                View projects
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-sky-400/80 hover:text-sky-100"
              >
                Contact me
              </a>
            </div>
          </div>

          <aside className="w-full max-w-sm rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-[0_18px_80px_rgba(15,23,42,0.9)] backdrop-blur md:p-6">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-100">
                Quick Info
              </h2>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                Open to opportunities
              </span>
            </div>

            <dl className="space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Name
                </dt>
                <dd className="text-slate-100">
                  Sathiendra Thabendra
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </dt>
                <dd className="text-slate-100">+94 76 241 2023</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </dt>
                <dd className="text-slate-100">
                  <a
                    href="mailto:sathiendra.21@cse.mrt.ac.lk"
                    className="underline-offset-2 hover:underline"
                  >
                    sathiendra.21@cse.mrt.ac.lk
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Location
                </dt>
                <dd className="text-slate-100">
                  No 82/1, St. Benedict&apos;s Road, Jaffna
                </dd>
              </div>
            </dl>

            <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-700/80 to-transparent" />

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <a
                href="https://linkedin.com/in/sathiendra-thabendra-0467682b2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-600/70 bg-slate-900/40 px-3 py-1.5 font-medium text-slate-100 transition hover:border-sky-400/90 hover:text-sky-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Jadev03"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-600/70 bg-slate-900/40 px-3 py-1.5 font-medium text-slate-100 transition hover:border-sky-400/90 hover:text-sky-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                GitHub
              </a>
            </div>
          </aside>
        </header>

        <section
          id="about"
          className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]"
        >
          <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/50 p-5 sm:p-6 backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              About
            </h2>
            <p className="text-sm text-slate-200 sm:text-[15px] leading-relaxed">
              I&apos;m currently pursuing my{" "}
              <span className="font-semibold text-sky-300">
                B.Sc. Engineering (Hons) in Computer Science and Engineering
              </span>{" "}
              at the University of Moratuwa. I enjoy solving complex problems,
              exploring system-level design, and building full-stack
              applications that feel polished and intuitive.
            </p>
            <p className="text-sm text-slate-300 sm:text-[15px] leading-relaxed">
              My academic background includes strong performance in mathematics
              and physical sciences, and I&apos;m continuously sharpening my
              skills in areas like algorithms, backend development, and modern
              web technologies.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-sky-500/40">
                Problem Solving
              </span>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-500/40">
                Full-stack Development
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-500/40">
                Clean UI/UX
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Education
              </h2>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-100">
                    University of Moratuwa
                  </p>
                  <p className="text-slate-300">
                    B.Sc. Engineering (Hons) in Computer Science and
                    Engineering
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Undergraduate &mdash; Department of Computer Science and
                    Engineering
                  </p>
                </div>
                <div className="h-px bg-slate-800/90" />
                <div>
                  <p className="font-semibold text-slate-100">
                    St. John&apos;s College, Jaffna
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-slate-300">
                    <li>GCE Ordinary Level: 7A, 1B, 1C (2017)</li>
                    <li>
                      GCE Advanced Level: 3A (Physical Science Stream) &mdash;
                      District Rank 28 (2020)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5 text-sm backdrop-blur sm:p-6 md:grid-cols-2"
        >
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Skills
            </h2>
            <p className="text-xs text-slate-300 sm:text-[13px]">
              A snapshot of the tools and technologies I&apos;m most comfortable
              with, across programming, mobile, web, and data.
            </p>
          </div>

          <div className="grid gap-3 text-xs sm:grid-cols-2">
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">
                Programming Languages
              </p>
              <p className="text-slate-300">
                Java, Python, JavaScript, C++, Dart
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">
                Mobile Technologies
              </p>
              <p className="text-slate-300">Flutter, React Native</p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">
                Front-End Technologies
              </p>
              <p className="text-slate-300">React</p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">Web Development</p>
              <p className="text-slate-300">
                HTML, CSS, Bootstrap, Node.js, Express.js, Next.js, Nest.js,
                Spring Boot
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">Database</p>
              <p className="text-slate-300">MySQL, PostgreSQL</p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">
                Cloud Technologies
              </p>
              <p className="text-slate-300">AWS</p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-slate-100">Version Control</p>
              <p className="text-slate-300">Git, GitHub</p>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 text-sm backdrop-blur sm:p-6"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Experience
              </h2>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                  Jan 2025 – Jul 2025
                </p>
                <p className="text-base font-semibold text-slate-50">
                  Software Engineering Intern &middot; Liziris
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-start gap-3 text-xs md:mt-0">
              <div className="mt-1 h-10 w-px bg-gradient-to-b from-sky-400/70 via-slate-600/60 to-transparent md:block" />
              <div className="space-y-2 text-slate-200">
                <ul className="space-y-1.5">
                  <li className="leading-relaxed">
                    Full-stack development of a loyalty food ordering
                    application, including database design and
                    backend/frontend implementation.
                  </li>
                  <li className="leading-relaxed">
                    Worked on <span className="font-medium">Gidz Uni Path</span>, a
                    university pathway portal, handling full-stack web
                    development, client communication, and long-term
                    maintenance.
                  </li>
                  <li className="leading-relaxed">
                    Built the MVP of <span className="font-medium">CodeDemo</span>,
                    implementing a real-time code editor, compiler integration,
                    and authentication for seamless interactive coding.
                  </li>
                  <li className="leading-relaxed">
                    Maintained and enhanced the <span className="font-medium">EziChoice</span>{" "}
                    e-commerce platform (web and mobile), developing new
                    features and fixing production issues across both web and
                    Android/iOS applications.
                  </li>
                </ul>

                <p className="pt-1 text-[11px] text-slate-300">
                  Technologies: JavaScript, TypeScript, React, Next.js, Flutter,
                  Supabase, PostgreSQL, Docker
                </p>

                <a
                  href="https://drive.google.com/file/d/16yX3PT8ZONlEfv_1ADi-1mmLt6Ochk6h/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-3 py-1.5 text-[11px] font-medium text-sky-200 ring-1 ring-sky-500/40 transition hover:bg-sky-500/20 hover:text-sky-50"
                >
                  View Service Letter
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Featured Projects
            </h2>
            <a
              href="https://github.com/Jadev03"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline"
            >
              View all on GitHub
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="group rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm shadow-[0_18px_70px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-sky-400/80 hover:bg-slate-900/80">
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-semibold text-slate-50">
                    Enhancing ASR for Tamil–English Code-Switching
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Research &amp; Development Project &middot; Jul 2025 – Present
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Conducting research to improve ASR for Tamil–English
                    code-switching speech, including literature review, data
                    collection from multiple real-world sources, and preparing
                    annotated datasets and evaluation plans (e.g., WER).
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Internal research project (no public repository yet).
              </p>
            </div>

            <a
              href="https://github.com/SivaNiroshan/sparta_backend"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm shadow-[0_18px_70px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-sky-400/80 hover:bg-slate-900/80"
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-semibold text-slate-50">
                    Sparta Video Storage &amp; Streaming Education Platform
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Personal Project &middot; Oct 2025 – Present
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Microservices-based educational video streaming platform
                    with secure JWT authentication, resumable uploads, and
                    scalable processing pipelines for large video content.
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-300">
                Tech Stack: React.js, Nest.js, Spring Boot, PostgreSQL, MongoDB,
                AWS S3, RabbitMQ
              </p>
              <p className="mt-2 inline-flex items-center text-xs font-medium text-sky-300">
                View backend on GitHub
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </p>
            </a>

            <a
              href="https://github.com/Medical-Care-Management-System"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm shadow-[0_18px_70px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-sky-400/80 hover:bg-slate-900/80"
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-semibold text-slate-50">
                    Real-Time Medical Care Management System
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Semester 5 Project &middot; Jul 2024 – Nov 2024
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Real-time medical care management platform connecting
                    patients, doctors, and administrators with appointment
                    booking, feedback, queue management, and role-based
                    dashboards.
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-300">
                Tech Stack: Flutter, Django, Django REST Framework, PostgreSQL
              </p>
              <p className="mt-2 inline-flex items-center text-xs font-medium text-sky-300">
                View organization on GitHub
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </p>
            </a>

            <a
              href="https://github.com/Jadev03/HR-Management-System"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm shadow-[0_18px_70px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-sky-400/80 hover:bg-slate-900/80"
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-semibold text-slate-50">
                    HR Management System – Jupiter Apparels
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Semester 3 Project &middot; Jul 2023 – Nov 2023
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Web-based HR management system with employee and leave
                    management, front-end features for Level 1 employees, and
                    robust backend APIs with a carefully designed MySQL schema.
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-300">
                Tech Stack: React.js, Node.js, Express.js, MySQL
              </p>
              <p className="mt-2 inline-flex items-center text-xs font-medium text-sky-300">
                View on GitHub
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </p>
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="mt-2 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 text-sm backdrop-blur sm:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Contact
              </h2>
              <p className="mt-2 max-w-xl text-xs text-slate-300 sm:text-[13px]">
                Whether it&apos;s an internship, research collaboration, or a
                software project, I&apos;d be happy to connect and explore how
                we can work together.
              </p>
            </div>
            <div className="space-y-1 text-xs text-slate-200">
              <p>
                Email:{" "}
                <a
                  href="mailto:sathiendra.21@cse.mrt.ac.lk"
                  className="font-medium text-sky-300 underline-offset-2 hover:underline"
                >
                  sathiendra.21@cse.mrt.ac.lk
                </a>
              </p>
              <p>Phone: +94 76 241 2023</p>
            </div>
          </div>
        </section>

        <footer className="pb-4 pt-2 text-center text-[11px] text-slate-500">
          © 2025 Sathiendra Thabendra. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
