const partners = ["abc.com","@tuenti","ariete","egenslab","my life","vindicia","bloghus","Jones Lang","gather","insidehotel"];

export default function NewsletterPartners() {
  return (
    <section style={{ borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div className="np-wrap" style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>

        {/* LEFT */}
        <div className="np-left" style={{ padding:"72px 52px", background:"linear-gradient(135deg, rgba(255,45,85,.28) 0%, rgba(140,10,22,.88) 100%)", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)", backgroundSize:"18px 18px", pointerEvents:"none" }} />
          <div style={{ position:"relative", zIndex:1 }}>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:11, color:"rgba(255,255,255,.6)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:8 }}>Get In Touch</p>
            <h3 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(24px,4vw,52px)", lineHeight:1.04, letterSpacing:".02em", textTransform:"uppercase", color:"#fff", marginBottom:32 }}>
              SUBSCRIBE OUR<br/><span style={{ color:"rgba(255,255,255,.22)", fontStyle:"italic", textTransform:"lowercase" }}>Newsletter</span>
            </h3>
            <div style={{ display:"flex", maxWidth:400 }}>
              <input type="email" placeholder="Enter Your Email" style={{ flex:1, padding:"13px 18px", borderRadius:"50px 0 0 50px", border:"none", backgroundColor:"rgba(255,255,255,.12)", color:"#fff", fontSize:13, fontFamily:"var(--fb)", outline:"none", backdropFilter:"blur(8px)", minWidth:0 }} />
              <button className="nl-btn" style={{ backgroundColor:"var(--red)", color:"#fff", padding:"13px 20px", borderRadius:"0 50px 50px 0", border:"none", fontSize:12, fontWeight:700, fontFamily:"var(--fb)", cursor:"pointer", letterSpacing:".08em", transition:"background .2s", whiteSpace:"nowrap" }}>CONNECT</button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="np-right" style={{ padding:"56px 48px", backgroundColor:"var(--bg2)" }}>
          <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:11, color:"var(--red)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:8, textDecoration:"underline", textUnderlineOffset:4 }}>OUR PARTNER</p>
          <h3 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(20px,3.5vw,40px)", lineHeight:1.1, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", marginBottom:28 }}>
            Join Our<br/>AptureTech<br/>Community.
          </h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }} className="np-logos">
            {partners.map(p => (
              <div key={p} className="pt" style={{ padding:"9px 6px", border:"1px solid var(--border)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", transition:"border-color .2s" }}>
                <span style={{ fontFamily:"var(--fb)", fontWeight:500, fontSize:10, color:"var(--muted)", textAlign:"center" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .nl-btn:hover { background:var(--red-h)!important; }
        .pt:hover     { border-color:rgba(255,45,85,.4)!important; }
        @media(max-width:780px){
          .np-wrap  { grid-template-columns:1fr!important; }
          .np-left  { padding:48px 28px!important; }
          .np-right { padding:44px 28px!important; }
          .np-logos { grid-template-columns:repeat(5,1fr)!important; }
        }
        @media(max-width:480px){
          .np-left  { padding:36px 20px!important; }
          .np-right { padding:36px 20px!important; }
          .np-logos { grid-template-columns:repeat(3,1fr)!important; }
        }
      `}</style>
    </section>
  );
}
