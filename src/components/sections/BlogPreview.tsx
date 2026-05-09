import Link from "next/link";
import { User, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  const posts = blogPosts.slice(0,2);
  return (
    /* PDF: 2 blog cards + right label "Latest News And Article Modern Design" */
    <section style={{ backgroundColor:"var(--bg)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <div className="bl-layout" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 260px", gap:24, alignItems:"start" }}>

          {posts.map(p => (
            <Link key={p.id} href={`/blog/${p.id}`} className="bl-card" style={{ display:"block", backgroundColor:"var(--bg2)", border:"1px solid var(--border)", borderRadius:12, overflow:"hidden", textDecoration:"none", transition:"all .25s" }}>
              {/* Thumb */}
              <div style={{ height:190, backgroundColor:"var(--bg3)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                {/* Category badge — exact PDF */}
                <div style={{ position:"absolute", top:11, left:11, backgroundColor:"rgba(0,0,0,.7)", color:"rgba(255,255,255,.7)", fontSize:10, fontFamily:"var(--fb)", fontWeight:500, letterSpacing:".06em", padding:"3px 9px", borderRadius:4 }}>Apps Development</div>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#252525,#111)" }} />
                <span style={{ position:"relative", fontSize:36, opacity:.25 }}>📰</span>
                {/* Author pill — bottom of image, exact PDF */}
                <div style={{ position:"absolute", bottom:11, left:11, display:"flex", alignItems:"center", gap:8, backgroundColor:"rgba(255,255,255,.08)", borderRadius:50, padding:"4px 10px 4px 4px", backdropFilter:"blur(4px)", border:"1px solid rgba(255,255,255,.06)" }}>
                  <div style={{ width:22, height:22, borderRadius:"50%", backgroundColor:"rgba(255,45,85,.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <User size={11} style={{ color:"var(--red)" }}/>
                  </div>
                  <span style={{ fontFamily:"var(--fb)", fontSize:11, color:"rgba(255,255,255,.6)" }}>AptureTech</span>
                  <span style={{ fontFamily:"var(--fb)", fontSize:11, color:"var(--muted)" }}>{p.date}</span>
                </div>
              </div>
              {/* Content */}
              <div style={{ padding:"18px 20px" }}>
                <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:17, color:"var(--white)", letterSpacing:".01em", lineHeight:1.3, marginBottom:9 }}>{p.title}</h3>
                <p style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--grey)", lineHeight:1.7 }}>{p.excerpt.slice(0,100)}…</p>
              </div>
            </Link>
          ))}

          {/* Right label + CTA */}
          <div style={{ paddingTop:6 }}>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:12, textDecoration:"underline", textUnderlineOffset:4 }}>BLOG</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(24px,3vw,38px)", lineHeight:1.1, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", marginBottom:26 }}>
              Latest News<br/>And Article<br/>Modern Design.
            </h2>
            <Link href="/blog" className="bl-cta" style={{ display:"inline-block", backgroundColor:"var(--red)", color:"#fff", padding:"11px 26px", borderRadius:50, fontSize:13, fontWeight:600, fontFamily:"var(--fb)", textDecoration:"none", border:"2px solid var(--red)", transition:"all .2s" }}>
              View All Blog
            </Link>
          </div>
        </div>
      </div>
      <style>{`.bl-card:hover{border-color:rgba(255,45,85,.3)!important;transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.5);} .bl-cta:hover{background:transparent!important;color:var(--red)!important;} @media(max-width:860px){.bl-layout{grid-template-columns:1fr 1fr!important} .bl-layout>div:last-child{grid-column:1/-1}} @media(max-width:560px){.bl-layout{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
