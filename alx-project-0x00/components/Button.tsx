// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  let sizeClasses = "";
  if (size === "small") sizeClasses = "px-2 py-1 text-sm";
  if (size === "medium") sizeClasses = "px-4 py-2 text-base";
  if (size === "large") sizeClasses = "px-6 py-3 text-lg";

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses} ${shape} hover:bg-blue-600`}
    >
      {title}
    </button>
  );
};

export default Button;
