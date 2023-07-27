import * as Checkbox from "@radix-ui/react-checkbox";
import Image from "next/image";
import React from "react";
import Check from "../assets/Check.png";
import Lixeira from "../assets/Vector.png";

interface TaskProps {
  text: string;
  onClick: () => void;
  completed: boolean;
  onToggle: () => void;
}

export const Task: React.FC<TaskProps> = ({
  text,
  onClick,
  completed,
  onToggle,
}) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <div className="flex flex-row justify-start items-center border border-[#373737] rounded-md p-5 mt-6 focus:outline-none focus:border-[#9AFF89] bg-[#181818]  text-white">
      <Checkbox.Root
        checked={completed}
        onCheckedChange={onToggle}
        className={`w-6 h-6 border border-[#9AFF89] rounded-full flex items-center justify-center ${
          completed ? "bg-[#9AFF89]" : ""
        }`}
      >
        <Checkbox.Indicator className="flex justify-center items-center">
          <Image src={Check} alt="Ok" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={`text-[#FBFBFF] ml-2 ${completed ? "line-through text-[#373737] " : ""}`}>{text}</p>
      <Image
        src={Lixeira}
        alt=""
        className="cursor-pointer ml-auto"
        onClick={handleOnClick}
      />
    </div>
  );
};
