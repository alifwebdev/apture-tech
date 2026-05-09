import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", backgroundColor:"var(--bg)", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:24, position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,45,85,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,45,85,.025) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }}/>
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(100px,22vw,200px)", lineHeight:1, color:"rgba(255,45,85,.07)", letterSpacing:"-.04em", userSelect:"none" }}>404</div>
        <p style={{ fontFamily:"var(--fb)", fontSize:11, color:"var(--red)", letterSpacing:".14em", textTransform:"uppercase", marginBottom:14, marginTop:-14 }}>Page Not Found</p>
        <p style={{ fontFamily:"var(--fb)", fontSize:15, color:"var(--grey)", maxWidth:340, margin:"0 auto 30px", lineHeight:1.75 }}>Looks like this page wandered off. Let's get you back on track.</p>
        <Link href="/" className="nf-b" style={{ display:"inline-block", backgroundColor:"var(--red)", color:"#fff", padding:"11px 28px", borderRadius:50, fontFamily:"var(--fb)", fontSize:13, fontWeight:600, textDecoration:"none", border:"2px solid var(--red)", transition:"all .2s", letterSpacing:".02em" }}>
          Back to Home
        </Link>
      </div>
      <style>{`.nf-b:hover{background:transparent!important;color:var(--red)!important;}`}</style>
    </div>
  );
}
