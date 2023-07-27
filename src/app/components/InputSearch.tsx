"use client";
import Image from "next/image";
import React from "react";
import Search from "../assets/search.png";

interface InputSearchProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <div className="flex flex-row items-center border border-[#373737] rounded-md p-2 focus:outline-none focus:border-[#9AFF89] bg-[#181818] w-[283px] text-white">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        className=" bg-[#181818] text-white flex-1 focus:outline-none"
      />
      <Image src={Search} alt="" className="h-6 w-6 cursor-pointer" />
    </div>
  );
};
