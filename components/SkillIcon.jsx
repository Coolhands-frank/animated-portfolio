// components/SkillIcon.jsx
import { twMerge } from "tailwind-merge";

const SkillIcon = ({ Icon, label, className }) => (
  <div className="flex flex-col items-center group">
    <Icon className={twMerge("group-hover:text-red-500 transition-colors 2xl:text-2xl", className)} />
    <span className="text-xs md:text-sm mt-2 group-hover:text-red-600">{label}</span>
  </div>
);

export default SkillIcon;
