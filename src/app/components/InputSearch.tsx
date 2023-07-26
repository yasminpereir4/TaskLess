'use client';
import React from "react";

interface InputSearchProps {
  placeholder: string; 
  onChange: (value: string) => void; 
  value: string;
}

export const InputSearch: React.FC<InputSearchProps> = ({ placeholder, onChange , value }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      className="border border-[#373737] rounded-md p-2 focus:outline-none focus:border-[#9AFF89] bg-[#181818] w-full text-white"
    />
  );
};
