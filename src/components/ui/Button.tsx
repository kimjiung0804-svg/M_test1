import React from "react";
import type { LucideProps } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
  secondary: "bg-emerald-500 text-slate-950 hover:bg-emerald-400",
  outline:
    "border border-slate-600 bg-transparent text-slate-50 hover:border-cyan-400 hover:text-cyan-300",
  ghost: "bg-transparent text-slate-300 hover:text-cyan-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base sm:px-8 sm:py-3.5",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ComponentType<LucideProps>;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  children,
  ...props
}) => {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {Icon ? <Icon size={18} aria-hidden /> : null}
      {children}
    </button>
  );
};

export default Button;
