"use client";
import { useTheme } from "@/lib/theme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="tt" style={{ display:"flex", alignItems:"center", gap:6, background:"transparent", border:"1px solid var(--border)", borderRadius:50, padding:"5px 11px 5px 7px", cursor:"pointer", color:"var(--grey)", fontSize:12, fontFamily:"var(--fb)", transition:"all .2s" }}>
      <span style={{ width:28, height:16, borderRadius:50, backgroundColor:dark?"var(--border)":"rgba(255,45,85,.15)", border:`1px solid ${dark?"var(--border)":"rgba(255,45,85,.35)"}`, position:"relative", display:"flex", alignItems:"center", transition:"all .3s", flexShrink:0 }}>
        <span style={{ width:10, height:10, borderRadius:"50%", backgroundColor:dark?"var(--muted)":"var(--red)", position:"absolute", left:dark?"2px":"14px", transition:"all .3s cubic-bezier(.34,1.56,.64,1)", boxShadow:dark?"none":"0 0 6px rgba(255,45,85,.5)" }}/>
      </span>
      {dark ? <Moon size={12} style={{ color:"var(--muted)" }}/> : <Sun size={12} style={{ color:"var(--red)" }}/>}
      <style>{`.tt:hover{border-color:rgba(255,45,85,.35)!important;}`}</style>
    </button>
  );
}
