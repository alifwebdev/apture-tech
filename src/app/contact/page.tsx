import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start your project with AptureTech. Get in touch to discuss your web or app development needs.",
};

const svcOpts = ["Web Design","Web Development","App Development","UI/UX Design","Brand Identity","Digital Strategy","Not sure yet"];
const bdgOpts = ["< $10k","$10k – $25k","$25k – $50k","$50k – $100k","$100k+"];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:"var(--bg)", paddingTop:140, paddingBottom:80, borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-25%", right:"-8%", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.1) 0%,transparent 65%)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
            <Link href="/" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none" }}>Home</Link>
            <span style={{ color:"var(--red)" }}>›</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)" }}>Contact Us</span>
          </div>
          <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>GET IN TOUCH</p>
          <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(38px,7vw,78px)", lineHeight:1.0, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", maxWidth:700, marginBottom:18 }}>
            Let&apos;s Build Something<br/><span style={{ color:"var(--red)" }}>Great</span> Together.
          </h1>
          <p style={{ fontFamily:"var(--fb)", fontSize:16, color:"var(--grey)", maxWidth:480, lineHeight:1.75 }}>
            Tell us about your project and we&apos;ll respond within 24 hours. No sales pitch — just a real conversation.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ backgroundColor:"var(--bg)", padding:"80px 0 90px" }}>
        <div className="ct-grid" style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:72, alignItems:"start" }}>

          {/* Left */}
          <div>
            <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:22, color:"var(--white)", letterSpacing:".01em", marginBottom:26 }}>Contact Details</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:16, marginBottom:36 }}>
              {[
                {Icon:Phone,  label:"Phone",   val:"+880-566-1111-985"},
                {Icon:Phone,  label:"Phone",   val:"+880-657-1111-576"},
                {Icon:Mail,   label:"Email",   val:"info@apturetech.com"},
                {Icon:Mail,   label:"Support", val:"info@support.com"},
                {Icon:MapPin, label:"Address", val:"168/170, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh"},
              ].map(({Icon,label,val},i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:13 }}>
                  <div style={{ width:38, height:38, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.1)", border:"1px solid rgba(255,45,85,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={14} style={{ color:"var(--red)" }}/>
                  </div>
                  <div>
                    <div style={{ fontFamily:"var(--fb)", fontSize:10, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:2 }}>{label}</div>
                    <div style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.55 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom:32 }}>
              <p style={{ fontFamily:"var(--fb)", fontSize:11, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12 }}>Follow Us</p>
              <div style={{ display:"flex", gap:9 }}>
                {[Instagram,Facebook,Twitter,MessageCircle].map((Icon,i) => (
                  <a key={i} href="#" className="ct-soc" style={{ width:36, height:36, borderRadius:"50%", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--muted)", textDecoration:"none", transition:"all .2s" }}>
                    <Icon size={14}/>
                  </a>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:10, padding:"18px 20px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:5 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", backgroundColor:"#47ff8f", boxShadow:"0 0 8px rgba(71,255,143,.7)", display:"inline-block" }}/>
                <span style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:14, color:"var(--white)" }}>Currently accepting projects</span>
              </div>
              <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", lineHeight:1.6 }}>We respond within 24 hours. For urgent queries, email us directly.</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="ct-form-card" style={{ backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:14, padding:"40px 36px" }}>
            <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:22, color:"var(--white)", letterSpacing:".01em", marginBottom:5 }}>Tell Us About Your Project</h3>
            <p style={{ fontFamily:"var(--fb)", fontSize:14, color:"var(--grey)", marginBottom:30 }}>Fill in the form and we&apos;ll be in touch shortly.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              <div className="ct-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                <div>
                  <label style={lbl}>Full Name *</label>
                  <input type="text" placeholder="Alex Johnson" className="ct-inp" style={inp}/>
                </div>
                <div>
                  <label style={lbl}>Email *</label>
                  <input type="email" placeholder="alex@company.com" className="ct-inp" style={inp}/>
                </div>
              </div>
              <div>
                <label style={lbl}>Company</label>
                <input type="text" placeholder="Your company name" className="ct-inp" style={inp}/>
              </div>
              <div>
                <label style={lbl}>Service Needed *</label>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginTop:8 }}>
                  {svcOpts.map(o => (
                    <span key={o} className="chip" style={{ padding:"5px 13px", borderRadius:50, border:"1px solid var(--border)", fontFamily:"var(--fb)", fontSize:12, color:"var(--grey)", cursor:"pointer", transition:"all .15s" }}>{o}</span>
                  ))}
                </div>
              </div>
              <div>
                <label style={lbl}>Budget Range</label>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginTop:8 }}>
                  {bdgOpts.map(o => (
                    <span key={o} className="chip" style={{ padding:"5px 13px", borderRadius:50, border:"1px solid var(--border)", fontFamily:"var(--fb)", fontSize:12, color:"var(--grey)", cursor:"pointer", transition:"all .15s" }}>{o}</span>
                  ))}
                </div>
              </div>
              <div>
                <label style={lbl}>Project Details *</label>
                <textarea rows={5} placeholder="Tell us about your project, goals, timeline…" className="ct-inp" style={{ ...inp, resize:"vertical" as const, minHeight:116 }}/>
              </div>
              <button className="ct-submit" style={{ backgroundColor:"var(--red)", color:"#fff", padding:"13px 28px", borderRadius:50, fontFamily:"var(--fb)", fontSize:14, fontWeight:600, border:"2px solid var(--red)", cursor:"pointer", width:"100%", transition:"all .2s", letterSpacing:".02em" }}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ct-inp { width:100%; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px 13px; font-size:13px; color:var(--white); font-family:var(--fb); outline:none; margin-top:7px; transition:border-color .2s; }
        .ct-inp::placeholder { color:var(--muted); }
        .ct-inp:focus { border-color:rgba(255,45,85,.45)!important; }
        .chip:hover { border-color:var(--red)!important; color:var(--red)!important; background:rgba(255,45,85,.06)!important; }
        .ct-submit:hover { background:transparent!important; color:var(--red)!important; }
        .ct-soc:hover { border-color:var(--red)!important; color:var(--red)!important; }
        @media(max-width:860px){
          .ct-grid      { grid-template-columns:1fr!important; gap:44px!important; }
          .ct-row       { grid-template-columns:1fr!important; }
          .ct-form-card { padding:28px 22px!important; }
        }
        @media(max-width:480px){
          .ct-form-card { padding:22px 16px!important; border-radius:10px!important; }
        }
      `}</style>
    </>
  );
}

const lbl: React.CSSProperties = { display:"block", fontFamily:"var(--fb)", fontSize:11, color:"var(--muted)", textTransform:"uppercase", letterSpacing:".08em" };
const inp: React.CSSProperties = { width:"100%", backgroundColor:"var(--bg)", border:"1px solid var(--border)", borderRadius:8, padding:"10px 13px", fontSize:13, color:"var(--white)", fontFamily:"var(--fb)", outline:"none", marginTop:7 };
