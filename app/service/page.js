
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Users,
  Boxes,
  Settings,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Rocket,
  Headphones,
  Laptop,
  Smartphone,
  Globe,
  Database,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Technology Training",
    description:
      "Equip individuals and teams with practical technology skills through structured training tailored to your goals.",
    icon: GraduationCap,
    color: "blue",
    features: [
      "Technical skills development",
      "Corporate team training",
      "Practical learning exercises",
      "Project-based learning",
    ],
  },
  {
    number: "02",
    title: "Workshops",
    description:
      "Focused, hands-on technical sessions that help participants explore new tools, strengthen skills, and solve real problems.",
    icon: Users,
    color: "peach",
    features: [
      "Interactive technical sessions",
      "Hands-on demonstrations",
      "Team learning experiences",
      "Topic-specific training",
    ],
  },
  {
    number: "03",
    title: "Product Development",
    description:
      "Transform your ideas into useful digital products through thoughtful design, development, and technical implementation.",
    icon: Code2,
    color: "purple",
    features: [
      "Web application development",
      "Mobile application development",
      "Product design and prototyping",
      "API and backend development",
    ],
  },
  {
    number: "04",
    title: "Other Services",
    description:
      "Get technical support and tailored solutions that address your organization's specific digital and technology needs.",
    icon: Settings,
    color: "blue",
    features: [
      "Technical consultation",
      "Digital solution planning",
      "Technical project guidance",
      "Customized technology support",
    ],
  },
];

const benefits = [
  {
    icon: Users,
    title: "Skilled & Experienced Team",
    description:
      "Work with people who understand technology, collaboration, and practical delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Practical, Real-World Focus",
    description:
      "We prioritize useful solutions, hands-on execution, and outcomes that matter.",
  },
  {
    icon: Lightbulb,
    title: "Flexible & Custom Solutions",
    description:
      "We tailor our approach to your goals, project requirements, and available resources.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "We value lasting relationships and help you navigate the next steps after delivery.",
  },
];

const process = [
  {
    number: "01",
    title: "Discuss Your Needs",
    description:
      "Tell us about your goals, challenges, target audience, and what you want to achieve.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Plan & Propose",
    description:
      "We define a suitable approach, clarify requirements, and outline the proposed solution.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Build & Deliver",
    description:
      "We work with you to develop, review, and deliver a solution aligned with your objectives.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Support & Grow",
    description:
      "We discuss improvements, next steps, and ongoing support as your needs evolve.",
    icon: Headphones,
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A digital shopping experience designed to help businesses present and sell their products online.",
    icon: Globe,
    color: "blue",
    tags: ["Web", "E-Commerce"],
  },
  {
    title: "Mobile Application",
    category: "Mobile Development",
    description:
      "A mobile-first product concept focused on convenient access and a streamlined user experience.",
    icon: Smartphone,
    color: "peach",
    tags: ["Mobile", "Product"],
  },
  {
    title: "Learning Management System",
    category: "Product Development",
    description:
      "A learning platform concept designed to organize educational content and student experiences.",
    icon: Database,
    color: "purple",
    tags: ["Education", "Web"],
  },
];

