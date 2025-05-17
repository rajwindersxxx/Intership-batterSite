import { FaPhoneAlt } from "react-icons/fa";
import Anchor from "./ui/Anchor";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className={`${
        pathname === "/" ? "bg-green-900 text-gray-200" : "bg-gray-200 text-gray-800"
      }  sticky top-0 z-20 `}
    >
      <nav className="flex justify-between px-12 py-4 gap-8">
        <ul className="flex  gap-8 items-center text-1xl">
          <li className="font-bold text-2xl">
            <Link to="/">Better</Link>
          </li>
          <li>
            <Anchor to="/about">About Us</Anchor>
          </li>
          <li>
            <Anchor to="/calculator">Calculator</Anchor>
          </li>
          <li>
            <Anchor to="/startPage">Start Page</Anchor>
          </li>
        </ul>
        <ul className="flex gap-8 items-center">
          <li>
            <SecondaryButton>
              <FaPhoneAlt className="h-4 w-4" />
            </SecondaryButton>
          </li>
          <li>
            <SecondaryButton>SignIn</SecondaryButton>
          </li>
          <li>
            <PrimaryButton>Continue</PrimaryButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
