"use client"

import LoginForm from "@/app/components/form-elements/LoginForm";
import Image from "next/image";

export default function LoginPage() {

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/*  TOP/Hero section */}
      <div className="relative bg-linear-to-br from-[#322951] via-[#7b2cbf] to-[#5a189a] text-white pb-24 overflow-hidden">


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
          {/*  Logo  */}

          <div className="scale-140">
            <Image
              src="/login-logo-Mobile.png"
              alt="Algorithmic Explorers Logo"
              width={800}
              height={500}
              className="w-40"
            />
          </div>

          <h1 className=" scale-180 text-2xl font-bold tracking-tight mb-3">Welcome</h1>
          <p className="scale-120 text-[#f6ab8c] font-bold text-sm mt-1.5">Sign in to continue</p>
        </div>

        {/* Bottom White Wavy Cutout */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-14"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C320,0 720,100 1120,60 C1280,45 1380,65 1440,95 L1440,120 L0,120 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </div>

      {/* FORM SECTION  */}
      <LoginForm />
    </div>

  );
}
