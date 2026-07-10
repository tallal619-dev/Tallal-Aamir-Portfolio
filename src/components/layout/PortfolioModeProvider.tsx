"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { PortfolioMode } from "@/data/portfolio";
import { portfolioModeCopy } from "@/data/portfolio";

const storageKey = "tallal-portfolio-mode-v3";

interface PortfolioModeContextValue {
  mode: PortfolioMode;
  content: typeof portfolioModeCopy[PortfolioMode];
  switchMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextValue | null>(null);

function isPortfolioMode(value: string | null): value is PortfolioMode {
  return value === "shopify" || value === "fullStack";
}

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>("shopify");
  const storageReady = useRef(false);

  useEffect(() => {
    let frame = 0;
    const storedMode = window.localStorage.getItem(storageKey);

    frame = window.requestAnimationFrame(() => {
      storageReady.current = true;

      if (isPortfolioMode(storedMode)) {
        setMode(storedMode);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.portfolioMode = mode;

    if (storageReady.current) {
      window.localStorage.setItem(storageKey, mode);
    }
  }, [mode]);

  const switchMode = useCallback(
    (nextMode: PortfolioMode) => {
      if (nextMode === mode) {
        return;
      }

      setMode(nextMode);
    },
    [mode]
  );

  const toggleMode = useCallback(() => {
    switchMode(mode === "shopify" ? "fullStack" : "shopify");
  }, [mode, switchMode]);

  const value = useMemo(
    () => ({
      mode,
      content: portfolioModeCopy[mode],
      switchMode,
      toggleMode
    }),
    [mode, switchMode, toggleMode]
  );

  return <PortfolioModeContext.Provider value={value}>{children}</PortfolioModeContext.Provider>;
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);

  if (!context) {
    throw new Error("usePortfolioMode must be used inside PortfolioModeProvider");
  }

  return context;
}
