import { BiDollarCircle, BiHome, BiMobile, BiShare } from "react-icons/bi";
import { BsCash, BsPercent } from "react-icons/bs";
const startPageButtons = [
  {
    label: "Buying a home",
    icon: <BiHome className="h-8 w-8 text-green-600" />,
  },
  {
    label: "Reference by mortgage",
    icon: <BiShare className="h-8 w-8 text-green-600" />,
  },
  {
    label: "Get cash from my home",
    icon: <BsCash className="h-8 w-8 text-green-600" />,
  },
];
function Start() {
  return (
    <div className="flex gap-8 flex-col items-stretch py-20 max-w-[570px] mx-auto">
      <h1 className="text-5xl font-bold text-center ">Hi, I'm Betsy!</h1>
      <h1 className="text-5xl font-bold text-center ">
        What can I help you with?
      </h1>
      {startPageButtons.map((item) => (
        <button className=" flex gap-4 items-center text-2xl border border-gray-300 px-8 py-4 hover:ring hover:ring-green-700 rounded-md transition-all">
          {item.icon} {item.label}
        </button>
      ))}
      <div className="flex gap-12 items-center justify-evenly py-12">
        <p className="flex flex-col gap-4 text-center">
          <span className="text-3xl font-bold">$100B</span> home loans funded
          entirely online
        </p>
        <p className="flex flex-col gap-4 text-center">
          <span className="text-3xl font-bold">400K</span> Customers who chose a
          Better Mortgage
        </p>
      </div>
      <div className="flex items-center gap-4 flex-col text-[1.1rem] ">
        <p className="">After a few questions, your'll unlock: </p>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-center">
            <BsPercent className="h-6 w-6 text-green-700"/> custom mortgage rates
          </li>
          <li className="flex gap-4 items-center">
            <BiDollarCircle className="h-6 w-6 text-green-700"/> Exclusive offers
          </li>
          <li className="flex gap-4 items-center">
            <BiMobile className="h-6 w-6 text-green-700"/> A personalized dashboard
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Start;
