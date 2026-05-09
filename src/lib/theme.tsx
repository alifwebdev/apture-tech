"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
interface Ctx { theme: Theme; toggle: () => void; }
const C = createContext<Ctx>({ theme:"dark", toggle:()=>{} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const s = localStorage.getItem("apture-theme") as Theme | null;
    if (s) { setTheme(s); document.documentElement.classList.toggle("light", s==="light"); }
  }, []);
  const toggle = () => {
    const n: Theme = theme === "dark" ? "light" : "dark";
    setTheme(n);
    document.documentElement.classList.toggle("light", n === "light");
    localStorage.setItem("apture-theme", n);
  };
  return <C.Provider value={{ theme, toggle }}>{children}</C.Provider>;
}
export const useTheme = () => useContext(C);
