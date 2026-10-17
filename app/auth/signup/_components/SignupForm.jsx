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
  return <div>SignupForm</div>;
};

export default SignupForm;
