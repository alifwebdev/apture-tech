import { team } from "@/lib/data";

export default function TeamSection() {
  return (
    /* PDF: white bg, center heading, 4-col photo cards with name/role + ⊕ icon */
    <section style={{ backgroundColor:"var(--bg)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>

        {/* Centered header — exact PDF */}
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:10, textDecoration:"underline", textUnderlineOffset:4 }}>MEET OUR TEAM</p>
          <div style={{ width:32, height:1, backgroundColor:"var(--border)", margin:"0 auto 16px" }} />
          <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(26px,4vw,46px)", lineHeight:1.1, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>
            This Is Our Growing<br/>Great Team.
          </h2>
        </div>

        {/* 4-col team grid */}
        <div className="tm-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18 }}>
          {team.map(m => (
            <div key={m.name} className="tm-card" style={{ backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:10, overflow:"hidden", transition:"all .25s" }}>
              {/* Photo area */}
              <div style={{ height:240, backgroundColor:"var(--bg3)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#252525,#111)" }} />
                <div style={{ width:88, height:88, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.1)", border:"2px solid rgba(255,45,85,.22)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", zIndex:1 }}>
                  <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:28, color:"var(--red)" }}>{m.name.charAt(0)}</span>
                </div>
                {/* ⊕ icon — exact PDF top-left */}
                <div style={{ position:"absolute", top:11, left:11, width:26, height:26, borderRadius:"50%", border:"1px solid var(--border)", backgroundColor:"var(--bg2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ color:"var(--red)", fontSize:15, lineHeight:1, fontWeight:700 }}>+</span>
                </div>
              </div>
              {/* Name/role row */}
              <div style={{ padding:"14px 16px" }}>
                <h4 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:16, color:"var(--white)", marginBottom:3 }}>{m.name}</h4>
                <p style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)" }}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.tm-card:hover{border-color:rgba(255,45,85,.3)!important;transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.5);} @media(max-width:860px){.tm-grid{grid-template-columns:repeat(2,1fr)!important}} @media(max-width:480px){.tm-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
