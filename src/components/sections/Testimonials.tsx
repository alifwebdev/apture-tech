"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    /* PDF: dark bg, giant " quote marks, centered avatar, italic text, gold stars, numbered nav */
    <section style={{ backgroundColor:"var(--bg3)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:720, margin:"0 auto", padding:"0 28px", textAlign:"center", position:"relative" }}>
        {/* Giant decorative quotes — exact PDF */}
        <div style={{ fontFamily:"serif", fontSize:140, lineHeight:.8, color:"rgba(255,45,85,.07)", fontWeight:900, userSelect:"none", marginBottom:-24, letterSpacing:"-.05em" }}>"</div>

        {/* Avatar */}
        <div style={{ width:74, height:74, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.12)", border:"3px solid rgba(255,45,85,.3)", margin:"0 auto 11px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:24, color:"var(--red)" }}>{t.author.charAt(0)}</span>
        </div>

        {/* Name + role */}
        <div style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:19, color:"var(--white)", marginBottom:2 }}>{t.author}</div>
        <div style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--red)", letterSpacing:".05em", marginBottom:22 }}>{t.role}</div>

        {/* Quote text — exact PDF: italic, centered */}
        <p style={{ fontFamily:"var(--fb)", fontSize:15, color:"var(--grey)", lineHeight:1.85, marginBottom:26, fontStyle:"italic" }}>
          "{t.quote}"
        </p>

        {/* Gold stars — exact PDF */}
        <div style={{ display:"flex", justifyContent:"center", gap:4, marginBottom:32 }}>
          {[...Array(5)].map((_,j) => <span key={j} style={{ color:"#FFB800", fontSize:18 }}>★</span>)}
        </div>

        {/* Counter + arrows — exact PDF layout */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:28, color:"var(--white)", letterSpacing:"-.02em" }}>
            {i+1}{" "}<span style={{ color:"var(--muted)", fontWeight:400, fontSize:16 }}>/{testimonials.length}</span>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={() => setI(p => (p-1+testimonials.length)%testimonials.length)} className="ta" style={{ width:42, height:42, borderRadius:"50%", border:"1px solid var(--border)", backgroundColor:"transparent", color:"var(--white)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"all .2s" }}>
              <ChevronLeft size={17}/>
            </button>
            <button onClick={() => setI(p => (p+1)%testimonials.length)} style={{ width:42, height:42, borderRadius:"50%", border:"1px solid var(--red)", backgroundColor:"var(--red)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"all .2s" }}>
              <ChevronRight size={17}/>
            </button>
          </div>
        </div>
      </div>
      <style>{`.ta:hover{border-color:var(--red)!important;color:var(--red)!important;}`}</style>
    </section>
  );
}
