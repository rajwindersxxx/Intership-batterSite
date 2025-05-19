import { FaPhoneAlt } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect } from "react";
import Anchor from "../../ui/Anchor";
import SecondaryButton from "../../ui/SecondaryButton";
import PrimaryButton from "../../ui/PrimaryButton";
import navItems from "../../../data/navData..json"
import { useUI } from "../../context/UIContext";
function Header() {
  const { pathname } = useLocation();
  const { toggleSidebar, isHeroVisible, setHeroVisible } = useUI();
  useEffect(() => {
    if (pathname === "/") {
      setHeroVisible(true);
    } else {
      setHeroVisible(false);
    }
  }, [pathname, setHeroVisible]);
  return (
    <header
      className={`${
        isHeroVisible && pathname == "/"
          ? "bg-green-900 text-gray-200"
          : "bg-white text-gray-800"
      }  sticky top-0 z-40 transition-all  `}
    >
      <nav className="flex justify-between md:px-12 px-4 py-4 gap-8">
        <ul className="flex  gap-8 items-center text-1xl ">
          <li className="font-bold text-2xl">
            <Link to="/">Better</Link>
          </li>
          {navItems.map((item) => (
            <li className="hidden md:block">
              <Anchor to={item.to}>{item.label}</Anchor>
            </li>
          ))}
        </ul>
        <ul className="flex gap-8 items-center">
          <li>
            <SecondaryButton>
              <FaPhoneAlt className="h-4 w-4" />
            </SecondaryButton>
          </li>
          <li className="hidden md:block">
            <SecondaryButton>SignIn</SecondaryButton>
          </li>
          <li>
            <PrimaryButton>Continue</PrimaryButton>
          </li>
          <li className="md:hidden ">
            <button onClick={toggleSidebar}>
              <RxHamburgerMenu className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
