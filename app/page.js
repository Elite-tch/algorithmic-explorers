



export default function HomePage() {
  return (
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
         </div>
    </section>
  );
}