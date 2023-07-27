"use client";
import React from "react";

interface ButtonNewTaskProps {
  text: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonNewTask: React.FC<ButtonNewTaskProps> = ({
  text,
  children,
  onClick,
}) => {
  return (
    <button
      className="w-[177px] h-[49px] rounded-2xl bg-[#9AFF89] flex justify-center items-center cursor-pointer font-bold"
      onClick={onClick}
    > 
      {text}
      {children}
    </button>
  );
};
