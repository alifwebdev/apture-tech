import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
  style?: CSSProperties;
}

const sizeStyles = {
  sm: { padding: "8px 16px", fontSize: "13px" },
  md: { padding: "11px 22px", fontSize: "14px" },
  lg: { padding: "14px 28px", fontSize: "16px" },
};

const variantStyles = {
  primary: {
    backgroundColor: "#FF2D55",
    color: "#fff",
    border: "1px solid #FF2D55",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--white)",
    border: "1px solid var(--border)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#FF2D55",
    border: "1px solid transparent",
  },
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  external = false,
  style,
}: ButtonProps) {
  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "6px",
    fontWeight: 600,
    fontFamily: "var(--font-display)",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.02em",
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  if (href) {
    return (
      <Link
        href={href}
        style={baseStyle}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button style={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}
