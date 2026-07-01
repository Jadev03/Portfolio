"use client";

import { useEffect, useState } from "react";

const CV_PATH = "/Thabendra.pdf";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) {
        return;
      }

      const offsetY = window.scrollY + 120;
      let current = sections[0].id;

      for (const section of sections) {
        if (offsetY >= section.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleCvDownload = () => {
    const confirmed = window.confirm("Do you want to download my CV?");
    if (!confirmed) {
      return;
    }

    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = "Thabendra.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSending(true);
    setFormStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setFormStatus(data.error || "Failed to send message. Please try again.");
        return;
      }

      setFormStatus("");
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setFormStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.08),transparent_35%),radial-gradient(circle_at_85%_12%,rgba(249,115,22,0.06),transparent_35%)]" />

      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-3 sm:px-7 md:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold tracking-wide text-slate-900">
              Thabendra Sathiendra
            </p>

            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-sky-100 text-sky-800"
                      : "text-slate-700 hover:bg-slate-100 hover:text-sky-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <button
                type="button"
                onClick={handleCvDownload}
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
                  <path d="M14 2v5h5" />
                  <path d="M12 11v6" />
                  <path d="m9.5 14.5 2.5 2.5 2.5-2.5" />
                </svg>
                CV
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-7 md:px-10">

        <section
          id="home"
          className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid items-start gap-8 md:grid-cols-[1.4fr_1fr] md:gap-10">
            <div className="space-y-6">
              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                Thabendra Sathiendra
              </h1>

              <div className="space-y-2 text-slate-700">
                <p className="text-lg font-medium text-slate-900">
                  Software Engineer
                </p>
                <p className="text-xs text-slate-900 sm:text-sm">
                  Department of Computer Science and Engineering
                </p>
                <p className="text-xs text-slate-900 sm:text-sm">
                  University of Moratuwa, Colombo, Sri Lanka
                </p>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                I am a Software Engineer passionate about designing and
                developing scalable SaaS platforms, web applications, and
                mobile applications. I applying Software Development Life Cycle
                (SDLC) best practices, cloud technologies, DevOps principles,
                and CI/CD to build secure, reliable, and production ready
                software that delivers lasting value.
              </p>

            </div>

            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <img
                src="/project-images/Portfolio%20image.png"
                alt="Thabendra Sathiendra profile"
                className="h-64 w-full rounded-2xl bg-slate-100 object-contain object-top scale-105"
              />

              <div className="mt-5 space-y-3 text-sm">
                <p className="text-base font-semibold text-slate-900">
                  Thabendra Sathiendra
                </p>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-sky-300 bg-sky-200 text-sky-900">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6h16v12H4z" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </span>
                    <a
                      href="mailto:sathiendrathabendra@gmail.com"
                      className="text-slate-900 hover:text-sky-700"
                    >
                      sathiendrathabendra@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300 bg-emerald-200 text-emerald-900">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.1 9.7a16 16 0 0 0 6.2 6.2l1.25-1.24a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <span>+94 76 241 2023</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-orange-300 bg-orange-200 text-orange-900">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 21s-7-4.35-7-11a7 7 0 1 1 14 0c0 6.65-7 11-7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>
                    <span>Jaffna, Sri Lanka</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="experience"
          className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-slate-900">Experience</h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Software Engineer Intern
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-600">
                  Liziris
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                Jan 2025 - Jul 2025
              </p>
            </div>

            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:text-sky-600">
              <li>
                Developed backend APIs and full-stack features for production
                web platforms, including authentication, authorization, cart,
                ordering, and payment workflows.
              </li>
              <li>
                Improved communication modules by implementing pagination and
                fixing message retrieval reliability issues between users and
                administrators.
              </li>
              <li>
                Resolved search and routing issues and optimized paginated data
                listings to improve discoverability and application performance.
              </li>
              <li>
                Integrated secure login flows and interactive coding features,
                then optimized execution requests with timeout handling to
                improve responsiveness.
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-sky-300 bg-sky-200 px-3 py-1 text-xs font-semibold text-sky-900">
                Node.js
              </span>
              <span className="rounded-full border border-cyan-300 bg-cyan-200 px-3 py-1 text-xs font-semibold text-cyan-900">
                React.js
              </span>
              <span className="rounded-full border border-blue-300 bg-blue-200 px-3 py-1 text-xs font-semibold text-blue-900">
                Next.js
              </span>
              <span className="rounded-full border border-indigo-300 bg-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-900">
                Express.js
              </span>
              <span className="rounded-full border border-emerald-300 bg-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-900">
                REST APIs
              </span>
              <span className="rounded-full border border-orange-300 bg-orange-200 px-3 py-1 text-xs font-semibold text-orange-900">
                PostgreSQL
              </span>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-slate-900">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-900">
                Full Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <article className="w-full rounded-2xl border border-slate-200 bg-white p-5 md:w-[calc(50%-0.5rem)]">
                  <img
                    src="/project-images/Sparta%20cover.png"
                    alt="Sparta Education Platform visual"
                    className="mb-4 h-44 w-full rounded-xl object-cover"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-base font-semibold text-slate-900">
                      Sparta Education Platform
                    </h4>
                    <a
                      href="https://github.com/Jadev03/Sparta"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
                      aria-label="Open Sparta repository"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.22a11.43 11.43 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.67.24 2.9.12 3.2.77.83 1.24 1.9 1.24 3.2 0 4.62-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    An educational streaming project centered on
                    scalable video delivery, combining secure access control,
                    asynchronous media processing, and reliable
                    inter service communication.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-300 bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                      React.js
                    </span>
                    <span className="rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      Spring Boot
                    </span>
                    <span className="rounded-full border border-green-300 bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      MongoDB
                    </span>
                    <span className="rounded-full border border-orange-300 bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
                      AWS S3
                    </span>
                    <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                      RabbitMQ
                    </span>
                    <span className="rounded-full border border-violet-300 bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
                      gRPC
                    </span>
                    <span className="rounded-full border border-rose-300 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800">
                      Redis
                    </span>
                  </div>
                </article>

                <article className="w-full rounded-2xl border border-slate-200 bg-white p-5 md:w-[calc(50%-0.5rem)]">
                  <img
                    src="/project-images/medical%20care%20%20cover.png"
                    alt="Medical Care System visual"
                    className="mb-4 h-44 w-full rounded-xl object-cover"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-base font-semibold text-slate-900">
                      Medical Care System
                    </h4>
                    <a
                      href="https://github.com/Medical-Care-Management-System"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
                      aria-label="Open Medical Care Management System repository"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.22a11.43 11.43 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.67.24 2.9.12 3.2.77.83 1.24 1.9 1.24 3.2 0 4.62-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    A healthcare project centered on digital care
                    coordination, combining appointment handling, queue
                    management, role based access, and structured medical
                    workflows.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-300 bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                      React.js
                    </span>
                    <span className="rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                      Node.js
                    </span>
                    <span className="rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                      Express.js
                    </span>
                    <span className="rounded-full border border-orange-300 bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
                      PostgreSQL
                    </span>
                    <span className="rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      REST APIs
                    </span>
                  </div>
                </article>

                <article className="w-full rounded-2xl border border-slate-200 bg-white p-5 md:w-[calc(50%-0.5rem)]">
                  <img
                    src="/project-images/HR%20management%20system%20cover.png"
                    alt="HR Management System visual"
                    className="mb-4 h-44 w-full rounded-xl object-cover"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-base font-semibold text-slate-900">
                      HR Management System
                    </h4>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://hr-management-system.sathiendrathabendra.workers.dev/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
                        aria-label="Open HR Management System deployed site"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M14 3h7v7" />
                          <path d="M10 14 21 3" />
                          <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/Jadev03/HR-Management-System"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
                        aria-label="Open HR Management System repository"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.22a11.43 11.43 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.67.24 2.9.12 3.2.77.83 1.24 1.9 1.24 3.2 0 4.62-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    An HR project centered on workforce operations,
                    combining employee records, profile workflows, leave
                    management, and integrated backend services on a relational
                    data model, with Docker based containerization and CI/CD
                    automation for consistent delivery.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-300 bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                      React.js
                    </span>
                    <span className="rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                      Node.js
                    </span>
                    <span className="rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                      Express.js
                    </span>
                    <span className="rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                      MySQL
                    </span>
                    <span className="rounded-full border border-rose-300 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800">
                      Docker
                    </span>
                    <span className="rounded-full border border-teal-300 bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                      CI/CD
                    </span>
                  </div>
                </article>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-900">
                Research and Development
              </h3>
              <div className="flex justify-center">
                <article className="w-full rounded-2xl border border-slate-200 bg-white p-5 md:w-[calc(50%-0.5rem)]">
                  <img
                    src="/project-images/ASR%20cover%20image.png"
                    alt="ASR Tamil-English research visual"
                    className="mb-4 h-44 w-full rounded-xl object-cover"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-base font-semibold text-slate-900">
                      Enhancing ASR for Tamil-English Code Switching
                    </h4>
                    <a
                      href="https://github.com/Jadev03/Enhanced-ASR-for-Tamil-English-code-switching-with-Morphological-suffix"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
                      aria-label="Open ASR research repository"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.22a11.43 11.43 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.67.24 2.9.12 3.2.77.83 1.24 1.9 1.24 3.2 0 4.62-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    A speech recognition research project centered on Tamil-English
                    code-switched transcription, combining model fine tuning and
                    multi stage correction pipelines to improve mixed-language
                    recognition quality.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-violet-300 bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
                      Whisper
                    </span>
                    <span className="rounded-full border border-fuchsia-300 bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">
                      LoRA
                    </span>
                    <span className="rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">
                      XLM-R
                    </span>
                    <span className="rounded-full border border-pink-300 bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-800">
                      mT5
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-slate-900">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                Programming Languages
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Java, Python, JavaScript, C++, Dart
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                Frontend Development
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                React.js, Next.js, HTML, CSS, Bootstrap, Flutter
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                Backend Development
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Node.js, Express.js, Spring Boot, REST APIs
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                Databases
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                PostgreSQL, MySQL, MongoDB, Redis
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                Cloud and DevOps
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Docker, AWS S3, RabbitMQ, Git, GitHub, CI/CD, GitHub Actions
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                Professional Skills
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Problem Solving, Communication, Team Collaboration, Adaptability
              </p>
            </article>
          </div>
        </section>

        <section
          id="education"
          className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-slate-900">Education</h2>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-base font-semibold text-slate-900">
                University of Moratuwa
              </p>
              <p>B.Sc. Engineering (Hons) in Computer Science and Engineering</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-base font-semibold text-slate-900">
                St. John&apos;s College, Jaffna
              </p>
              <p>GCE A/L Physical Science Stream</p>
            </div>
          </div>
        </section>

        <section
          id="certification"
          className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-slate-900">
            Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Certification
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">Python Basic</h3>
              <a
                href="https://www.hackerrank.com/certificates/4edea6fe2390"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex text-sm font-medium text-sky-300 transition hover:text-sky-200"
              >
                Open Credential ↗
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Certification
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">Java Basic</h3>
              <a
                href="https://www.hackerrank.com/certificates/255be3d3ead4"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex text-sm font-medium text-sky-300 transition hover:text-sky-200"
              >
                Open Credential ↗
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Certification
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                AWS Cloud Practitioner Essentials
              </h3>
              <a
                href="https://drive.google.com/file/d/19WjlgvlyCJSlaFRnP-m5X-xK6grFNrmg/view"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex text-sm font-medium text-sky-300 transition hover:text-sky-200"
              >
                Open Credential ↗
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Certification
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Generative AI for Software Development
              </h3>
              <a
                href="https://drive.google.com/file/d/1E0-Kc4s8M88_kRrQAmXtY3A4NeptpbTa/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex text-sm font-medium text-sky-300 transition hover:text-sky-200"
              >
                Open Credential ↗
              </a>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-slate-900">Contact</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="mb-4 text-sm text-slate-700">
                Feel free to reach out through any channel below.
              </p>
              <ul className="space-y-4 text-sm text-slate-800">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-300 bg-sky-200 text-sky-900">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <a href="mailto:sathiendrathabendra@gmail.com" className="hover:text-sky-300">
                    sathiendrathabendra@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300 bg-emerald-200 text-emerald-900">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.1 9.7a16 16 0 0 0 6.2 6.2l1.25-1.24a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>+94 76 241 2023</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 bg-cyan-200 text-cyan-900">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.98 0h4.79v2.2h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 6 3.33 6 7.66V24h-5v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V24h-5V8z" />
                    </svg>
                  </span>
                  <a
                    href="https://linkedin.com/in/sathiendra-thabendra-0467682b2"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-sky-300"
                  >
                    linkedin.com/in/sathiendra-thabendra-0467682b2
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-violet-300 bg-violet-200 text-violet-900">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.22a11.43 11.43 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.67.24 2.9.12 3.2.77.83 1.24 1.9 1.24 3.2 0 4.62-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                    </svg>
                  </span>
                  <a
                    href="https://github.com/Jadev03"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-sky-300"
                  >
                    github.com/Jadev03
                  </a>
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Send Message</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
                {formStatus ? (
                  <p className="text-xs text-rose-300">{formStatus}</p>
                ) : null}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
