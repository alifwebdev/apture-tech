import Link from "next/link";
import { Monitor, Code2, Smartphone, Layers, Zap, Target } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string,React.ElementType> = { Monitor, Code2, Smartphone, Layers, Zap, Target };

export default function ServicesPreview() {
  const svcs = services.slice(0, 4);
  return (
    /* Exact PDF: dark bg2 section, left label, right 2×2 service cards with red circle icons */
    <section style={{ backgroundColor:"var(--bg2)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div className="sv-layout" style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:56, alignItems:"start" }}>

          {/* Left — exact PDF: underlined red label, bold heading, pill button */}
          <div>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>WHAT WE DO</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(28px,4vw,44px)", lineHeight:1.1, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", marginBottom:28 }}>
              We Work<br/>Performed For<br/>Client Happy
            </h2>
            <Link href="/services" className="sv-cta" style={{ display:"inline-block", backgroundColor:"var(--red)", color:"#fff", padding:"11px 26px", borderRadius:50, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", textDecoration:"none", border:"2px solid var(--red)", transition:"all .2s" }}>
              View All Services
            </Link>
          </div>

          {/* Right — 2×2 grid, each card has red circle icon + number watermark */}
          <div className="sv-cards" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2, backgroundColor:"var(--border)", border:"1px solid var(--border)", borderRadius:4, overflow:"hidden" }}>
            {svcs.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.id} className="sv-card" style={{ backgroundColor:"var(--bg)", padding:"30px 26px", position:"relative", transition:"background .25s" }}>
                  {/* Number watermark — top right, exact PDF */}
                  <div style={{ position:"absolute", top:14, right:18, fontFamily:"var(--fh)", fontWeight:900, fontSize:24, color:"rgba(255,45,85,.08)", lineHeight:1 }}>
                    {String(i+1).padStart(2,"0")}
                  </div>
                  {/* Red circle icon — exact PDF */}
                  <div className="sv-ico" style={{ width:54, height:54, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.12)", border:"1.5px solid rgba(255,45,85,.3)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18, color:"var(--red)", transition:"all .25s" }}>
                    <Icon size={22} strokeWidth={1.5}/>
                  </div>
                  <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:19, color:"var(--white)", letterSpacing:".01em", marginBottom:9 }}>{s.title}</h3>
                  <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.72, marginBottom:16 }}>{s.description.slice(0,90)}…</p>
                  <Link href={`/services#${s.id}`} className="rm" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)", fontWeight:500, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:3, transition:"gap .2s" }}>
                    Read More ›
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        .sv-card:hover { background-color:var(--bg2)!important; }
        .sv-card:hover .sv-ico { background:rgba(255,45,85,.22)!important; }
        .rm:hover { gap:7px!important; }
        .sv-cta:hover { background:transparent!important; color:var(--red)!important; }
        @media(max-width:860px) { .sv-layout{grid-template-columns:1fr!important;gap:36px!important} }
        @media(max-width:580px) { .sv-cards{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
