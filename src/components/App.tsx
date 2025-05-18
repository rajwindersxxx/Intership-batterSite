import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Calculate from "./pages/Calcluate";
import Header from "./sections/Header";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "../store";
import { UIProvider } from "./context/UIContext";
import Footer from "./ui/Footer";
import Start from "./pages/Start";
import SideNav from "./ui/SideNav";

export default function App() {
  // temp solution

  return (
    <div className="transition-all md:text-base text-sm grid grid-rows-[auto_1fr_auto] h-screen relative">
      <Provider store={store}>
        <UIProvider>
          <BrowserRouter>
            <Header />
            <SideNav />

            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="calculator" element={<Calculate />} />
              <Route path="start" element={<Start />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UIProvider>
      </Provider>
    </div>
  );
}
