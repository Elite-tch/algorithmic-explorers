
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  Users,
  Code2,
  Palette,
  Database,
  Smartphone,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Frontend Development",
    category: "Development",
    description:
      "Learn to build responsive, interactive websites using modern frontend technologies and practical projects.",
    cohort: "Cohort 4",
    duration: "12 weeks",
    startDate: "October 20, 2026",
    price: 80000,
    status: "Enrolling Now",
    icon: Code2,
    color: "blue",
    level: "Beginner friendly",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "Backend Development",
    category: "Development",
    description:
      "Build server-side applications, create REST APIs, work with databases, and understand backend architecture.",
    cohort: "Cohort 3",
    duration: "12 weeks",
    startDate: "November 9, 2026",
    price: 100000,
    status: "Enrolling Now",
    icon: Database,
    color: "peach",
    level: "Beginner friendly",
    technologies: ["Node.js", "Express", "Databases", "APIs"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    description:
      "Learn user research, wireframing, prototyping, and interface design to create useful digital experiences.",
    cohort: "Cohort 2",
    duration: "8 weeks",
    startDate: "November 16, 2026",
    price: 60000,
    status: "Coming Soon",
    icon: Palette,
    color: "purple",
    level: "Beginner friendly",
    technologies: ["Figma", "Wireframes", "Prototyping"],
  },
  {
    id: 4,
    title: "Mobile App Development",
    category: "Development",
    description:
      "Explore mobile application development and learn how to turn ideas into functional mobile experiences.",
    cohort: "Upcoming Cohort",
    duration: "12 weeks",
    startDate: "To be announced",
    price: 90000,
    status: "Coming Soon",
    icon: Smartphone,
    color: "blue",
    level: "Beginner friendly",
    technologies: ["Mobile UI", "App Development", "APIs"],
  },
  {
    id: 5,
    title: "Data Analytics",
    category: "Data",
    description:
      "Learn to prepare, analyse, and interpret data to discover patterns and support better decisions.",
    cohort: "Upcoming Cohort",
    duration: "10 weeks",
    startDate: "To be announced",
    price: 75000,
    status: "Coming Soon",
    icon: Database,
    color: "peach",
    level: "Beginner friendly",
    technologies: ["Excel", "SQL", "Data Visualisation"],
  },
  {
    id: 6,
    title: "Full-Stack Development",
    category: "Development",
    description:
      "Bring frontend and backend skills together to design, develop, and deploy complete web applications.",
    cohort: "Upcoming Cohort",
    duration: "16 weeks",
    startDate: "To be announced",
    price: 120000,
    status: "Coming Soon",
    icon: Code2,
    color: "purple",
    level: "Foundational coding recommended",
    technologies: ["React", "Node.js", "APIs", "Databases"],
  },
];

const categories = ["All Courses", "Development", "Design", "Data"];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

