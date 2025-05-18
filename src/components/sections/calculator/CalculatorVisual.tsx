import { useAppSelector } from "../../../hooks";

function CalculatorVisual() {
  const {
    monthlyPayment,
    princeInterest,
    taxes,
    insurance,
    hoaFees,
    utilities,
  } = useAppSelector((state) => state.calculator);
  const breakdown = [
    {
      label: "Principal & Interest",
      percent: Math.round((princeInterest / monthlyPayment) * 100),
      color: "bg-purple-900",
    },
    {
      label: "Taxes",
      percent: Math.round((taxes / monthlyPayment) * 100),
      color: "bg-gray-900",
    },
    {
      label: "Insurance",
      percent: Math.round((insurance / monthlyPayment) * 100),
      color: "bg-green-900",
    },
    {
      label: "HOA Fees",
      percent: Math.round((hoaFees / monthlyPayment) * 100),
      color: "bg-yellow-900",
    },
    {
      label: "Utilities",
      percent: Math.round((utilities / monthlyPayment) * 100),
      color: "bg-orange-900",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-md font-bold">Monthly payment breakdown</h3>
      <span className="font-bold text-4xl">${monthlyPayment}/mo</span>
      <div className="flex transition-all ">
        {breakdown.map((item, index) => (
          <div key={index}
            className={`py-10 rounded-full ${item.color} transition-all ease-in-out`}
            style={{ width: `${item.percent}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CalculatorVisual;
