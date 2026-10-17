"use client";
import React from "react";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import BackButton from "@/app/components/layout/BackButton";

export default function MobileSignupHero() {
  return (
    <section className="relative overflow-hidden bg-[#30244f] lg:hidden">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full bg-[#2e438e] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-[#f6ab8c] opacity-20 blur-3xl" />

      <div className="relative mx-auto flex max-w-lg flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16">
        {/* Button and Texts*/}
        <BackButton />
        <div>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-[#f6ab8c] sm:text-sm">
            <UserPlus size={16} />
            JOIN THE COMMUNITY
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white">
            Start your
            <br />
            <span className="text-[#f6ab8c]">exploration.</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base">
            Create an account to unlock practical tech courses, build real-world
            projects, and accelerate your career.
          </p>
        </div>
      </div>
      {/* Wave */}
      <div className="absolute bottom-[-20] md:bottom-[-35]  w-full leading-0 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block w-full h-20 sm:h-30"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C240,240 480,240 720,160 C960,80 1200,80 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
