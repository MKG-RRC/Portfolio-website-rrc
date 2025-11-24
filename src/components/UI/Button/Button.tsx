import React from "react";
import "./Button.css";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string; // allow links
  type?: "button" | "submit" | "reset"; // allow form submit
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  href,
  type = "button",
}) => {
  // If href exists, render <a>
  if (href) {
    return (
      <a href={href} className={`ui-btn ${variant}`}>
        {children}
      </a>
    );
  }

  // Otherwise render a <button>
  return (
    <button type={type} className={`ui-btn ${variant}`}>
      {children}
    </button>
  );
};
