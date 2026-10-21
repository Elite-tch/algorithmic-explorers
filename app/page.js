



export default function HomePage() {
  return (
    <main>
  <section className="bg-[url('/background2.png')] bg-cover bg-center bg-no-repeat">
       <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <h1 className="max-w-2xl text-4xl font-bold text-[#30244f] md:text-6xl">
                Build In-Demand Skills for a
            <span className="text-[#f6ab8c]"> Brighter Future</span>
           </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
                Learn technology, build real-world projects, and grow your career
                with practical, hands-on training.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#courses"
                  className="rounded-lg bg-[#30244f] px-6 py-3 font-semibold text-white transition hover:bg-[#30244f]/80"
                >
                  Explore Courses →
                </a>

                <a
                  href="#services"
                  className="rounded-lg border border-[#30244f] px-6 py-3 font-semibold text-[#30244f] transition hover:bg-[#30244f]/20"
                >
                  Work With Us
                </a>
              </div>

               <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/80">
              <span><span className="mr-2 text-[#f6ab8c]">✦</span>Practical Learning</span>
              <span><span className="mr-2 text-[#f6ab8c]">✦</span>Real-World Projects</span>
              <span><span className="mr-2 text-[#f6ab8c]">✦</span>Technology Skills</span>
            </div>
         </div>
    </section>

           {/* FEATURED COURSES */}
      <section id="courses" className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#b87355]">
                Featured Courses
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#30244f] md:text-3xl">
                Popular Courses
              </h2>
              <p className="mt-2 text-sm text-[#30244f]/70">
                Explore our most in-demand courses and start your learning journey today.
              </p>
            </div>
            <a href="/courses" className="text-sm font-semibold text-[#30244f] hover:text-[#b87355]">
              View All Courses →
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#30244f] text-lg font-bold text-[#f6ab8c]">&lt;/&gt;</div>
                <span className="rounded-full bg-[#f6ab8c]/30 px-2 py-1 text-[10px] font-semibold text-[#30244f]">Enrolling</span>
              </div>
              <h3 className="mt-4 font-bold text-[#30244f]">Web Development</h3>
              <p className="mt-2 text-xs leading-5 text-[#30244f]/70">Learn to build modern, responsive websites using HTML, CSS, JavaScript and React.</p>
              <div className="mt-4 space-y-2 text-xs text-[#30244f]/75">
                <p>◷ &nbsp; Cohort: To be announced</p>
                <p>◷ &nbsp; Duration: To be announced</p>
                <p>₦ &nbsp; Price: To be announced</p>
              </div>
              <a href="/courses" className="mt-4 block rounded-lg bg-[#30244f] px-3 py-2.5 text-center text-xs font-semibold text-white hover:bg-[#413365]">View Course →</a>
            </div>

            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6ab8c] text-lg font-bold text-[#30244f]">Py</div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-[#30244f]">Upcoming</span>
              </div>
              <h3 className="mt-4 font-bold text-[#30244f]">Python Programming</h3>
              <p className="mt-2 text-xs leading-5 text-[#30244f]/70">Explore programming fundamentals, problem-solving and practical coding projects.</p>
              <div className="mt-4 space-y-2 text-xs text-[#30244f]/75">
                <p>◷ &nbsp; Cohort: To be announced</p>
                <p>◷ &nbsp; Duration: To be announced</p>
                <p>₦ &nbsp; Price: To be announced</p>
              </div>
              <a href="/courses" className="mt-4 block rounded-lg border border-[#30244f] px-3 py-2.5 text-center text-xs font-semibold text-[#30244f] hover:bg-[#f6ab8c]/20">Learn More →</a>
            </div>

            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#30244f] text-xl text-[#f6ab8c]">▣</div>
                <span className="rounded-full bg-[#f6ab8c]/30 px-2 py-1 text-[10px] font-semibold text-[#30244f]">Enrolling</span>
              </div>
              <h3 className="mt-4 font-bold text-[#30244f]">UI/UX Design</h3>
              <p className="mt-2 text-xs leading-5 text-[#30244f]/70">Design intuitive and user-friendly digital experiences with modern design tools.</p>
              <div className="mt-4 space-y-2 text-xs text-[#30244f]/75">
                <p>◷ &nbsp; Cohort: To be announced</p>
                <p>◷ &nbsp; Duration: To be announced</p>
                <p>₦ &nbsp; Price: To be announced</p>
              </div>
              <a href="/courses" className="mt-4 block rounded-lg bg-[#30244f] px-3 py-2.5 text-center text-xs font-semibold text-white hover:bg-[#413365]">View Course →</a>
            </div>

            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6ab8c] text-xl font-bold text-[#30244f]">▥</div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-[#30244f]">Coming Soon</span>
              </div>
              <h3 className="mt-4 font-bold text-[#30244f]">Data Analysis</h3>
              <p className="mt-2 text-xs leading-5 text-[#30244f]/70">Learn to analyze data, create visualizations and make data-driven decisions.</p>
              <div className="mt-4 space-y-2 text-xs text-[#30244f]/75">
                <p>◷ &nbsp; Cohort: To be announced</p>
                <p>◷ &nbsp; Duration: To be announced</p>
                <p>₦ &nbsp; Price: To be announced</p>
              </div>
              <a href="/courses" className="mt-4 block rounded-lg border border-[#30244f] px-3 py-2.5 text-center text-xs font-semibold text-[#30244f] hover:bg-[#f6ab8c]/20">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="services" className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#b87355]">Our Services</p>
              <h2 className="mt-2 text-2xl font-bold text-[#30244f] md:text-3xl">What We Do</h2>
              <p className="mt-2 text-sm text-[#30244f]/70">We offer services to help you learn, build and grow in the tech industry.</p>
            </div>
            <a href="/service" className="text-sm font-semibold text-[#30244f] hover:text-[#b87355]">Explore All Services →</a>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="border-b border-[#30244f]/10 pb-6 md:border-b-0 md:border-r md:pr-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ab8c]/40 text-2xl text-[#30244f]">▱</div>
              <h3 className="mt-4 font-bold text-[#30244f]">Technology Training</h3>
              <p className="mt-2 text-sm leading-6 text-[#30244f]/70">Structured courses and hands-on training in various technology skills and tools.</p>
              <a href="/courses" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">Learn More →</a>
            </div>

            <div className="border-b border-[#30244f]/10 pb-6 md:border-b-0 md:border-r md:px-2 md:pr-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ab8c]/40 text-2xl text-[#30244f]">♧</div>
              <h3 className="mt-4 font-bold text-[#30244f]">Workshops</h3>
              <p className="mt-2 text-sm leading-6 text-[#30244f]/70">Short, intensive sessions to build specific skills and stay up to date with industry trends.</p>
              <a href="#workshops" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">Learn More →</a>
            </div>

            <div className="pb-2 md:pl-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ab8c]/40 text-2xl text-[#30244f]">◇</div>
              <h3 className="mt-4 font-bold text-[#30244f]">Product Development</h3>
              <p className="mt-2 text-sm leading-6 text-[#30244f]/70">We help turn ideas into digital products through design and development.</p>
              <a href="#contact" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="portfolio" className="bg-[#30244f]/[0.03] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#b87355]">Featured Work</p>
              <h2 className="mt-2 text-2xl font-bold text-[#30244f] md:text-3xl">Our Recent Projects</h2>
              <p className="mt-2 max-w-lg text-sm text-[#30244f]/70">Take a look at projects completed by the organization and its learners.</p>
            </div>
            <a href="/portfolio" className="text-sm font-semibold text-[#30244f] hover:text-[#b87355]">View All Projects →</a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white shadow-sm">
              <div className="flex h-32 items-center justify-center bg-[#30244f] text-3xl text-[#f6ab8c]">▤</div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#30244f]">Student Management System</h3>
                <p className="mt-2 text-xs text-[#30244f]/60">Web Development</p>
                <a href="/portfolio" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">View Project →</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white shadow-sm">
              <div className="flex h-32 items-center justify-center bg-[#f6ab8c]/60 text-3xl text-[#30244f]">▣</div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#30244f]">Fitness Mobile App</h3>
                <p className="mt-2 text-xs text-[#30244f]/60">UI/UX Design</p>
                <a href="/portfolio" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">View Project →</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white shadow-sm">
              <div className="flex h-32 items-center justify-center bg-[#30244f]/10 text-3xl text-[#30244f]">▥</div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#30244f]">Sales Analytics Dashboard</h3>
                <p className="mt-2 text-xs text-[#30244f]/60">Data Analysis</p>
                <a href="/portfolio" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">View Project →</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white shadow-sm">
              <div className="flex h-32 items-center justify-center bg-[#f6ab8c]/40 text-3xl text-[#30244f]">◇</div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#30244f]">E-commerce Website</h3>
                <p className="mt-2 text-xs text-[#30244f]/60">Web Development</p>
                <a href="/portfolio" className="mt-4 inline-block text-xs font-semibold text-[#30244f] hover:text-[#b87355]">View Project →</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#30244f]/55">Project cards are sample content. Replace them with real projects before publishing.</p>
        </div>
      </section>

      {/* UPCOMING WORKSHOPS */}
      <section id="workshops" className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#b87355]">Upcoming Workshops</p>
              <h2 className="mt-2 text-2xl font-bold text-[#30244f] md:text-3xl">Join Our Next Workshop</h2>
              <p className="mt-2 text-sm text-[#30244f]/70">Gain practical skills, ask questions, and learn from industry professionals.</p>
            </div>
            <a href="/service" className="text-sm font-semibold text-[#30244f] hover:text-[#b87355]">View All Workshops →</a>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#30244f] font-bold text-[#f6ab8c]">&lt;/&gt;</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-[#30244f]">Introduction to Git & GitHub</h3>
                  <p className="mt-2 text-xs text-[#30244f]/65">Date: To be announced</p>
                  <p className="mt-1 text-xs text-[#30244f]/65">Duration: To be announced</p>
                  <p className="mt-2 text-xs font-semibold text-[#30244f]">Price: To be announced</p>
                </div>
              </div>
              <a href="/service" className="mt-4 block rounded-lg bg-[#30244f] px-4 py-2.5 text-center text-xs font-semibold text-white hover:bg-[#413365]">Workshop Details →</a>
            </div>

            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f6ab8c] text-xl font-bold text-[#30244f]">✎</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-[#30244f]">UI/UX Design Essentials</h3>
                  <p className="mt-2 text-xs text-[#30244f]/65">Date: To be announced</p>
                  <p className="mt-1 text-xs text-[#30244f]/65">Duration: To be announced</p>
                  <p className="mt-2 text-xs font-semibold text-[#30244f]">Price: To be announced</p>
                </div>
              </div>
              <a href="/service" className="mt-4 block rounded-lg border border-[#30244f] px-4 py-2.5 text-center text-xs font-semibold text-[#30244f] hover:bg-[#f6ab8c]/20">Workshop Details →</a>
            </div>

            <div className="rounded-xl border border-[#30244f]/10 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#30244f] text-xl text-[#f6ab8c]">▥</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-[#30244f]">Data Visualization</h3>
                  <p className="mt-2 text-xs text-[#30244f]/65">Date: To be announced</p>
                  <p className="mt-1 text-xs text-[#30244f]/65">Duration: To be announced</p>
                  <p className="mt-2 text-xs font-semibold text-[#30244f]">Price: To be announced</p>
                </div>
              </div>
              <a href="/service" className="mt-4 block rounded-lg bg-[#30244f] px-4 py-2.5 text-center text-xs font-semibold text-white hover:bg-[#413365]">Workshop Details →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#30244f] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f6ab8c]">Start Your Journey</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Ready to Build Your Future?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75">
            Explore technology courses, discover our services, and take the next step toward your goals.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="#courses" className="rounded-lg bg-[#f6ab8c] px-6 py-3 text-sm font-semibold text-[#30244f] hover:bg-[#ffc2a8]">Explore Courses →</a>
            <a href="#contact" className="rounded-lg border border-[#f6ab8c] px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Contact Us</a>
          </div>
        </div>
      </section>

    

    </main>
      
    
  );
}