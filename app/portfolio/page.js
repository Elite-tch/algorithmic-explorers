import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-white text-[#10284F]">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[580px] overflow-hidden bg-[#F9FAFF]">
        {/* Background Decorations */}
        <div className="absolute -left-20 -top-16 -z-10 h-56 w-56 rounded-full bg-[#B9D8FF]/70 blur-[2px]" />

        <div className="absolute right-[22%] top-16 -z-10 h-64 w-64 rounded-full bg-[#FFD3AD]/80" />

        <div className="absolute right-[-100px] top-20 -z-10 h-72 w-72 rounded-full bg-[#D8D4FF]/70" />

        <div className="absolute bottom-[-100px] left-[35%] -z-10 h-64 w-64 rounded-full bg-[#DCEBFF]/60 blur-sm" />

        {/* Hero Content */}
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:py-20 lg:grid-cols-2 lg:gap-8 lg:px-12">
          {/* Left Side: Text */}
          <div className="relative z-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#6689D8]">
              Our Portfolio
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#10284F] sm:text-5xl lg:text-6xl">
              Ideas turned into{" "}
              <span className="text-[#F39A70]">real-world impact.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#66758F] sm:text-lg">
              We build digital products and solutions for clients, communities
              and real-world problems using modern technology.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#10284F] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#10284F]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#1A3A70]"
              >
                Explore Our Services
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#9AAAC3] bg-white/80 px-7 py-4 text-sm font-semibold text-[#10284F] transition duration-300 hover:-translate-y-1 hover:border-[#10284F] hover:bg-white"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Right Side: Laptop and Phone Mockup */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Decorative Circle */}
            <div className="absolute left-[15%] top-[5%] -z-10 h-56 w-56 rounded-full bg-[#FFD3AD]/70 sm:h-72 sm:w-72" />

            {/* Mockup Image */}
            <div className="relative mx-auto aspect-[5/4] w-full">
              <Image
                src="/portfolio-hero-transparent.png"
                alt="Laptop and smartphone mockup"
                width={800}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Temporary target for the Explore All Projects button */}
      <section id="projects" className="scroll-mt-24">
        {/* We'll build the statistics and project cards here next. */}
      </section>
      {/* Statistics Section */}
      <section className="bg-white px-6 py-8 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 rounded-2xl bg-[#F7F8FF] p-5 sm:grid-cols-3 sm:gap-0 sm:p-6">
          {/* Projects Completed */}
          <div className="flex items-center justify-center gap-4 py-4 sm:border-r sm:border-[#DDE3F0]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E9E5FF] text-2xl">
              📁
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#10284F]">20+</h2>
              <p className="text-sm text-[#66758F]">Projects Completed</p>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="flex items-center justify-center gap-4 py-4 sm:border-r sm:border-[#DDE3F0]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE6D3] text-2xl">
              👥
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#10284F]">10+</h2>
              <p className="text-sm text-[#66758F]">Happy Clients</p>
            </div>
          </div>

          {/* Industries Served */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DCEBFF] text-2xl">
              📊
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#10284F]">5+</h2>
              <p className="text-sm text-[#66758F]">Industries Served</p>
            </div>
          </div>
        </div>
      </section>
      ;{/* Projects Section */}
      <section id="projects" className="bg-white px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#6689D8]">
                Our Work
              </p>

              <h2 className="text-3xl font-bold text-[#10284F] sm:text-4xl">
                A glimpse of our work
              </h2>

              <p className="mt-3 max-w-xl text-base leading-7 text-[#66758F]">
                Explore some of the digital solutions and ideas we have been
                working on.
              </p>
            </div>

            <Link
              href="/contact"
              className="text-sm font-semibold text-[#10284F] hover:text-[#6689D8]"
            >
              Have a project in mind? Let's talk →
            </Link>
          </div>

          {/* Project Cards */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* LearnHub */}
            <article className="overflow-hidden rounded-2xl border border-[#E5EAF3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Project Image */}
              <div className="relative h-52">
                <Image
                  src="/learnhub.png"
                  alt="LearnHub project preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#E9E5FF] px-3 py-1 text-xs font-medium text-[#5145A5]">
                    Education
                  </span>
                  <span className="rounded-full bg-[#DCEBFF] px-3 py-1 text-xs font-medium text-[#2856A6]">
                    Web
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#10284F]">LearnHub</h3>

                <p className="mt-3 text-sm leading-6 text-[#66758F]">
                  A learning platform that helps students access courses,
                  learning materials and educational resources in one place.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#10284F]">
                    View Project
                  </span>
                  <span className="text-lg text-[#6689D8]">→</span>
                </div>
              </div>
            </article>

            {/* FinTrack */}
            <article className="overflow-hidden rounded-2xl border border-[#E5EAF3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Project Image */}
              <div className="relative h-52">
                <Image
                  src="/fintrack.png"
                  alt="FinTrack project preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#DCEBFF] px-3 py-1 text-xs font-medium text-[#2856A6]">
                    Fintech
                  </span>
                  <span className="rounded-full bg-[#FFE6D3] px-3 py-1 text-xs font-medium text-[#9A542D]">
                    Web
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#10284F]">FinTrack</h3>

                <p className="mt-3 text-sm leading-6 text-[#66758F]">
                  A finance tracking platform that helps users manage their
                  expenses, monitor their spending and keep track of their
                  financial goals.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#10284F]">
                    View Project
                  </span>
                  <span className="text-lg text-[#6689D8]">→</span>
                </div>
              </div>
            </article>

            {/* HealthPlus */}
            <article className="overflow-hidden rounded-2xl border border-[#E5EAF3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Project Image */}
              <div className="relative h-52">
                <Image
                  src="/healthplus.png"
                  alt="HealthPlus project preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#E9E5FF] px-3 py-1 text-xs font-medium text-[#5145A5]">
                    Healthcare
                  </span>

                  <span className="rounded-full bg-[#FFE6D3] px-3 py-1 text-xs font-medium text-[#9A542D]">
                    Mobile App
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#10284F]">HealthPlus</h3>

                <p className="mt-3 text-sm leading-6 text-[#66758F]">
                  A healthcare platform designed to help users access health
                  information, manage appointments and connect with healthcare
                  services more easily.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#10284F]">
                    View Project
                  </span>

                  <span className="text-lg text-[#6689D8]">→</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* View All Projects Banner */}
      <section className="px-6 py-10 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#F0F1FF] px-6 py-12 text-center sm:py-14">
          {/* Background Decorations */}
          <div className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-[#D8D4FF] sm:h-56 sm:w-56" />

          <div className="absolute -left-2 top-10 h-44 w-44 rounded-full bg-[#FFD3AD] sm:h-52 sm:w-52" />

          <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-[#D8D4FF] sm:h-56 sm:w-56" />

          {/* Banner Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-[#10284F] sm:text-3xl">
              Want to see everything we’ve built?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#66758F] sm:text-base">
              Explore our complete portfolio of projects, case studies and more.
            </p>

            <Link
              href="/projects"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#10284F] px-7 py-3 font-semibold text-white transition hover:bg-[#1B3C70]"
            >
              View All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#F5F7FF] px-6 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Footer Content */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Algorithmic Explorers logo"
                  width={280}
                  height={140}
                  className="h-auto w-64 object-contain object-left"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-bold text-[#10284F]">Quick Links</h3>

              <ul className="space-y-1 text-sm text-[#66758F]">
                <li>
                  <Link href="/" className="hover:text-[#10284F]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#10284F]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#10284F]">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#10284F]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#10284F]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#10284F]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-4 font-bold text-[#10284F]">Get In Touch</h3>

              <div className="space-y-4 text-sm text-[#66758F]">
                <a
                  href="mailto:hello@algorithmicexplorers.com"
                  className="flex items-center gap-3 hover:text-[#10284F]"
                >
                  <span className="text-lg">✉</span>
                  <span>hello@algorithmicexplorers.com</span>
                </a>

                <a
                  href="tel:+2348012345678"
                  className="flex items-center gap-3 hover:text-[#10284F]"
                >
                  <span className="text-lg">☎</span>
                  <span>+234 801 234 5678</span>
                </a>

                <p className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span>Lagos, Nigeria</span>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-4 font-bold text-[#10284F]">Follow Us</h3>

              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  in
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  𝕏
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  ◎
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 flex flex-col gap-4 border-t border-[#DDE3F0] pt-6 text-sm text-[#66758F] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Algorithmic Explorers. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-[#10284F]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-[#10284F]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

