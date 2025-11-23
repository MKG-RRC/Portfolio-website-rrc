import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string; // 👈 ADD THIS
  onClick?: () => void; // optional
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  href,
  onClick,
}) => {
  const className = `ui-button ${variant}`;

  // If an href is provided, render an anchor button
  if (href) {
    return (
      <a className={className} href={href}>
        {label}
      </a>
    );
  }

  // Otherwise, render a normal button
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
