'use client';
import React from "react";

interface InputSearchProps {
  placeholder: string; // Alterado para string
  onChange: (value: string) => void; // Alterado para uma função que recebe uma string como argumento
}

export const InputSearch: React.FC<InputSearchProps> = ({ placeholder, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
      className="border border-[#373737] rounded-md p-2 focus:outline-none focus:border-[#9AFF89] bg-[#181818] w-[273px] text-white"
    />
  );
};
