"use client"

import LoginForm from "@/app/components/form-elements/LoginForm";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";

export default function LoginPage() {

  return (
    <div className="m-0 min-h-screen flex flex-col lg:grid lg:grid-cols-2">

      {/*  TOP/Hero section (only Mobile) */}
      <section className="relative bg-linear-to-br from-[#322951] via-[#7b2cbf] to-[#5a189a] text-white pb-24 overflow-hidden lg:hidden">

        <BackButton />

        {/* The background Wave */}
        <svg
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-25"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#240046"
            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L0,320Z"
          />
        </svg>

        {/*  Hero Content Logo & texts */}
        <div className="relative z-10 flex flex-col gap-0 items-center justify-center px-6 pt-2 pb-6 text-center">
          <div className="scale-120 p-7">
            <Image
              src="/login-logo-Mobile.png"
              alt="Algorithmic Explorers Logo"
              width={800}
              height={500}
              className="w-40"
            />
          </div>

          <h1 className=" scale-180 text-2xl font-bold tracking-tight mb-3">Welcome...</h1>
          <p className="scale-120 text-[#f6ab8c] font-bold text-sm mt-1.5">Sign in to continue</p>
        </div>

        {/* The Bottom White Wave cutout */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-14"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C320,-80 720,180 1120,60 C1280,10 1380,110 1440,115 L1440,120 L0,120 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* FORM SECTION  */}
      <LoginForm />


      {/* Right side (only PC) */}

      <section className="hidden lg:flex relative w-full h-full min-h-150 items-center justify-center overflow-hidden">
        {/* Outer Circle (Largest) */}
        <div className="absolute right-[-45%] top-1/2 -translate-y-1/2 w-[135%] aspect-square rounded-full bg-[#352951]/35" />

        {/* middli Circle */}
        <div className="absolute right-[-35%] top-1/2 -translate-y-1/2 w-[115%] aspect-square rounded-full bg-[#352951]/65" />

        {/*  Inner Circle (solid and smallest) */}
        <div className="absolute right-[-25%] top-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full bg-[#352951]" />

        {/* Laptop Image Placeholder */}
        <div className="relative z-10 drop-shadow-[0_20px_35px_rgba(53,41,81,0.5)]">
          <Image
            src="/login-image-PC.png"
            alt="laptop"
            width={700}
            height={700}
          />
        </div>
      </section>
    </div>

  );
}
