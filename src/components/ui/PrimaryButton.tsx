import React from "react";
import { useLocation } from "react-router-dom";

interface props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "lessRounded";
}
function PrimaryButton({ children, onClick, className = "p-3", type }: props) {
  const { pathname } = useLocation();
  if (type === "lessRounded")
    return (
      <button className=" bg-green-700 text-white text-lg font-bold  p-4 rounded-md hover:bg-green-800 transition-colors"  onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button
      onClick={onClick}
      className={` bg-green-500 text-green-900   rounded-full text-lg  ${
        pathname === "/" ? "hover:bg-transparent" : "hover:bg-green-600"
      } hover:text-white transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
