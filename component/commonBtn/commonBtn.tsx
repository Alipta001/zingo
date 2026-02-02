"use client";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; // extra custom class
  disabled?: boolean;
}

export default function Button({ onClick, children, className = "", disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
