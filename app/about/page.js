"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [currentYear, setCurrentYear] = useState("");
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));

    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) return;

    const targets = [4, 1000, 50, 100];
    let animationStarted = false;
    let intervalId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animationStarted) return;

        animationStarted = true;

        intervalId = window.setInterval(() => {
          setCounts((previous) => {
            const next = previous.map((count, index) =>
              Math.min(
                targets[index],
                count + Math.max(1, Math.ceil(targets[index] / 200)),
              ),
            );

            if (next.every((count, index) => count === targets[index])) {
              window.clearInterval(intervalId);
            }

            return next;
          });
        }, 15);
      },
      { threshold: 0.2 },
    );

    observer.observe(statsSection);

    return () => {
      observer.disconnect();

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  const handleJoin = () => {
    window.alert(
      "Welcome to Algorithmic Explorers! " +
        "Please connect your onboarding page to continue.",
    );
  };

  return (
    <div className="about-page">
      <style>{`
        .about-page {
          --brand-deep-indigo: #2A2343;
          --brand-peach: #F5AC87;
          --brand-navy: #2D3A7A;
          --brand-periwinkle: #98A9E3;
          --brand-lilac: #E3C4ED;
          --bg-light: #F8F9FC;
          --text-dark: #1E1B2E;
          --white: #FFFFFF;
        }

        .about-page,
        .about-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html:has(.about-page) {
          scroll-behavior: smooth;
        }

        .about-page {
          background-color: var(--bg-light);
          color: var(--text-dark);
          font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .about-page button,
        .about-page a {
          font: inherit;
        }

        .about-page a {
          -webkit-tap-highlight-color: transparent;
        }

        /* Header and navigation */

        .ae-header {
          background-color: var(--brand-deep-indigo);
          color: var(--white);
          padding: 1.2rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(42, 35, 67, 0.15);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .logo-container h1 {
          font-size: 1.25rem;
          letter-spacing: 0.5px;
          font-weight: 700;
          color: var(--white);
        }

        .logo-container span,
        .ae-footer span {
          color: var(--brand-peach);
        }

        .ae-nav ul {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 2rem;
        }

        .ae-nav a {
          color: var(--white);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .ae-nav a:hover,
        .ae-nav a.active {
          color: var(--brand-peach);
        }

        .menu-toggle {
          display: none;
          color: var(--white);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 8px;
          padding: 0.4rem 0.7rem;
          cursor: pointer;
          font-size: 1.4rem;
        }

        /* Hero section */

        .ae-hero {
          background: linear-gradient(
            135deg,
            var(--brand-deep-indigo) 0%,
            var(--brand-navy) 100%
          );
          color: var(--white);
          padding: 6rem 5% 5rem;
          text-align: center;
             }

        .ae-hero h2 {
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.2;
          margin-bottom: 1rem;
          color: var(--white);
        }

        .ae-hero h2 span {
          color: var(--brand-peach);
        }

        .ae-hero p {
          font-size: 1.15rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          color: var(--brand-lilac);
        }

        .tagline-badge {
          display: inline-block;
          background-color: rgba(245, 172, 135, 0.15);
          color: var(--brand-peach);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(245, 172, 135, 0.3);
        }

        /* Main content */

        .ae-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 280px), 1fr)
          );
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .ae-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(42, 35, 67, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 5px solid var(--brand-navy);
        }

        .ae-card:nth-child(2) {
          border-top-color: var(--brand-peach);
        }

        .ae-card:nth-child(3) {
          border-top-color: var(--brand-periwinkle);
        }

        .ae-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(42, 35, 67, 0.1);
        }

        .ae-card h3 {
          font-size: 1.5rem;
          color: var(--brand-deep-indigo);
          margin-bottom: 1rem;
        }

        .ae-card p {
          color: #555;
          font-size: 1.05rem;
        }

        .section-title {
          text-align: center;
          font-size: clamp(1.8rem, 4vw, 2.25rem);
          color: var(--brand-deep-indigo);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        /* What we do */

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 230px), 1fr)
          );
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .pillar-item {
          background: var(--white);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pillar-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(42, 35, 67, 0.1);
        }

        .pillar-icon {
          width: 60px;
          height: 60px;
          background-color: var(--brand-lilac);
          color: var(--brand-navy);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .pillar-item h4 {
          color: var(--brand-deep-indigo);
          margin-bottom: 0.75rem;
          font-size: 1.2rem;
        }

        .pillar-item p {
          color: #555;
        }

        /* Animated statistics */

        .stats-section {
          background-color: var(--brand-deep-indigo);
          color: var(--white);
          padding: 4rem 2rem;
          border-radius: 20px;
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(150px, 1fr)
          );
          gap: 2rem;
          text-align: center;
          margin-bottom: 5rem;
        }

        .stat-box h3 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--brand-peach);
          margin-bottom: 0.5rem;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
        }

        .stat-box p {
          color: var(--brand-lilac);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Call to action */

        .cta-box {
          background: linear-gradient(
            135deg,
            var(--brand-navy) 0%,
            var(--brand-periwinkle) 100%
          );
          color: var(--white);
          text-align: center;
          padding: 4rem 2rem;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(45, 58, 122, 0.2);
        }

        .cta-box h3 {
          font-size: clamp(1.7rem, 4vw, 2.2rem);
          margin-bottom: 1rem;
        }

        .cta-box p {
          max-width: 600px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
          color: #F0F3FA;
        }

        .ae-btn {
          display: inline-block;
          background-color: var(--brand-peach);
          color: var(--brand-deep-indigo);
          padding: 0.85rem 2.25rem;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
          box-shadow: 0 4px 15px rgba(245, 172, 135, 0.4);
        }

        .ae-btn:hover {
          transform: translateY(-2px);
          background-color: #ffb997;
        }

        .ae-btn:focus-visible,
        .menu-toggle:focus-visible,
        .ae-nav a:focus-visible {
          outline: 3px solid var(--brand-peach);
          outline-offset: 4px;
        }

        /* Footer */

        .ae-footer {
          background-color: #1a1529;
          color: #aaa;
          text-align: center;
          padding: 2.5rem 2rem;
          font-size: 0.95rem;
        }

        /* Tablet and mobile */

        @media (max-width: 768px) {
          .ae-header {
            padding: 1rem 5%;
            flex-wrap: wrap;
          }

          .logo-container h1 {
            font-size: 1rem;
          }

          .menu-toggle {
            display: block;
          }

          .ae-nav {
            display: none;
            width: 100%;
          }

          .ae-nav.nav-open {
            display: block;
          }

          .ae-nav ul {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding-top: 0.5rem;
          }

          .ae-nav a {
            display: block;
            padding: 0.75rem 0;
          }

          .ae-hero {
            padding: 4rem 6% 3.5rem;
          }

          .ae-hero p {
            font-size: 1rem;
          }

          .ae-container {
            padding: 3rem 5%;
          }

          .mission-grid {
            margin-bottom: 3.5rem;
          }

          .ae-card {
            padding: 1.75rem;
          }

          .pillars-grid {
            margin-bottom: 3.5rem;
          }

          .stats-section {
            padding: 3rem 1.25rem;
            gap: 2rem 1rem;
            margin-bottom: 3.5rem;
          }

          .cta-box {
            padding: 3rem 1.5rem;
          }
        }

        @media (max-width: 400px) {
          .logo-container h1 {
            font-size: 0.85rem;
          }

          .tagline-badge {
            font-size: 0.8rem;
          }

          .stat-box p {
            font-size: 0.8rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html:has(.about-page) {
            scroll-behavior: auto;
          }

          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Header and navigation */}

      <main>
        {/* Hero section */}
        <section className="ae-hero flex justify-center items-center flex-col ">
          <div className="tagline-badge">
            Exploring AI From Curiosity to Collaboration
          </div>

          <h2 className="md:w-[65%] mx-auto">
            Empowering the Next Generation  of <span>AI Innovators</span>
          </h2>

          <p>
            We are a dynamic community of thinkers, builders, and bridge-makers
            transforming ideas into tangible real-world impact through
            collaborative technology education.
          </p>
        </section>

        <div className="ae-container">
          {/* Mission, vision, and core belief */}
          <section className="mission-grid" aria-label="Our values">
            <article className="ae-card">
              <h3>Our Vision</h3>
              <p>
                To cultivate an international ecosystem where aspiring
                developers, researchers, and creators move seamlessly from
                learning concepts to building solutions that shape the future.
              </p>
            </article>

            <article className="ae-card">
              <h3>Our Mission</h3>
              <p>
                To provide the ideal environment, mentorship, and practical
                platform support systems that help innovators turn raw curiosity
                into meaningful technical contribution.
              </p>
            </article>

            <article className="ae-card">
              <h3>Our Core Belief</h3>
              <p>
                Curiosity should lead to collaboration. We believe true learning
                happens when individuals build together, bridge knowledge gaps,
                and apply their skills to solve challenges.
              </p>
            </article>
          </section>

          {/* What we do */}
          <section aria-labelledby="what-we-do">
            <h2 id="what-we-do" className="section-title">
              What We Do
            </h2>

            <p className="section-subtitle">
              Driving excellence across core developmental pillars
            </p>

            <div className="pillars-grid">
              <article className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  01
                </div>
                <h4>Technology Training</h4>
                <p>
                  Hands-on structured programs and cohorts focused on modern
                  tech, data cleaning, and model training.
                </p>
              </article>

              <article className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  02
                </div>
                <h4>Interactive Workshops</h4>
                <p>
                  Engaging sessions led by industry experts to upskill members
                  and break down complex technical topics.
                </p>
              </article>

              <article className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  03
                </div>
                <h4>Product Development</h4>
                <p>
                  Translating theoretical knowledge into real-world applications
                  and functional project solutions.
                </p>
              </article>

              <article className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  04
                </div>
                <h4>Portfolio Building</h4>
                <p>
                  Helping students and interns craft verifiable project
                  portfolios that stand out in the global tech ecosystem.
                </p>
              </article>
            </div>
          </section>

          {/* Animated statistics */}
          <section className="stats-section" aria-label="Our impact statistics">
            <div className="stat-box">
              <h3>{counts[0]}</h3>
              <p>Years of Impact</p>
            </div>

            <div className="stat-box">
              <h3>
                {counts[1]}
                {counts[1] === 1000 ? "+" : ""}
              </h3>
              <p>Global Learners</p>
            </div>

            <div className="stat-box">
              <h3>{counts[2]}</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat-box">
              <h3>{counts[3]}%</h3>
              <p>Commitment</p>
            </div>
          </section>

          {/* Call to action */}
          <section className="cta-box">
            <h3>Ready to Begin Your Journey?</h3>

            <p>
              Join a community of forward-thinkers and innovators ready to lead,
              create, and make an impact.
            </p>

            <button type="button" className="ae-btn" onClick={handleJoin}>
              Join Our Community
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="ae-footer">
        <p>
          &copy; <span>{currentYear}</span> <span>Algorithmic Explorers</span>.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
