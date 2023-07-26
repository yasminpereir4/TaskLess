import React from "react";
import Image from "next/image";
import Lixeira from "../assets/Lixeira.png";

interface TaskProps {
  text: string;
  onClick: () => void; 
  completed: boolean;
  onToggle: () => void;
}

export const Task: React.FC<TaskProps> = ({ text, onClick, completed, onToggle }) => {
  const handleOnClick = () => {
    onClick(); 
  };

  return (
    <div className="flex flex-row justify-start items-center border border-[#373737] rounded-md p-5 focus:outline-none focus:border-[#9AFF89] bg-[#181818] w-screen text-white">
      <input type="checkbox" className="rounded-full bg-[#9AFF89] w-25 ml-2" checked={completed} onChange={onToggle}  />
      <span className="text-[#FBFBFF] ml-2">{text}</span>
      <Image
        src={Lixeira}
        alt=""
        className="cursor-pointer ml-auto"
        onClick={handleOnClick}
      />
    </div>
  );
};
