import React from "react";
import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string; // allow link buttons
  onClick?: () => void; // allow click handler
  type?: "button" | "submit" | "reset"; // form support
  className?: string; // optional additional class
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}) => {
  // If href exists → render an anchor button
  if (href) {
    return (
      <a href={href} className={`ui-btn ${variant} ${className}`}>
        {children}
      </a>
    );
  }

  // Otherwise render normal button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`ui-btn ${variant} ${className}`}
    >
      {children}
    </button>
  );
};
