import React from "react";
import "./Typography.css";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "small";
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
}) => {
  const Tag = variant as any; // <– fixes JSX namespace issue

  return (
    <Tag className={`ui-typography ${variant} ${className}`}>{children}</Tag>
  );
};
