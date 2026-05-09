import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of web design, app development, and digital projects.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ backgroundColor:"var(--bg)", paddingTop:140, paddingBottom:80, borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-25%", left:"-8%", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.08) 0%,transparent 65%)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
            <Link href="/" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none" }}>Home</Link>
            <span style={{ color:"var(--red)" }}>›</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)" }}>Projects</span>
          </div>
          <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>CASE STUDY</p>
          <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(38px,7vw,78px)", lineHeight:1.0, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", maxWidth:700, marginBottom:18 }}>
            A Diversified<br/><span style={{ color:"var(--red)" }}>Resilient</span> Projects.
          </h1>
          <p style={{ fontFamily:"var(--fb)", fontSize:16, color:"var(--grey)", maxWidth:480, lineHeight:1.75 }}>
            Each project built with intention, shipped with precision, measured by results.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{ backgroundColor:"var(--bg)", padding:"80px 0 90px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }} className="port-pg-grid">
            {portfolio.map((p, i) => (
              <Link key={p.id} id={p.id} href={`/portfolio#${p.id}`} className="port-pg-card" style={{
                display:"block", textDecoration:"none",
                backgroundColor:"var(--bg2)", border:"1px solid var(--border)",
                borderRadius:12, overflow:"hidden", transition:"all .3s",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}>
                {/* Thumb */}
                <div style={{ height:i===0?300:190, backgroundColor:`${p.color}0d`, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                  <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(135deg,${p.color}15 0%,transparent 60%)` }}/>
                  <div style={{ position:"absolute", top:12, left:12, backgroundColor:"var(--red)", color:"#fff", fontFamily:"var(--fb)", fontSize:10, fontWeight:600, letterSpacing:".06em", padding:"3px 9px", borderRadius:4 }}>{p.category}</div>
                  <div style={{ position:"absolute", top:12, right:12, backgroundColor:"rgba(0,0,0,.6)", color:"rgba(255,255,255,.55)", fontFamily:"var(--fb)", fontSize:11, padding:"3px 9px", borderRadius:4 }}>{p.year}</div>
                  <div style={{ width:i===0?80:60, height:i===0?80:60, borderRadius:12, backgroundColor:`${p.color}1e`, border:`1px solid ${p.color}35`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", zIndex:1 }}>
                    <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:i===0?28:20, color:p.color }}>{p.title.charAt(0)}</span>
                  </div>
                </div>
                {/* Info */}
                <div style={{ padding:i===0?"24px 26px":"18px 20px" }}>
                  <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:i===0?21:16, color:"var(--white)", letterSpacing:".01em", marginBottom:7 }}>{p.title}</h3>
                  <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.72, marginBottom:12 }}>{p.description}</p>
                  <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontFamily:"var(--fb)", fontSize:11, color:"var(--muted)", padding:"2px 8px", border:"1px solid var(--border)", borderRadius:50 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner/>

      <style>{`
        .port-pg-card:hover { border-color:rgba(255,45,85,.3)!important; transform:translateY(-4px); box-shadow:0 18px 48px rgba(0,0,0,.5); }
        @media(max-width:860px){ .port-pg-grid{grid-template-columns:1fr 1fr!important} .port-pg-card{grid-column:span 1!important} }
        @media(max-width:560px){ .port-pg-grid{grid-template-columns:1fr!important} }
      `}</style>
    </>
  );
}
