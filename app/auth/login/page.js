import LoginForm from "./_components/LoginForm";
import Image from "next/image";
import MobileLoginHero from "./_components/MobileLoginHero"

export default function LoginPage() {

  return (
    <div className="m-0 min-h-screen flex flex-col lg:grid lg:grid-cols-2">

      {/* Left Column: Form & Mobile Headers */}
      <div className=" flex flex-col w-full h-full">

        {/* Mobile Header (Hidden on PC) */}
        <MobileLoginHero />

        {/* Content Container (Centers form on mobile, aligns top-left on PC) */}
        <div className="flex flex-col flex-1 px-7 pt-2 pb-8 max-w-md mx-auto lg:mx-20 lg:mt-12 w-full">

          {/* PC Header (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <h1
              data-aos="fade-right"
              suppressHydrationWarning={true} //  Fix hydration warning issue
              className="hidden lg:flex justify-center items-center gap-3 text-4xl font-extrabold tracking-tight text-[#352951]"
            >
              <span>WELCOME BACK</span>
            </h1>
            <p
              data-aos="fade-left"
              suppressHydrationWarning={true} //  Fix hydration warning issue
              className="hidden lg:flex justify-center text-[#f6ab8c] font-bold text=xl my-2.5"
            >
              Sign in to Continue your journey
            </p>
          </div>

          {/* Form Component*/}
          <LoginForm />

        </div>
      </div>

      {/* Right Column -  Hidden on Mobile */}
      <section className="hidden lg:flex relative w-full h-full min-h-150 items-center justify-center overflow-hidden">
        {/* Largest circle */}
        <div data-aos="fade-left"
          data-aos-anchor="#anchor"
          data-aos-offset="500"
          data-aos-duration="400"
          suppressHydrationWarning={true} //  Fix hydration warning issue
          className="absolute right-[-45%] top-1/2 -translate-y-1/2 w-[135%] aspect-square rounded-full bg-[#352951]/35" />

        {/* middle Circle */}
        <div data-aos="fade-left"
          data-aos-anchor="#anchor"
          data-aos-offset="500"
          data-aos-duration="800"
          suppressHydrationWarning={true} //  Fix hydration warning issue

          className="absolute right-[-35%] top-1/2 -translate-y-1/2 w-[115%] aspect-square rounded-full bg-[#352951]/65" />

        {/*  smallest circle */}
        <div data-aos="fade-left"
          data-aos-anchor="#anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          suppressHydrationWarning={true} //  Fix hydration warning issue
          className="absolute right-[-25%] top-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full bg-[#352951]" />

        {/* Laptop Image */}
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
