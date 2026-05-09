interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accentWord?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  accentWord,
}: SectionHeaderProps) {
  const displayTitle = accentWord
    ? title.replace(
        accentWord,
        `<span style="color: #FF2D55">${accentWord}</span>`
      )
    : title;

  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? "640px" : "none",
        margin: align === "center" ? "0 auto" : "0",
        marginBottom: "56px",
      }}
    >
      {eyebrow && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              width: "20px",
              height: "2px",
              backgroundColor: "#FF2D55",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#FF2D55",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 500,
            }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(32px, 5vw, 52px)",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "var(--white)",
          marginBottom: description ? "16px" : "0",
        }}
        dangerouslySetInnerHTML={{ __html: displayTitle }}
      />
      {description && (
        <p
          style={{
            fontSize: "17px",
            color: "var(--grey)",
            lineHeight: 1.65,
            maxWidth: "520px",
            margin: align === "center" ? "0 auto" : "0",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
