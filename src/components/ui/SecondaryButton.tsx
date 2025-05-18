import React from "react";

interface props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
function SecondaryButton({
  children,
  onClick,
  className = "hover:text-gray-500",
}: props) {
  return (
    <button
      onClick={onClick}
      className={` hover:bg-gray-100 p-3 rounded-full border ${className}`}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
