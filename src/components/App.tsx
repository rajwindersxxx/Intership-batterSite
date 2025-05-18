import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Calculate from "./pages/Calcluate";
import Header from "./sections/Header";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "../store";
import { UIProvider } from "./context/UIContext";

export default function App() {
  // temp solution

  return (
    <div className="transition-all md:text-base text-sm">
      <Provider store={store}>
        <UIProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="calculator" element={<Calculate />} />
            </Routes>
          </BrowserRouter>
        </UIProvider>
      </Provider>
    </div>
  );
}
