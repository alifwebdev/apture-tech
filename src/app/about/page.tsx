import type { Metadata } from "next";
import Link from "next/link";
import { team, stats } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind AptureTech — designers and developers obsessed with exceptional digital experiences.",
};

const values = [
  { num:"01", title:"Craft Over Shortcuts",   desc:"Every line of code, every pixel, every word is considered. We never cut corners." },
  { num:"02", title:"Results, Not Vanity",     desc:"Pretty design means nothing if it doesn't perform. We obsess over the metrics that grow your business." },
  { num:"03", title:"Radical Transparency",    desc:"No smoke and mirrors. You'll always know exactly what we're building and how it's performing." },
  { num:"04", title:"Partnership, Not Vendor", desc:"We think of ourselves as an extension of your team. Your success is literally our success." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:"var(--bg)", paddingTop:140, paddingBottom:80, borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", bottom:"-20%", right:"-6%", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.09) 0%,transparent 65%)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
            <Link href="/" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none" }}>Home</Link>
            <span style={{ color:"var(--red)" }}>›</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)" }}>About Us</span>
          </div>
          <div className="ab-hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"flex-end" }}>
            <div>
              <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>ABOUT US</p>
              <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(38px,7vw,78px)", lineHeight:1.0, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>
                We Build <span style={{ color:"var(--red)" }}>Bold</span><br/>Things for Bold<br/>Companies.
              </h1>
            </div>
            <div>
              <p style={{ fontFamily:"var(--fb)", fontSize:16, color:"var(--grey)", lineHeight:1.8, marginBottom:18 }}>
                Founded in 2021, AptureTech started with a simple belief: most agencies ship boring work. We set out to change that.
              </p>
              <p style={{ fontFamily:"var(--fb)", fontSize:14, color:"var(--muted)", lineHeight:1.8 }}>
                Today we're a team of 12 designers, developers, and strategists who've helped companies from scrappy startups to established enterprises transform their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor:"var(--bg3)", borderBottom:"1px solid var(--border)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="ab-st-grid">
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign:"center", padding:"48px 0", borderRight:i<stats.length-1?"1px solid var(--border)":"none" }}>
              <div style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:48, color:i%2===0?"var(--red)":"var(--white)", letterSpacing:"-.02em", lineHeight:1, marginBottom:6 }}>{s.value}</div>
              <div style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor:"var(--bg)", padding:"90px 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
          <div style={{ marginBottom:56 }}>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>OUR VALUES</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(30px,5vw,54px)", lineHeight:1.05, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>
              How We Show Up<br/>Every Single Day
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:2, backgroundColor:"var(--border)", border:"1px solid var(--border)", borderRadius:4, overflow:"hidden" }} className="ab-val-grid">
            {values.map((v, i) => (
              <div key={v.num} className="ab-val-card" style={{ backgroundColor:"var(--bg)", padding:"38px 34px", transition:"background .25s", position:"relative" }}>
                <div style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:46, color:"rgba(255,45,85,.07)", lineHeight:1, marginBottom:14 }}>{v.num}</div>
                <h3 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:21, color:"var(--white)", letterSpacing:".01em", textTransform:"uppercase", marginBottom:9 }}>{v.title}</h3>
                <p style={{ fontFamily:"var(--fb)", fontSize:14, color:"var(--grey)", lineHeight:1.78 }}>{v.desc}</p>
                <div className="ab-val-line" style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,var(--red),transparent)", opacity:0, transition:"opacity .25s" }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor:"var(--bg2)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
          <div style={{ textAlign:"center", marginBottom:54 }}>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:10, textDecoration:"underline", textUnderlineOffset:4 }}>MEET OUR TEAM</p>
            <div style={{ width:30, height:1, backgroundColor:"var(--border)", margin:"0 auto 16px" }}/>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(26px,4vw,46px)", lineHeight:1.08, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>
              This Is Our Growing<br/>Great Team.
            </h2>
          </div>
          <div className="ab-tm-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
            {team.map(m => (
              <div key={m.name} className="ab-tm-card" style={{ backgroundColor:"var(--bg)", border:"1px solid var(--border)", borderRadius:10, overflow:"hidden", transition:"all .25s" }}>
                <div style={{ height:240, backgroundColor:"var(--bg3)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#252525,#111)" }}/>
                  <div style={{ width:88, height:88, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.1)", border:"2px solid rgba(255,45,85,.2)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", zIndex:1 }}>
                    <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:28, color:"var(--red)" }}>{m.name.charAt(0)}</span>
                  </div>
                  <div style={{ position:"absolute", top:11, left:11, width:26, height:26, borderRadius:"50%", border:"1px solid var(--border)", backgroundColor:"var(--bg2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ color:"var(--red)", fontSize:15, fontWeight:700, lineHeight:1 }}>+</span>
                  </div>
                </div>
                <div style={{ padding:"14px 16px" }}>
                  <h4 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:16, color:"var(--white)", marginBottom:3 }}>{m.name}</h4>
                  <p style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)" }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner/>

      <style>{`
        .ab-val-card:hover { background-color:var(--bg2)!important; }
        .ab-val-card:hover .ab-val-line { opacity:1!important; }
        .ab-tm-card:hover { border-color:rgba(255,45,85,.3)!important; transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,.5); }
        @media(max-width:860px){ .ab-hero-grid,.ab-val-grid{grid-template-columns:1fr!important} .ab-st-grid,.ab-tm-grid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:480px){ .ab-tm-grid{grid-template-columns:1fr!important} }
      `}</style>
    </>
  );
}
