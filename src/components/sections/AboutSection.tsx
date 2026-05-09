import Link from "next/link";

export default function AboutSection() {
  return (
    /* PDF: white bg section, left text, right stacked images with stat pills */
    <section style={{ backgroundColor:"var(--bg)", padding:"90px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div className="ab-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>

          {/* LEFT */}
          <div>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>ABOUT US</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(28px,4.5vw,50px)", lineHeight:1.08, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", marginBottom:18 }}>
              Direction With Our<br/>Company.
            </h2>
            <p style={{ fontFamily:"var(--fb)", fontSize:14, color:"var(--grey)", lineHeight:1.82, marginBottom:28 }}>
              We are a team of passionate designers and developers dedicated to crafting exceptional digital experiences. Since 2021 we've helped 80+ companies transform their online presence and achieve measurable growth.
            </p>

            {/* Mission row — exact PDF layout */}
            <div style={{ display:"flex", alignItems:"flex-start", gap:14, padding:"16px 18px", backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:10, marginBottom:18 }}>
              <div style={{ width:44, height:44, borderRadius:10, backgroundColor:"rgba(255,45,85,.1)", border:"1px solid rgba(255,45,85,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:20 }}>🎯</div>
              <div>
                <h4 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:15, color:"var(--white)", marginBottom:3 }}>Our Mission</h4>
                <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.65 }}>To build digital products that grow businesses — measurably, sustainably, beautifully.</p>
              </div>
            </div>

            {/* CTO / Founder pill — exact PDF */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"7px 14px 7px 7px", backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:50, marginBottom:30 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:12, color:"var(--red)" }}>AC</span>
              </div>
              <div>
                <div style={{ fontFamily:"var(--fb)", fontSize:10, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase" }}>CTO &amp; FOUNDER</div>
                <div style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:13, color:"var(--white)", fontStyle:"italic" }}>Alex Carter</div>
              </div>
            </div>

            <br/>
            <Link href="/about" className="ab-btn" style={{ display:"inline-block", backgroundColor:"var(--red)", color:"#fff", padding:"11px 26px", borderRadius:50, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", textDecoration:"none", border:"2px solid var(--red)", transition:"all .2s" }}>
              About More
            </Link>
          </div>

          {/* RIGHT — stacked images with stat pills, exact PDF layout */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"auto auto", gap:14 }}>
            {/* Top span-2 image */}
            <div style={{ gridColumn:"1/-1", borderRadius:14, height:210, backgroundColor:"var(--bg3)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", position:"relative" }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#2a2a2a,#111)" }} />
              <span style={{ position:"relative", fontSize:44, opacity:.4 }}>🏢</span>
            </div>
            {/* Bottom-left with skill stat pills */}
            <div style={{ borderRadius:14, height:175, backgroundColor:"var(--bg2)", border:"1px solid var(--border)", overflow:"hidden", position:"relative", display:"flex", alignItems:"flex-end", padding:12 }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#1a1a1a,var(--bg2))" }} />
              <div style={{ display:"flex", gap:8, flexWrap:"wrap", position:"relative", zIndex:1 }}>
                {[{l:"Web",s:"Clean Design"},{l:"App",s:"Developing"}].map(it => (
                  <div key={it.l} style={{ display:"flex", alignItems:"center", gap:7, backgroundColor:"rgba(0,0,0,.75)", borderRadius:50, padding:"5px 12px", backdropFilter:"blur(6px)", border:"1px solid var(--border)" }}>
                    {/* Circle % — exact PDF */}
                    <div style={{ width:28, height:28, borderRadius:"50%", border:"2px solid var(--red)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontFamily:"var(--fh)", fontSize:8, color:"var(--red)", fontWeight:900 }}>50%</span>
                    </div>
                    <div>
                      <div style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:11, color:"#fff", lineHeight:1.1 }}>{it.l}</div>
                      <div style={{ fontFamily:"var(--fb)", fontSize:10, color:"var(--grey)", lineHeight:1 }}>{it.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom-right image */}
            <div style={{ borderRadius:14, height:175, backgroundColor:"var(--bg3)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:36, opacity:.35 }}>🤝</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`.ab-btn:hover{background:transparent!important;color:var(--red)!important;} @media(max-width:820px){.ab-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}
