import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on web design, development, UX, and digital strategy from AptureTech.",
};

export default function BlogPage() {
  const featured = blogPosts.find(p => p.featured);
  const rest     = blogPosts.filter(p => !p.featured);

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor:"var(--bg)", paddingTop:140, paddingBottom:80, borderBottom:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-25%", right:"-8%", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,45,85,.09) 0%,transparent 65%)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
            <Link href="/" style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none" }}>Home</Link>
            <span style={{ color:"var(--red)" }}>›</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)" }}>Blog</span>
          </div>
          <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>BLOG</p>
          <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(38px,7vw,78px)", lineHeight:1.0, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", maxWidth:700, marginBottom:18 }}>
            Latest News<br/>And <span style={{ color:"var(--red)" }}>Article</span><br/>Modern Design.
          </h1>
          <p style={{ fontFamily:"var(--fb)", fontSize:16, color:"var(--grey)", maxWidth:460, lineHeight:1.75 }}>
            Design, development, strategy — unfiltered insights from a team that ships daily.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section style={{ backgroundColor:"var(--bg)", padding:"72px 0 0" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
            <Link href={`/blog/${featured.id}`} className="bl-feat" style={{ display:"block", backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:14, overflow:"hidden", textDecoration:"none", transition:"all .3s" }}>
              <div style={{ height:300, backgroundColor:"var(--bg3)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(255,45,85,.25),rgba(0,0,0,.6))" }}/>
                <div style={{ position:"absolute", top:18, left:18, display:"flex", gap:9 }}>
                  <span style={{ backgroundColor:"var(--red)", color:"#fff", fontFamily:"var(--fb)", fontSize:11, fontWeight:600, letterSpacing:".06em", padding:"4px 11px", borderRadius:4 }}>{featured.category}</span>
                  <span style={{ backgroundColor:"rgba(255,45,85,.18)", color:"var(--red)", fontFamily:"var(--fb)", fontSize:11, fontWeight:600, letterSpacing:".06em", padding:"4px 11px", borderRadius:4, border:"1px solid rgba(255,45,85,.3)" }}>Featured</span>
                </div>
                <span style={{ position:"relative", fontSize:52, opacity:.25 }}>📰</span>
              </div>
              <div style={{ padding:"30px 34px" }}>
                <div style={{ display:"flex", gap:18, marginBottom:12 }}>
                  <span style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)", display:"flex", alignItems:"center", gap:5 }}><User size={11}/> AptureTech</span>
                  <span style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)", display:"flex", alignItems:"center", gap:5 }}><Clock size={11}/> {featured.date}</span>
                  <span style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)" }}>{featured.readTime}</span>
                </div>
                <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(20px,3vw,34px)", color:"var(--white)", letterSpacing:".01em", textTransform:"uppercase", marginBottom:10, lineHeight:1.12 }}>{featured.title}</h2>
                <p style={{ fontFamily:"var(--fb)", fontSize:14, color:"var(--grey)", lineHeight:1.78, maxWidth:660, marginBottom:16 }}>{featured.excerpt}</p>
                <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)", fontWeight:500 }}>Read Article ›</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section style={{ backgroundColor:"var(--bg)", padding:"44px 0 90px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
          <div className="bl-pg-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:14 }}>
            {rest.map(p => (
              <Link key={p.id} href={`/blog/${p.id}`} className="bl-pg-card" style={{ display:"block", backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:12, overflow:"hidden", textDecoration:"none", transition:"all .25s" }}>
                <div style={{ height:176, backgroundColor:"var(--bg3)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#252525,#111)" }}/>
                  <div style={{ position:"absolute", top:11, left:11, backgroundColor:"var(--red)", color:"#fff", fontFamily:"var(--fb)", fontSize:10, fontWeight:600, letterSpacing:".06em", padding:"3px 9px", borderRadius:4 }}>{p.category}</div>
                  <span style={{ position:"relative", fontSize:32, opacity:.2 }}>📝</span>
                </div>
                <div style={{ padding:"20px 22px" }}>
                  <div style={{ display:"flex", gap:14, marginBottom:11 }}>
                    <span style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)", display:"flex", alignItems:"center", gap:4 }}><User size={11}/> AptureTech</span>
                    <span style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)", display:"flex", alignItems:"center", gap:4 }}><Clock size={11}/> {p.date}</span>
                  </div>
                  <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:18, color:"var(--white)", letterSpacing:".01em", lineHeight:1.22, marginBottom:9 }}>{p.title}</h3>
                  <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.72, marginBottom:14 }}>{p.excerpt.slice(0,100)}…</p>
                  <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--red)", fontWeight:500 }}>Read More ›</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .bl-feat:hover { border-color:rgba(255,45,85,.3)!important; box-shadow:0 18px 48px rgba(0,0,0,.5); }
        .bl-pg-card:hover { border-color:rgba(255,45,85,.3)!important; transform:translateY(-4px); box-shadow:0 14px 38px rgba(0,0,0,.5); }
        @media(max-width:660px){ .bl-pg-grid{grid-template-columns:1fr!important} }
      `}</style>
    </>
  );
}
