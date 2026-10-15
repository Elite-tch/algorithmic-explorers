import LoginForm from "@/app/components/form-elements/LoginForm";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";
import MobileLoginHero from "./MobileLoginHero"

export default function LoginPage() {

  return (
    <div className="m-0 min-h-screen flex flex-col lg:grid lg:grid-cols-2">

      <MobileLoginHero />

      <LoginForm />

      <section className="hidden lg:flex relative w-full h-full min-h-150 items-center justify-center overflow-hidden">
        {/* Outer Circle (Largest) */}
        <div className="absolute right-[-45%] top-1/2 -translate-y-1/2 w-[135%] aspect-square rounded-full bg-[#352951]/35" />

        {/* middle Circle */}
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
