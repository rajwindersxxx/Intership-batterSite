import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Calculate from "./pages/Calcluate";
import Header from "./Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="transition-all">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="calculator" element={<Calculate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