const colorStyles = {
  blue: {
    icon: "bg-[#2e438e]/10 text-[#2e438e]",
    tag: "bg-[#2e438e]/10 text-[#2e438e]",
  },
  peach: {
    icon: "bg-[#f6ab8c]/25 text-[#30244f]",
    tag: "bg-[#f6ab8c]/25 text-[#30244f]",
  },
  purple: {
    icon: "bg-[#e9c4ef]/40 text-[#30244f]",
    tag: "bg-[#e9c4ef]/40 text-[#30244f]",
  },
};

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Courses");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const searchText = [
        course.title,
        course.description,
        course.category,
        ...course.technologies,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesCategory =
        category === "All Courses" || course.category === category;
      const matchesStatus =
        status === "All" || course.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, status, sort]);

  return (
    <main className="min-h-screen bg-white pb-20 text-[#30244f] md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#30244f]">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#2e438e] opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#f6ab8c] opacity-20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-[#f6ab8c] sm:text-sm">
              <GraduationCap size={16} />
              LEARN. BUILD. GROW.
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build skills.
              <br />
              Create your{" "}
              <span className="text-[#f6ab8c]">future.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Explore practical technology courses designed to help you
              learn in-demand skills, build real-world projects, and take
              the next step in your career.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#available-courses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f6ab8c] px-6 py-3.5 text-sm font-bold text-[#30244f] transition hover:bg-white"
              >
                Explore Courses <ArrowRight size={17} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Us
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f6ab8c]" />
                Practical projects
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f6ab8c]" />
                Guided learning
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-[#f6ab8c]/30" />

            <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-sm text-white/60">Your next chapter</p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    Starts with learning.
                  </h2>
                </div>
                <div className="rounded-2xl bg-[#f6ab8c] p-3 text-[#30244f]">
                  <BookOpen size={27} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { name: "Web Development", text: "Build for the web", icon: Code2 },
                  { name: "UI/UX Design", text: "Design better experiences", icon: Palette },
                  { name: "Data Analytics", text: "Turn data into insight", icon: Database },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="rounded-xl bg-white p-3 text-[#30244f]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-white/60">
                          {item.text}
                        </p>
                      </div>
                      <ArrowRight
                        className="ml-auto text-[#f6ab8c]"
                        size={18}
                      />
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-center text-xs text-white/60">
                Learn at your pace. Build with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-[#30244f]/10 bg-[#faf9fd]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            {
              icon: BookOpen,
              title: "Structured Learning",
              text: "Follow a guided learning path.",
            },
            {
              icon: Code2,
              title: "Hands-on Projects",
              text: "Put your knowledge into practice.",
            },
            {
              icon: Users,
              title: "Learning Community",
              text: "Grow through collaboration.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="rounded-xl bg-[#2e438e]/10 p-3 text-[#2e438e]">
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-[#30244f]/65">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Course catalogue */}
      <section
        id="available-courses"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e438e]">
              FIND YOUR LEARNING PATH
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore Our Courses
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#30244f]/65 sm:text-base">
              Discover a program that matches your interests and goals.
              Choose a course and take your next step.
            </p>
          </div>

          <p className="text-sm font-medium text-[#30244f]/70">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
        </div>

        {/* Search and filters */}
        <div className="mt-8 rounded-2xl border border-[#30244f]/10 bg-[#faf9fd] p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#30244f]/45"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses or technologies..."
                aria-label="Search courses"
                className="w-full rounded-xl border border-[#30244f]/15 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#30244f]/40 focus:border-[#2e438e] focus:ring-2 focus:ring-[#2e438e]/10"
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="course-status" className="sr-only">
                Filter by enrollment status
              </label>
              <select
                id="course-status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-[#30244f]/15 bg-white px-3 py-3.5 text-sm outline-none focus:border-[#2e438e] sm:flex-none"
              >
                <option value="All">All statuses</option>
                <option value="Enrolling Now">Enrolling now</option>
                <option value="Coming Soon">Coming soon</option>
              </select>

              <label htmlFor="course-sort" className="sr-only">
                Sort courses
              </label>
              <select
                id="course-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-[#30244f]/15 bg-white px-3 py-3.5 text-sm outline-none focus:border-[#2e438e] sm:flex-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  category === item
                    ? "bg-[#30244f] text-white"
                    : "border border-[#30244f]/15 bg-white text-[#30244f] hover:border-[#2e438e] hover:text-[#2e438e]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Course cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => {
            const Icon = course.icon;
            const styles = colorStyles[course.color];

            return (
              <article
                key={course.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#30244f]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2e438e]/30 hover:shadow-xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#30244f] via-[#2e438e] to-[#f6ab8c]" />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`rounded-2xl p-3 ${styles.icon}`}>
                      <Icon size={25} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${
                        course.status === "Enrolling Now"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-[#f6ab8c]/25 text-[#30244f]"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#2e438e]">
                    {course.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-[#2e438e]">
                    {course.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#30244f]/65">
                    {course.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium ${styles.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 border-t border-[#30244f]/10 pt-5 text-sm text-[#30244f]/75">
                    <div className="flex items-center gap-3">
                      <BookOpen size={16} className="shrink-0 text-[#2e438e]" />
                      <span>{course.cohort}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 size={16} className="shrink-0 text-[#2e438e]" />
                      <span>{course.duration}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CalendarDays
                        size={16}
                        className="shrink-0 text-[#2e438e]"
                      />
                      <span>{course.startDate}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-3 border-t border-[#30244f]/10 pt-5">
                    <div>
                      <p className="text-xs text-[#30244f]/55">
                        Course fee
                      </p>
                      <p className="mt-1 text-xl font-extrabold">
                        {formatPrice(course.price)}
                      </p>
                    </div>

                    {course.status === "Enrolling Now" ? (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#30244f] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#2e438e] sm:text-sm"
                      >
                        Enquire <ArrowRight size={15} />
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#30244f]/20 px-4 py-3 text-xs font-bold transition hover:border-[#2e438e] hover:text-[#2e438e] sm:text-sm"
                      >
                        Learn More <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-[#30244f]/20 px-6 py-16 text-center">
            <Search className="mx-auto text-[#2e438e]" size={34} />
            <h3 className="mt-4 text-xl font-bold">No courses found</h3>
            <p className="mt-2 text-sm text-[#30244f]/65">
              Try another search term or change your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Courses");
                setStatus("All");
                setSort("featured");
              }}
              className="mt-5 rounded-xl bg-[#30244f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2e438e]"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Call to action */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#f6ab8c]/25 p-7 sm:p-10 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e438e]">
              YOUR NEXT STEP STARTS HERE
            </p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Not sure which course to choose?
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#30244f]/70 sm:text-base">
              Tell us about your goals and interests. We can help you find
              a learning path that suits you.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#30244f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2e438e]"
          >
            Contact Our Team <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}