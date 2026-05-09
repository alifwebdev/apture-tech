"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolio } from "@/lib/data";

export default function PortfolioPreview() {
  const [pg, setPg] = useState(0);
  const per = 5, tot = Math.ceil(portfolio.length / per);
  const items = portfolio.slice(pg*per, pg*per+per);

  return (
    /* PDF: white bg section, 5-card horizontal thumbnail strip, prev/next arrows */
    <section style={{ backgroundColor:"var(--bg)", padding:"90px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>

        {/* Header row */}
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:44, flexWrap:"wrap", gap:16 }}>
          <div>
            <p style={{ fontFamily:"var(--fb)", fontWeight:600, fontSize:12, color:"var(--red)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:10, textDecoration:"underline", textUnderlineOffset:4 }}>CASE STUDY</p>
            <h2 style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:"clamp(26px,4vw,46px)", lineHeight:1.06, letterSpacing:".01em", textTransform:"uppercase", color:"var(--white)" }}>
              A Diversified<br/>Resilient Projects.
            </h2>
          </div>
          {/* Prev/Next — exact PDF arrow style */}
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={() => setPg(p => Math.max(0,p-1))} disabled={pg===0} className="arr-btn" style={{ width:42, height:42, borderRadius:"50%", border:"1px solid var(--border)", backgroundColor:"transparent", color:"var(--white)", display:"flex", alignItems:"center", justifyContent:"center", cursor:pg===0?"not-allowed":"pointer", opacity:pg===0?.35:1, transition:"all .2s" }}>
              <ChevronLeft size={17}/>
            </button>
            <button onClick={() => setPg(p => Math.min(tot-1,p+1))} disabled={pg===tot-1} style={{ width:42, height:42, borderRadius:"50%", border:"1px solid var(--red)", backgroundColor:"var(--red)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", cursor:pg===tot-1?"not-allowed":"pointer", opacity:pg===tot-1?.35:1, transition:"all .2s" }}>
              <ChevronRight size={17}/>
            </button>
          </div>
        </div>

        {/* 5-card strip — exact PDF: tight thumbnails with category+title overlay */}
        <div className="pt-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10 }}>
          {items.map(p => (
            <Link key={p.id} href={`/portfolio#${p.id}`} className="pt-card" style={{ display:"block", borderRadius:10, overflow:"hidden", textDecoration:"none", position:"relative", backgroundColor:"var(--bg3)", border:"1px solid var(--border)", transition:"transform .25s", aspectRatio:"3/4" }}>
              <div style={{ position:"absolute", inset:0, backgroundColor:`${p.color}0e`, backgroundImage:`linear-gradient(135deg,${p.color}18 0%,transparent 55%)` }} />
              {/* Center graphic */}
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ width:56, height:56, borderRadius:10, backgroundColor:`${p.color}20`, border:`1px solid ${p.color}35`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontFamily:"var(--fh)", fontWeight:900, fontSize:22, color:p.color }}>{p.title.charAt(0)}</span>
                </div>
              </div>
              {/* Bottom overlay — exact PDF: category small + title bold */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(to top,rgba(0,0,0,.9) 0%,transparent 100%)", padding:"12px 11px" }}>
                <div style={{ fontFamily:"var(--fb)", fontSize:9, color:"rgba(255,255,255,.5)", letterSpacing:".08em", marginBottom:2, textTransform:"uppercase" }}>{p.category}</div>
                <div style={{ fontFamily:"var(--fh)", fontWeight:800, fontSize:13, color:"#fff", lineHeight:1.2 }}>{p.title}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dot nav */}
        <div style={{ display:"flex", justifyContent:"center", gap:7, marginTop:26 }}>
          {Array.from({length:tot}).map((_,i) => (
            <button key={i} onClick={() => setPg(i)} style={{ width:8, height:8, borderRadius:"50%", border:"none", backgroundColor:i===pg?"var(--red)":"var(--border)", cursor:"pointer", padding:0, transition:"all .3s" }} />
          ))}
        </div>
      </div>
      <style>{`.pt-card:hover{transform:translateY(-6px)!important;} .arr-btn:hover{border-color:var(--red)!important;color:var(--red)!important;} @media(max-width:860px){.pt-grid{grid-template-columns:repeat(3,1fr)!important}} @media(max-width:560px){.pt-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}
