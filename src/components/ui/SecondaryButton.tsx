import React from "react";

interface props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string
}
function SecondaryButton({ children, onClick , className}: props) {
  return (
    <button
      onClick={onClick}
      className={`hover:text-green-500 hover:bg-gray-100 p-4 rounded-full border ${className}`}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
