import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Calculate from "./pages/Calcluate";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "../store";
import { UIProvider } from "./context/UIContext";
import Footer from "./sections/Footer/Footer";
import Start from "./pages/Start";
import SideNav from "./sections/Header/SideNav";
import ScrollToTop from "./ui/ScrollToTop";
import Header from "./sections/Header/Header";

export default function App() {
  // temp solution

  return (
    <div className="transition-all md:text-base text-sm grid grid-rows-[auto_1fr_auto] ">
      <Provider store={store}>
        <UIProvider>
          <BrowserRouter>
            <ScrollToTop />
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
