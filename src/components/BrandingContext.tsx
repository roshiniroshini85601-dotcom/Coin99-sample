"use client";
import React, { createContext, useContext, useState } from "react";

type BrandingContextType = {
  activeTitle: string;
  setActiveTitle: (title: string) => void;
};

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);
export function BrandingProvider({ children }: { children: React.ReactNode }) {
  const [activeTitle, setActiveTitle] = useState("TOKEN");

  return (
    <BrandingContext.Provider value={{ activeTitle, setActiveTitle }}>
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error("useBranding must be used within a BrandingProvider");
  }
  return context;
}
