import type { AnchorHTMLAttributes, ReactNode } from "react";

type GradientButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function GradientButton({
  children,
  className = "",
  ...props
}: GradientButtonProps) {
  return (
    <a
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5a623] via-[#e84a68] to-[#32115f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(100,31,93,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(100,31,93,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d245f] active:translate-y-0 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
