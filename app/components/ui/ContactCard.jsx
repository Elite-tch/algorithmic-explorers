import { MapPin } from "lucide-react";
import DynamicIcon from "./DynamicIcon";

const iconLookUp = {
  Address: [
    "bg-[#eef0f8]",
    "text-[#2c3c89]",
    "group-hover:bg-[#2c3c89]",
    "group-hover:text-white",
  ],
  Phone: [
    "bg-[#7966A0]",
    "text-[white]",
    "group-hover:bg-[#f6ab8c]",
    "group-hover:text-white",
  ],

  Email: [
    "bg-[#f8effa]",
    "text-[#c682d6]",
    "group-hover:bg-[#E9c3f2]",
    "group-hover:text-[#352951]",
  ],
  "Working Hours": [
    "bg-[#eef0f8]",
    "text-[#9CAAE7]",
    "transition",
    "group-hover:bg-[#9CAAE7]",
    "group-hover:text-white",
  ],
};

const ContactCard = ({
  cardType,
  heading,
  topText,
  bottomText = "",
  aos = "fade up",
}) => {
  return (
    <div
      data-aos={aos}
      className={`group rounded-2xl border border-gray-100 ${
        cardType === "inverted" ? `bg-[#322951]` : `bg-white`
      } p-5 shadow-sm transition hover:shadow-md`}
    >
      <div
        className={`mb-4 w-max rounded-xl ${iconLookUp[heading].join(
          " "
        )} p-3 transition`}
      >
        <DynamicIcon name={heading} size={22} />
      </div>
      <div>
        <h3
          className={`font-bold ${
            cardType === "inverted" ? `text-[#f6ab8c]` : `text-[#352951]`
          } `}
        >
          {heading}
        </h3>
        <p
          className={`mt-1 text-sm  ${
            heading === "Email" && "text-[13px]"
          } leading-relaxed ${
            cardType === "inverted" ? `text-white` : `text-gray-600`
          }`}
        >
          {topText}
          <br />
          {bottomText}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
