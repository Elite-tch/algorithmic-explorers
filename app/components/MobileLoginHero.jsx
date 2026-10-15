import { LogIn, Mail, Lock, User } from "lucide-react";
import BackButton from "./BackButton";

function MobileLoginHero() {
  return (
    <section className="relative overflow-hidden bg-[#30244f] lg:hidden">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full bg-[#2e438e] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-[#f6ab8c] opacity-20 blur-3xl" />

      <div className="relative mx-auto flex max-w-lg flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-[#f6ab8c] sm:text-sm">
            <User size={16} />
            WELCOME BACK
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Continue your
            <br />
            <span className="text-[#f6ab8c]">journey.</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base">
            Sign in to Algorithm Explorers to access your courses, pick up where
            you left off, and keep building your skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MobileLoginHero;