const iconStyles = {
  blue: "bg-[#2e438e]/10 text-[#2e438e]",
  peach: "bg-[#f6ab8c]/30 text-[#30244f]",
  purple: "bg-[#e9c4ef]/40 text-[#30244f]",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#30244f]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#30244f]">
        <div className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-[#2e438e]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-[#f6ab8c]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-24">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f6ab8c]">
              <Sparkles size={15} />
              Our Services
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We build digital solutions that create{" "}
              <span className="text-[#f6ab8c]">real impact.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              From technical training to product development, we help
              individuals, teams, and organizations gain the skills and
              solutions they need to grow in today&apos;s digital world.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f6ab8c] px-6 py-3.5 text-sm font-bold text-[#30244f] transition hover:bg-white"
              >
                Start a Conversation
                <ArrowRight size={17} />
              </Link>

              <a
                href="#core-services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f6ab8c]" />
                Practical expertise
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f6ab8c]" />
                Tailored solutions
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-[#f6ab8c]/30" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#f6ab8c]">
                    What we do
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Ideas into impact.
                  </h2>
                </div>
                <div className="rounded-2xl bg-[#f6ab8c] p-3 text-[#30244f]">
                  <Boxes size={28} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: GraduationCap, title: "Training", subtitle: "Build skills" },
                  { icon: Code2, title: "Development", subtitle: "Build products" },
                  { icon: Users, title: "Workshops", subtitle: "Share knowledge" },
                  { icon: Settings, title: "Consulting", subtitle: "Solve problems" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 sm:p-5"
                    >
                      <Icon size={25} className="text-[#f6ab8c]" />
                      <h3 className="mt-4 font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/60">
                        {item.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#f6ab8c]/15 p-4">
                <div className="rounded-xl bg-[#f6ab8c] p-2 text-[#30244f]">
                  <Lightbulb size={22} />
                </div>
                <p className="text-sm leading-6 text-white/85">
                  Technology, creativity, and collaboration working together.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE SERVICES */}
      <section
        id="core-services"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e438e]">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Core Services
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#30244f]/65 sm:text-base">
              We provide a range of technology services designed to help you
              learn, build, and scale your ideas.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl border border-[#30244f]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2e438e]/30 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className={`rounded-2xl p-3 ${iconStyles[service.color]}`}>
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-[#30244f]/25">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold transition-colors group-hover:text-[#2e438e]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#30244f]/65">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#30244f]/75"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#2e438e]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 border-t border-[#30244f]/10 pt-5 text-sm font-bold text-[#2e438e] transition hover:text-[#f09b78]"
                  >
                    Discuss Your Needs
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f5f7ff] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e438e]">
              Why Choose Us
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
              More than just a service provider
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#30244f]/70 sm:text-base">
              We combine hands-on experience, a learner-centred approach,
              and a commitment to quality to deliver real value—whether
              you&apos;re looking to build skills or develop something great.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#30244f] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#2e438e]"
            >
              Work With Us
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-[#30244f]/10 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
                >
                  <div className="inline-flex rounded-xl bg-[#2e438e]/10 p-3 text-[#2e438e]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 font-bold">{benefit.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#30244f]/65">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e438e]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              How It Works
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#30244f]/65 sm:text-base">
              From the first conversation to the final delivery, we keep
              the process clear, collaborative, and focused on your goals.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative">
                  {index < process.length - 1 && (
                    <div className="absolute left-14 top-7 hidden h-px w-[calc(100%-2rem)] bg-[#30244f]/15 lg:block" />
                  )}

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2e438e] text-white shadow-lg shadow-[#2e438e]/15">
                      <Icon size={24} />
                    </div>

                    <span className="text-3xl font-extrabold text-[#30244f]/15">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#30244f]/65">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="bg-[#f5f7ff] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e438e]">
                Our Work
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Recent Projects
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#30244f]/65 sm:text-base">
                Explore examples of the digital products and solutions
                we can help create.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2e438e] transition hover:text-[#f09b78]"
            >
              View All Projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-[#30244f]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#30244f]">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2e438e]/80 blur-2xl" />
                    <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-[#f6ab8c]/40 blur-2xl" />

                    <div className="relative rounded-2xl border border-white/20 bg-white/10 p-7 text-[#f6ab8c] transition duration-300 group-hover:scale-110">
                      <Icon size={54} strokeWidth={1.5} />
                    </div>

                    <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-[#30244f]/65">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#2e438e]/10 px-3 py-1.5 text-xs font-semibold text-[#2e438e]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/portfolio"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2e438e] hover:text-[#f09b78]"
                    >
                      Explore Our Work
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-[#30244f] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#2e438e]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 -z-10 h-64 w-64 rounded-full bg-[#f6ab8c]/20 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f6ab8c]">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Tell us about your needs and let&apos;s build something great
              together. We&apos;re ready to discuss your next idea.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f6ab8c] px-6 py-4 text-sm font-bold text-[#30244f] transition hover:bg-white"
            >
              Start a Conversation
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}