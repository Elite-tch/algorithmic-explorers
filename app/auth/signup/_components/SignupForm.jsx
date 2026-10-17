"use client";
import { UserRound, Mail, Phone, LockKeyhole, ShieldCheck } from "lucide-react";
import FormInput from "../../../components/forms/FormInput";
import FormButton from "../../../components/forms/FormButton";
import Link from "next/link";
import { useState } from "react";

const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    label: "Email",
  },
  {
    id: 3,
    name: "phone",
    type: "text",
    label: "Phone number",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
  },
];

const defaultFormFields = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  function handleSubmit(e) {
    e.preventDefault();
    // Later Submit Logic
  }

  function updateFields({ target: { name, value } }) {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  return (
    <div className="flex flex-col flex-1 px-1 pt-4 pb-8 max-w-md mx-auto lg:mx lg:mt w-full ">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.label}
              icon={
                input.name === "name"
                  ? UserRound
                  : input.name === "email"
                  ? Mail
                  : input.name === "phone"
                  ? Phone
                  : input.name === "password"
                  ? LockKeyhole
                  : input.name === "confirmPassword"
                  ? ShieldCheck
                  : null
              }
              value={formFields[input.name]}
              onChange={updateFields}
            />
          );
        })}
      </form>

      <p className="mt-6 text-center text-xs text-gray-400">
        {`Already have an account? `}
        <Link
          href="/auth/login"
          className="font-semibold text-[#f6ab8c] hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};
export default SignupForm;
