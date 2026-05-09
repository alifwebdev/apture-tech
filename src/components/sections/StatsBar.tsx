/* PDF: dark rounded card with icon + big number + label, 4 columns */
const stats = [
  { icon:"📋", val:"87+", label:"Project Completed" },
  { icon:"😊", val:"52+", label:"Satisfied Clients"  },
  { icon:"👥", val:"52+", label:"Expert Teams"       },
  { icon:"🏆", val:"35+", label:"Win Awards"         },
];
export default function StatsBar() {
  return (
    <section style={{ backgroundColor:"var(--bg)", padding:"0 0 90px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div style={{ backgroundColor:"var(--bg2)", borderRadius:14, border:"1px solid var(--border)", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="st-wrap">
          {stats.map((s,i) => (
            <div key={s.label} style={{ textAlign:"center", padding:"44px 16px", borderRight:i<stats.length-1?"1px solid var(--border)":"none" }} className="st-col">
              <div style={{ fontSize:34, marginBottom:12 }}>{s.icon}</div>
              <div style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:44, color:"var(--white)", letterSpacing:"-.02em", lineHeight:1, marginBottom:6 }}>{s.val}</div>
              <div style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:600px){.st-wrap{grid-template-columns:1fr 1fr!important} .st-col:nth-child(2n){border-right:none!important}}`}</style>
    </section>
  );
}
