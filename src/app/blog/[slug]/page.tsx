import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) notFound();
  const related = blogPosts.filter((p) => p.id !== slug).slice(0, 2);

  return (
    <>
      <section style={{ backgroundColor:"var(--bg)", paddingTop:130, paddingBottom:72, borderBottom:"1px solid var(--border)" }}>
        <div style={{ maxWidth:880, margin:"0 auto", padding:"0 28px" }}>
          <Link href="/blog" className="back-lnk" style={{ display:"inline-flex", alignItems:"center", gap:7, fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", textDecoration:"none", marginBottom:28, transition:"color .2s" }}>
            <ArrowLeft size={13} /> Back to Blog
          </Link>
          <div style={{ display:"flex", gap:9, marginBottom:18, flexWrap:"wrap" }}>
            <span style={{ backgroundColor:"var(--red)", color:"#fff", fontFamily:"var(--fb)", fontSize:11, fontWeight:600, letterSpacing:".06em", padding:"4px 11px", borderRadius:4 }}>{post.category}</span>
          </div>
          <h1 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(28px,5vw,54px)", lineHeight:1.06, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)", marginBottom:18 }}>{post.title}</h1>
          <div style={{ display:"flex", gap:18, alignItems:"center", paddingBottom:26, borderBottom:"1px solid var(--border)" }}>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", display:"flex", alignItems:"center", gap:5 }}><User size={12} /> AptureTech</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", display:"flex", alignItems:"center", gap:5 }}><Calendar size={12} /> {post.date}</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", display:"flex", alignItems:"center", gap:5 }}><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <article style={{ backgroundColor:"var(--bg)", padding:"56px 0 90px" }}>
        <div style={{ maxWidth:880, margin:"0 auto", padding:"0 28px" }}>
          <p style={{ fontFamily:"var(--fb)", fontSize:18, color:"var(--white)", lineHeight:1.82, marginBottom:26, fontWeight:400 }}>{post.excerpt}</p>
          <p style={{ fontFamily:"var(--fb)", fontSize:15, color:"var(--grey)", lineHeight:1.88, marginBottom:26 }}>
            In the rapidly evolving digital landscape, staying ahead requires more than keeping up with trends — it demands a deep understanding of how design and technology intersect with human behavior and business goals. At AptureTech, we&apos;ve built our entire practice around this philosophy.
          </p>
          <blockquote style={{ borderLeft:"3px solid var(--red)", paddingLeft:26, margin:"38px 0" }}>
            <p style={{ fontFamily:"var(--fh)", fontWeight:700, fontSize:20, color:"var(--white)", lineHeight:1.5, fontStyle:"italic", letterSpacing:".01em" }}>
              &ldquo;Great design is invisible — it works so seamlessly users never notice it; they just accomplish their goals effortlessly.&rdquo;
            </p>
            <cite style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)", marginTop:9, display:"block", fontStyle:"normal" }}>— AptureTech Design Team</cite>
          </blockquote>
          <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(20px,3vw,32px)", color:"var(--white)", letterSpacing:".01em", textTransform:"uppercase", marginBottom:14, marginTop:46, lineHeight:1.12 }}>
            Why This Matters For Your Business
          </h2>
          <p style={{ fontFamily:"var(--fb)", fontSize:15, color:"var(--grey)", lineHeight:1.88, marginBottom:22 }}>
            Companies that invest in quality digital experiences consistently outperform competitors across every metric — from customer acquisition costs to retention rates and lifetime value. Good design in 2025 isn&apos;t a luxury. It&apos;s table stakes.
          </p>
          <p style={{ fontFamily:"var(--fb)", fontSize:15, color:"var(--grey)", lineHeight:1.88 }}>
            The question isn&apos;t whether to invest in your digital presence — it&apos;s how to do it efficiently with the right partner who understands both the craft and the business outcomes you need.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section style={{ backgroundColor:"var(--bg2)", padding:"72px 0", borderTop:"1px solid var(--border)" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:28, color:"var(--white)", letterSpacing:".01em", textTransform:"uppercase", marginBottom:32 }}>More Articles</h2>
            <div className="rel-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`} className="rel-card" style={{ display:"block", backgroundColor:"var(--bg)", border:"1px solid var(--border)", borderRadius:10, padding:"26px 28px", textDecoration:"none", transition:"all .25s" }}>
                  <span style={{ display:"inline-block", backgroundColor:"var(--red)", color:"#fff", fontFamily:"var(--fb)", fontSize:10, fontWeight:600, letterSpacing:".06em", padding:"3px 9px", borderRadius:4, marginBottom:13 }}>{p.category}</span>
                  <h3 style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:18, color:"var(--white)", letterSpacing:".01em", lineHeight:1.22, marginBottom:6 }}>{p.title}</h3>
                  <p style={{ fontFamily:"var(--fb)", fontSize:12, color:"var(--muted)" }}>{p.readTime} · {p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .back-lnk:hover { color:var(--red)!important; }
        .rel-card:hover  { border-color:rgba(255,45,85,.3)!important; transform:translateY(-3px); }
        @media(max-width:580px){ .rel-grid{grid-template-columns:1fr!important} }
      `}</style>
    </>
  );
}
