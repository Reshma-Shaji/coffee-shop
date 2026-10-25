
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  color?: string;
  textColor?: string;
  fontClass?: string;
  textSize?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  color,
  textColor,
  fontClass = "font-serif",
  textSize = "text-sm",
  size = "md",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition-all duration-300";

  const variants = {
    primary:
      "bg-[#F9C06A] font-bold text-black shadow-md hover:brightness-95",
    secondary:
      "bg-transparent font-bold  text-white underline underline-offset-4 hover:text-[#F9C06A]",
  };

  const sizes = {
    sm: "px-5 py-2",
    md: "px-10 py-3.5",
    lg: "px-12 py-4",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...(color ? { backgroundColor: color } : {}),
        ...(textColor ? { color: textColor } : {}),
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fontClass} ${textSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
