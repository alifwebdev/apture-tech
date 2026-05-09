import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const svcs = ["Web Development","App Development","Cloud Engineering","Strategy & Research","Digital Agency","UI/UX Design"];
const co   = ["About Us","Services","Projects","Blog","Pricing Plan","Career"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor:"var(--bg2)", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div className="ft-grid" style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1.2fr", gap:44, padding:"60px 0 44px" }}>

          {/* Brand col */}
          <div>
            <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
              <div style={{ width:32, height:32, borderRadius:7, backgroundColor:"var(--red)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:12, color:"#fff" }}>AT</span>
              </div>
              <span style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:20, color:"var(--white)", letterSpacing:"-.01em" }}>
                Apture<span style={{ color:"var(--red)" }}>Tech</span>
              </span>
            </Link>
            <h5 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:14, color:"var(--red)", marginBottom:5 }}>Office</h5>
            <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", lineHeight:1.75, marginBottom:18 }}>168/170, Avenue 01, Mirpur DOHS,<br/>Dhaka, Bangladesh</p>
            <div style={{ display:"flex", gap:8 }}>
              {[Instagram,Facebook,Twitter,MessageCircle].map((Icon,i) => (
                <a key={i} href="#" className="ft-soc" style={{ width:32, height:32, borderRadius:"50%", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--muted)", textDecoration:"none", transition:"all .2s" }}>
                  <Icon size={13}/>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:15, color:"var(--white)", marginBottom:18 }}>Our Services</h5>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
              {svcs.map(s => <li key={s}><Link href="/services" className="fl" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none", transition:"color .2s" }}>{s}</Link></li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:15, color:"var(--white)", marginBottom:18 }}>Company</h5>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
              {co.map(c => <li key={c}><Link href="#" className="fl" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none", transition:"color .2s" }}>{c}</Link></li>)}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h5 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:15, color:"var(--white)", marginBottom:18 }}>Contacts</h5>
            <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
              {[
                {Icon:Phone,  t:"+880-566-1111-985"},
                {Icon:Phone,  t:"+880-657-1111-576"},
                {Icon:Mail,   t:"info@apturetech.com"},
                {Icon:Mail,   t:"info@support.com"},
                {Icon:MapPin, t:"168/170, Avenue 01, Mirpur DOHS, Bangladesh"},
              ].map(({Icon,t},i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:9 }}>
                  <Icon size={12} style={{ color:"var(--red)", marginTop:3, flexShrink:0 }}/>
                  <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", lineHeight:1.55 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid var(--border)", padding:"18px 0", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)" }}>
            Copyright {new Date().getFullYear()} <strong style={{ color:"var(--white)" }}>AptureTech</strong> | Design By <strong style={{ color:"var(--red)" }}>AptureTech</strong>
          </p>
          <div style={{ display:"flex", gap:18, flexWrap:"wrap" }}>
            {["Privacy Policy","Terms of Use","Support Policy","Terms of Service"].map(t => (
              <Link key={t} href="#" className="fl" style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)", textDecoration:"none" }}>{t}</Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`.fl:hover{color:var(--red)!important;} .ft-soc:hover{border-color:var(--red)!important;color:var(--red)!important;} @media(max-width:860px){.ft-grid{grid-template-columns:1fr 1fr!important;gap:30px!important}} @media(max-width:480px){.ft-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
