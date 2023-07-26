import React from "react";

interface OptionsProps {
  text: string;
  number: number;
  onClick?: () => void;
  selected: boolean;
  disabled?: boolean;
}

export const Options: React.FC<OptionsProps> = ({
  text,
  number,
  selected,
  onClick,
  disabled,
}) => {

  return (
    <div className="flex items-center">
      <span
        className={`mr-2 font-bold text-2xl ${
          selected ? "text-[#9AFF89]" : "text-[#747474]"
        }`}
      >
        {text}:
      </span>
      <button
        className={`w-10 h-10 rounded-full font-bold ${
          selected
            ? "bg-[#9AFF89] text-[#181818]"
            : "bg-[#181818] text-[#747474]"
        } flex items-center justify-center mr-2`}
        onClick={onClick}
        disabled={disabled}
      >
        {number}
      </button>
    </div>
  );
};
