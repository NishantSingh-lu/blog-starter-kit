"use client";

import styles from "./switch.module.css";
import { useEffect, useState } from "react";
import { STORAGE_KEY } from "@/lib/theme";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const modes: ColorSchemePreference[] = ["system", "dark", "light"];

let updateDOM: () => void;

export const ThemeSwitcher = () => {
  const [mode, setMode] = useState<ColorSchemePreference>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEY) ?? "system") as ColorSchemePreference;
    } catch {
      return "system";
    }
  });

  useEffect(() => {
    updateDOM = window.updateDOM;
    addEventListener("storage", (e: StorageEvent): void => {
      e.key === STORAGE_KEY && setMode(e.newValue as ColorSchemePreference);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    updateDOM();
  }, [mode]);

  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  return (
    <button
      suppressHydrationWarning
      className={styles.switch}
      onClick={handleModeSwitch}
    />
  );
};
