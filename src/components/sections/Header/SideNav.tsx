import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { MdPlayArrow } from "react-icons/md";

import { useUI } from "../../context/UIContext";
import navItems from "../../../data/navData..json";
import { FaPhone } from "react-icons/fa";
import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

function SideNav() {
  const { isSidebarOpen, toggleSidebar } = useUI();
  return (
    <nav
      className={`h-screen w-screen  z-50 fixed top-0 left-0 bg-white py-4 pl-4 pr-6 flex flex-col gap-8 transition-all text-gray-700 md:hidden ${
        isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <h2>
          <Link to="/" className="font-bold text-4xl">
            Better
          </Link>
        </h2>
        <button onClick={toggleSidebar}>
          <GrClose className="h-8 w-8" />
        </button>
      </div>
      <ul className="flex flex-col gap-8 flex-grow">
        {navItems.map(({ to, label }, index) => (
          <li key={index} onClick={toggleSidebar}>
            <Link
              to={to}
              className="flex justify-between text-xl hover:bg-gray-200 rounded-full px-2"
            >
              {label} <MdPlayArrow />
            </Link>
          </li>
        ))}
        <a
          className="p-4 rounded-full flex justify-center gap-4 bg-green-50 font-bold"
          href="tel:1234567890"
        >
          <FaPhone /> Call us anytime at (123)4567890
        </a>
      </ul>
      <div className="flex flex-col gap-4">
        <PrimaryButton>Continue</PrimaryButton>
        <SecondaryButton className="border border-gray-400 hover:bg-gray-300">
          Sign in
        </SecondaryButton>
      </div>
    </nav>
  );
}

export default SideNav;
