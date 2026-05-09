import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { Monitor, Code2, Smartphone, Layers, Zap, Target, CheckCircle2 } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service web and app design & development for ambitious companies.",
};

const iconMap: Record<string, React.ElementType> = { Monitor, Code2, Smartphone, Layers, Zap, Target };

const process = [
  { num:"01", title:"Discovery",  desc:"Deep-dive into your goals, users, and competitive landscape." },
  { num:"02", title:"Strategy",   desc:"Sitemap, user flows, content hierarchy, and KPIs mapped out." },
  { num:"03", title:"Design",     desc:"High-fidelity UI on a pixel-perfect design system." },
  { num:"04", title:"Build",      desc:"Clean, performant code shipped in fast weekly sprints." },
  { num:"05", title:"Launch",     desc:"QA, performance tuning, and a staged zero-drama go-live." },
  { num:"06", title:"Grow",       desc:"Post-launch analytics, iterations, and ongoing support." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ backgroundColor:"var(--bg)", paddingTop:140, paddingBottom:80, borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-25%", right:"-8%", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.1) 0%,transparent 65%)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
            <Link href="/" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none" }}>Home</Link>
            <span style={{ color:"var(--red)" }}>›</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)" }}>Services</span>
          </div>
          <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>WHAT WE DO</p>
          <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(38px,7vw,78px)", lineHeight:1.0, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", maxWidth:700, marginBottom:18 }}>
            Everything You Need<br/>to <span style={{ color:"var(--red)" }}>Dominate</span> Online.
          </h1>
          <p style={{ fontFamily:"var(--fb)", fontSize:16, color:"var(--grey)", maxWidth:480, lineHeight:1.75 }}>
            End-to-end digital services — from brand strategy to shipped code — all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor:"var(--bg)", padding:"90px 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2, backgroundColor:"var(--border)", border:"1px solid var(--border)", borderRadius:4, overflow:"hidden" }} className="sv-pg-grid">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon];
              return (
                <div key={svc.id} id={svc.id} className="sv-pg-card" style={{ backgroundColor:"var(--bg)", padding:"38px 32px", position:"relative", transition:"background .25s" }}>
                  <div style={{ position:"absolute", top:18, right:22, fontFamily:"var(--fh)", fontWeight:900, fontSize:26, color:"rgba(255,45,85,.07)", lineHeight:1 }}>{svc.number}</div>
                  <div className="sv-pg-ico" style={{ width:56, height:56, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.1)", border:"1.5px solid rgba(255,45,85,.25)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:22, color:"var(--red)", transition:"all .25s" }}>
                    <Icon size={22} strokeWidth={1.5}/>
                  </div>
                  <h3 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:21, color:"var(--white)", letterSpacing:".01em", marginBottom:10 }}>{svc.title}</h3>
                  <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.78, marginBottom:20 }}>{svc.description}</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:7, marginBottom:22 }}>
                    {svc.features.map(f => (
                      <li key={f} style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)" }}>
                        <CheckCircle2 size={13} style={{ color:"var(--red)", flexShrink:0 }}/>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="sv-pg-rm" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)", fontWeight:500, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:3, transition:"gap .2s" }}>
                    Get Started ›
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor:"var(--bg2)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>HOW WE WORK</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(30px,5vw,54px)", lineHeight:1.05, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>Our 6-Step Process</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2, backgroundColor:"var(--border)", border:"1px solid var(--border)", borderRadius:4, overflow:"hidden" }} className="proc-pg-grid">
            {process.map((s, i) => (
              <div key={s.num} className="proc-pg-card" style={{ backgroundColor:"var(--bg)", padding:"34px 30px", position:"relative", transition:"background .25s", borderBottom:i<3?"1px solid var(--border)":"none" }}>
                <div style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:46, color:"rgba(255,45,85,.07)", lineHeight:1, marginBottom:14 }}>{s.num}</div>
                <h4 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:20, color:"var(--white)", letterSpacing:".01em", marginBottom:9 }}>{s.title}</h4>
                <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.75 }}>{s.desc}</p>
                <div className="proc-line" style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,var(--red),transparent)", opacity:0, transition:"opacity .25s" }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner/>

      <style>{`
        .sv-pg-card:hover { background-color:var(--bg2)!important; }
        .sv-pg-card:hover .sv-pg-ico { background:rgba(255,45,85,.2)!important; }
        .sv-pg-rm:hover { gap:7px!important; }
        .proc-pg-card:hover { background-color:var(--bg2)!important; }
        .proc-pg-card:hover .proc-line { opacity:1!important; }
        @media(max-width:860px){ .sv-pg-grid,.proc-pg-grid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:560px){ .sv-pg-grid,.proc-pg-grid{grid-template-columns:1fr!important} }
      `}</style>
    </>
  );
}
