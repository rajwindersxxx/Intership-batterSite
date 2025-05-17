import React from "react";
import { Link } from "react-router-dom";
interface props {
  children: React.ReactNode;
  to: string
}
function Anchor({ children , to}: props) {
  return (
    <Link
      to={to}
      className={`hover:text-gray-800 hover:bg-gray-100 p-4 rounded-full transition-all`}
    >
      {children}
    </Link>
  );
}

export default Anchor;
