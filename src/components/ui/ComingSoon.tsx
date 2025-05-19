import { FaClock } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

function ComingSoon() {
  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center space-y-4">
        <div className="flex justify-center text-yellow-600">
          <MdConstruction size={48} />
        </div>
        <h1 className="text-3xl font-bold text-gray-00">Coming Soon</h1>
        <p className="text-gray-600">
          Our website is currently under construction. We’re working to bring
          something amazing. Stay tuned!
        </p>
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <FaClock size={20} />
          <span>Launching Soon</span>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
