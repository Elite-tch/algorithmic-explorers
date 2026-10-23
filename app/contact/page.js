"use client"
import FormTextArea from '../components/forms/FormTextArea';
import FormDropdown from '../components/forms/FormDropDown';
import ContactCard from '../components/ui/ContactCard';
import FormButton from '../components/forms/FormButton';
import FormInput from '../components/forms/FormInput';
import { Send, User, Phone } from 'lucide-react';


const dropDownOptions = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Architecture" },
  { value: "design", label: "UI/UX Design" },
  { value: "data", label: "Data Science" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#f6ab8c] selection:text-[#30244f] py-16 sm:py-24">


      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Two column div */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:pr-4">
            {/* Header */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ece7ff] px-4 py-1.5 text-xs font-bold tracking-wide border border-[#322951] text-[#322951]">
                <Phone size={15} />CONTACT US
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#352951] sm:text-5xl">
                Get In Touch With <span className=" text-[#f6ab8c] "> {/*text-transparent bg-clip-text bg-gradient-to-r from-[#f6ab8c] to-[#E9c3f2] */}Our team</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {/* Have questions about our programs or need guidance? Reach out to our team, and we'll help you take the next step in your tech career. */}
                Questions about our programs or need guidance? Contact us to take the next step in your tech career.
              </p>
            </div>
            {/* Info ards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">

              <ContactCard cardType="normal" heading="Address" topText="UNN, Nsukka" bottomText="Enugu, Nigeria." aos="fade-down" />
              <ContactCard cardType="inverted" heading="Phone" topText="+234 900 000 0000" bottomText="+234 800 000 0000" aos="fade-left" />
              <ContactCard cardType="normal" heading="Email" topText="hello@algorithmicexplorers.com" aos="fade-up" />
              <ContactCard cardType="normal" heading="Working Hours" topText="Tuesday-Thursday" bottomText='9am-1pm' aos="fade-right" />
            </div>
          </div>

          {/* right column - the form*/}
          <div className="rounded-3xl border border-[#322951] border-t-8 bg-white p-8 shadow-xl shadow-gray-200/50 sm:p-10 lg:col-span-7">
            <h2 className="mb-8 text-2xl font-bold text-[#352951]">Send us a message</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormInput name="firstName" placeholder="First name" icon={User} />
                <FormInput name="lastName" placeholder="Last name" icon={User} />
              </div>

              <FormDropdown
                id="course"
                label="Courses Selection"
                name="course" git
                options={dropDownOptions}
                placeholder="Select a course of interest..."
              />

              {/* Any Additional Info TextArea*/}
              <FormTextArea id="additionalInfo" label="Any Additional Info" placeholder="How can we help you achieve your goals?" />

              {/* Submit Btn*/}
              <div className="mt-2 mb-3.5">
                <FormButton>
                  Submit Message <Send size={18} />
                </FormButton>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}