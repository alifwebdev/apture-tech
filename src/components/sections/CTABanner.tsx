import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{ backgroundColor:"var(--bg2)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div className="cta-box" style={{ backgroundColor:"var(--bg)", borderRadius:16, padding:"72px 60px", position:"relative", overflow:"hidden", border:"1px solid var(--border)" }}>
          <div style={{ position:"absolute", top:"-40%", right:"-8%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.12) 0%,transparent 65%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-30%", left:"-4%", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.06) 0%,transparent 65%)", pointerEvents:"none" }} />

          <div className="cta-inner" style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr auto", gap:40, alignItems:"center" }}>
            <div>
              <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:16, textDecoration:"underline", textUnderlineOffset:4 }}>LET&apos;S TALK</p>
              <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(28px,6vw,72px)", lineHeight:1.0, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>
                ABOUT YOUR NEXT<br/>
                <span style={{ WebkitTextStroke:"2px var(--red)", WebkitTextFillColor:"transparent" }}>PROJECT</span>{" "}YOUR<br/>
                MIND
              </h2>
            </div>
            <div style={{ flexShrink:0 }}>
              <Link href="/contact" className="cta-btn" style={{ display:"inline-block", backgroundColor:"var(--red)", color:"#fff", padding:"14px 30px", borderRadius:50, fontSize:14, fontWeight:600, fontFamily:"var(--fb)", textDecoration:"none", border:"2px solid var(--red)", transition:"all .2s", whiteSpace:"nowrap", letterSpacing:".02em" }}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .cta-btn:hover { background:transparent!important; color:var(--red)!important; }
        @media(max-width:680px){
          .cta-inner { grid-template-columns:1fr!important; }
          .cta-btn   { margin-top:20px!important; }
          .cta-box   { padding:44px 28px!important; }
        }
        @media(max-width:480px){
          .cta-box { padding:32px 20px!important; border-radius:12px!important; }
        }
      `}</style>
    </section>
  );
}
