/* PDF: left = "Why Choose" heading + video card with play button
        right = b&w photo + 4 red skill progress bars with % labels */
const skills = [
  { label:"Web Design",      pct:90 },
  { label:"App Development", pct:98 },
  { label:"Backend",         pct:80 },
  { label:"Video Animation", pct:85 },
];

export default function WhyUs() {
  return (
    <section style={{ backgroundColor:"var(--bg2)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div className="wu-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>

          {/* LEFT */}
          <div>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:10, textDecoration:"underline", textUnderlineOffset:4 }}>WHY CHOOSE APTURETECH</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(24px,3.5vw,42px)", lineHeight:1.1, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", marginBottom:28 }}>
              Success Is Just Around<br/>The Next Online Corner
            </h2>
            {/* Video card — exact PDF: red overlay + circular play button */}
            <div style={{ borderRadius:14, height:290, backgroundColor:"var(--bg3)", border:"1px solid var(--border)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(255,45,85,.4),rgba(0,0,0,.65))" }} />
              <button className="play-btn" style={{ position:"relative", zIndex:1, width:60, height:60, borderRadius:"50%", border:"2px solid rgba(255,255,255,.8)", backgroundColor:"rgba(255,255,255,.12)", backdropFilter:"blur(8px)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", transition:"all .2s" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <div style={{ position:"absolute", bottom:14, left:14, fontFamily:"var(--fb)", fontSize:11, color:"rgba(255,255,255,.5)", letterSpacing:".06em" }}>▶ Play now</div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* B&W style photo placeholder */}
            <div style={{ borderRadius:14, height:210, backgroundColor:"var(--bg3)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:28, overflow:"hidden", position:"relative" }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#2a2a2a,#111)" }} />
              <span style={{ position:"relative", fontSize:44, opacity:.3 }}>🖥️</span>
            </div>
            {/* Skill bars — exact PDF: label left, % right, thin red bar */}
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              {skills.map(s => (
                <div key={s.label}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                    <span style={{ fontFamily:"var(--fb)", fontSize:14, color:"var(--white)", fontWeight:400 }}>{s.label}</span>
                    <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", fontWeight:400 }}>{s.pct}%</span>
                  </div>
                  {/* Track + red fill */}
                  <div style={{ height:2, backgroundColor:"var(--border)", borderRadius:2, overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${s.pct}%`, backgroundColor:"var(--red)", borderRadius:2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`.play-btn:hover{background:rgba(255,45,85,.4)!important;transform:scale(1.08);} @media(max-width:820px){.wu-grid{grid-template-columns:1fr!important;gap:36px!important}}`}</style>
    </section>
  );
}
