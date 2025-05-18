import React, { createContext, useContext, useState, ReactNode } from "react";
import useObserver from "../../hooks/useObserver";

import { RefObject } from "react";

interface UIContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isHeroVisible: boolean;
  heroRef: RefObject<HTMLDivElement>;
  setHeroVisible: (x: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const {
    ref: heroRef,
    isVisible: isHeroVisible,
    setIsVisible: setHeroVisible,
  } = useObserver({ threshold: 0 });

  const toggleSidebar = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        heroRef,
        isHeroVisible,
        setHeroVisible,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within a UIProvider");
  return context;
};
