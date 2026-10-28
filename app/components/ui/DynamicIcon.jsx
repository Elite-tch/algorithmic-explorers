import { MapPin, Phone, Mail, ClockCheck } from "lucide-react";

const iconMap = {
  Address: MapPin,
  Phone: Phone,
  Email: Mail,
  "Working Hours": ClockCheck,
};

const DynamicIcon = ({ name, size = 20, color = "currentColor", ...props }) => {
  const Icon = iconMap[name];

  console.log(Icon);
  if (!Icon) return null;

  return <Icon size={size} color={color} {...props} />;
};

export default DynamicIcon;
