"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NextSiteButtonContext = createContext();

export function NextButtonProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [infoStatus, setInfoStatus] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/explore") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pathname]);

  return (
    <NextSiteButtonContext.Provider
      value={{ visible, setVisible, infoStatus, setInfoStatus }}>
      {children}
    </NextSiteButtonContext.Provider>
  );
}

export const useNextSiteButtonContext = () => useContext(NextSiteButtonContext);
