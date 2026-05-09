"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  { num:"01", tag:"Creative Agency"  },
  { num:"02", tag:"Digital Studio"   },
  { num:"03", tag:"Tech Partners"    },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p+1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ minHeight:"100vh", backgroundColor:"var(--bg)", display:"flex", alignItems:"center", paddingTop:72, position:"relative", overflow:"hidden" }}>

      {/* Faint CREATIVE watermark */}
      <div style={{ position:"absolute", top:60, right:20, fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(40px,8vw,110px)", color:"rgba(255,255,255,0.04)", letterSpacing:".06em", userSelect:"none", pointerEvents:"none", lineHeight:1, textTransform:"uppercase" }}>
        CREATIVE
      </div>

      {/* Left dot indicators — hidden on mobile */}
      <div className="hero-dots" style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:12, zIndex:10 }}>
        {slides.map((_,i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            width:10, height:10, borderRadius:"50%", padding:0, cursor:"pointer",
            border:`2px solid ${i===idx ? "var(--red)" : "var(--border)"}`,
            backgroundColor: i===idx ? "var(--red)" : "transparent",
            transition:"all .3s",
          }} />
        ))}
      </div>

      {/* Right social — vertical text, hidden on mobile */}
      <div className="hero-social" style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", alignItems:"center", zIndex:10 }}>
        {["Linkedin","Instagram","Facebook"].map((s, i, arr) => (
          <div key={s} style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
            <a href="#" className="sv" style={{ writingMode:"vertical-rl", fontFamily:"var(--fb)", fontSize:11, color:"var(--muted)", textDecoration:"none", letterSpacing:".1em", padding:"14px 10px", transition:"color .2s" }}>{s}</a>
            {i < arr.length-1 && <span style={{ width:1, height:18, backgroundColor:"var(--border)" }} />}
          </div>
        ))}
      </div>

      {/* Slide number watermark — hidden on mobile */}
      <div className="hero-num" style={{ position:"absolute", right:48, bottom:40, fontFamily:"var(--fh)", fontWeight:900, fontSize:100, color:"rgba(255,255,255,0.04)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>
        {slides[idx].num}
      </div>

      {/* Main 2-col grid */}
      <div className="hero-grid" style={{ maxWidth:1200, margin:"0 auto", padding:"60px 64px", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, alignItems:"center", position:"relative", zIndex:2 }}>

        {/* LEFT — team photo placeholder */}
        <div className="hero-img" style={{ borderRadius:20, overflow:"hidden", height:480, backgroundColor:"var(--bg3)", border:"1px solid var(--border)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#222 0%,#0a0a0a 100%)" }} />
          <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
            <div style={{ width:96, height:96, borderRadius:"50%", border:"2px dashed rgba(255,255,255,0.15)", margin:"0 auto 14px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:30, color:"rgba(255,255,255,0.2)" }}>AT</span>
            </div>
            <p style={{ fontFamily:"var(--fb)", fontSize:11, color:"var(--muted)", letterSpacing:".1em", textTransform:"uppercase" }}>Place Team Photo Here</p>
          </div>
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"40%", background:"linear-gradient(to top, rgba(255,45,85,.2), transparent)" }} />
        </div>

        {/* RIGHT — red card */}
        <div className="hero-card" style={{ backgroundColor:"var(--red)", borderRadius:20, padding:"52px 48px", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize:"20px 20px", pointerEvents:"none" }} />
          <div style={{ position:"relative", zIndex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
              <span style={{ width:22, height:2, backgroundColor:"rgba(255,255,255,.5)", display:"inline-block" }} />
              <span style={{ fontFamily:"var(--fb)", fontSize:12, color:"rgba(255,255,255,.7)", letterSpacing:".1em", textTransform:"uppercase" }}>{slides[idx].tag}</span>
            </div>
            <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(28px,4.5vw,56px)", lineHeight:1.06, letterSpacing:".01em", textTransform:"uppercase", color:"#fff", marginBottom:18 }}>
              Best Solution For<br />
              Your{" "}
              <span style={{ color:"rgba(255,255,255,.28)", fontStyle:"italic", textTransform:"lowercase" }}>Business.</span>
            </h1>
            <p style={{ fontFamily:"var(--fb)", fontSize:14, color:"rgba(255,255,255,.72)", lineHeight:1.8, marginBottom:34, maxWidth:320 }}>
              AptureTech crafts premium digital experiences — web, mobile, and brand — for companies that demand results and refuse to blend in.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <Link href="/about" className="hb-dark" style={{ backgroundColor:"#1a1a1a", color:"#fff", padding:"12px 26px", borderRadius:50, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", textDecoration:"none", border:"2px solid #1a1a1a", transition:"all .2s", letterSpacing:".02em" }}>
                About Us
              </Link>
              <Link href="/services" className="hb-outline" style={{ backgroundColor:"transparent", color:"#fff", padding:"12px 26px", borderRadius:50, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", textDecoration:"none", border:"2px solid rgba(255,255,255,.5)", transition:"all .2s", letterSpacing:".02em" }}>
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hb-dark:hover    { background:rgba(255,255,255,.15)!important; border-color:rgba(255,255,255,.3)!important; }
        .hb-outline:hover { background:rgba(255,255,255,.15)!important; border-color:#fff!important; }
        .sv:hover         { color:var(--red)!important; }

        @media(max-width:820px){
          .hero-grid   { grid-template-columns:1fr!important; padding:40px 20px!important; gap:20px!important; }
          .hero-img    { height:260px!important; }
          .hero-dots   { display:none!important; }
          .hero-social { display:none!important; }
          .hero-num    { display:none!important; }
          .hero-card   { padding:36px 28px!important; }
        }
        @media(max-width:480px){
          .hero-card { padding:28px 20px!important; border-radius:14px!important; }
        }
      `}</style>
    </section>
  );
}
