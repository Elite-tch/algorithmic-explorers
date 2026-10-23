import { MapPin } from "lucide-react";
import DynamicIcon from "./DynamicIcon";

const ContactCard = ({ cardType, heading, topText, bottomText = "" }) => {
  return (
    <div
      className={`group rounded-2xl border border-gray-100 ${
        cardType === "inverted" ? `bg-[#322951]` : `bg-white`
      } p-5 shadow-sm transition hover:shadow-md`}
    >
      <div className={`mb-4 w-max rounded-xl p-3 transition`}>
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
