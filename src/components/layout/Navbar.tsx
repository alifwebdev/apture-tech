"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  { href:"/",          label:"Home"       },
  { href:"/about",     label:"About Us"   },
  { href:"/services",  label:"Services"   },
  { href:"/portfolio", label:"Projects"   },
  { href:"/blog",      label:"Blog"       },
  { href:"/contact",   label:"Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200,
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter:  scrolled ? "blur(12px)" : "none",
        borderBottom:    scrolled ? "1px solid var(--border)" : "none",
        transition: "all .3s",
      }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", height:72, display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo — Finibus style: icon + bold name */}
          <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:9 }}>
            <div style={{ width:36, height:36, borderRadius:8, backgroundColor:"var(--red)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:14, color:"#fff", letterSpacing:"-.01em" }}>AT</span>
            </div>
            <span style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:22, color:"var(--white)", letterSpacing:"-.01em", lineHeight:1 }}>
              Apture<span style={{ color:"var(--red)" }}>Tech</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="d-nav" style={{ display:"flex", gap:2 }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nl" style={{
                padding:"6px 13px", fontSize:14, fontWeight: pathname===l.href ? 600 : 400,
                color: pathname===l.href ? "var(--red)" : "var(--grey)",
                textDecoration:"none", borderRadius:4, transition:"color .2s",
                fontFamily:"var(--fb)",
              }}>{l.label}</Link>
            ))}
          </nav>

          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div className="d-nav"><ThemeToggle /></div>
            {/* "Get A Quote" — exact Finibus pill button */}
            <Link href="/contact" className="d-nav quote-btn" style={{
              backgroundColor:"var(--red)", color:"#fff",
              padding:"9px 22px", borderRadius:50,
              fontSize:13, fontWeight:600, fontFamily:"var(--fb)",
              textDecoration:"none", border:"2px solid var(--red)",
              transition:"all .2s", letterSpacing:".02em",
            }}>Get A Quote</Link>
            <button onClick={() => setOpen(!open)} className="m-btn" style={{
              display:"none", background:"none", border:"1px solid var(--border)",
              borderRadius:6, color:"var(--white)", padding:8, cursor:"pointer",
            }}>
              {open ? <X size={18}/> : <Menu size={18}/>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{ position:"fixed", inset:0, zIndex:199, backgroundColor:"var(--bg)", padding:"88px 28px 36px", display:"flex", flexDirection:"column" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ padding:"15px 0", fontSize:32, fontWeight:800, fontFamily:"var(--fh)", letterSpacing:"-.01em", color: pathname===l.href ? "var(--red)" : "var(--white)", textDecoration:"none", borderBottom:"1px solid var(--border)" }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop:24, display:"flex", flexDirection:"column", gap:10 }}>
            <ThemeToggle />
            <Link href="/contact" style={{ backgroundColor:"var(--red)", color:"#fff", padding:"14px 24px", borderRadius:50, fontSize:15, fontWeight:700, fontFamily:"var(--fb)", textDecoration:"none", textAlign:"center" }}>Get A Quote</Link>
          </div>
        </div>
      )}

      <style>{`
        .nl:hover { color:var(--white)!important; }
        .quote-btn:hover { background:transparent!important; color:var(--red)!important; }
        @media(max-width:920px){ .d-nav{display:none!important} .m-btn{display:flex!important} }
      `}</style>
    </>
  );
}
