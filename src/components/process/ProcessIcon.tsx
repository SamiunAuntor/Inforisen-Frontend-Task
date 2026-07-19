import type { ProcessStep } from "@/types/content";

type ProcessIconProps = {
  icon: ProcessStep["icon"];
};

export function ProcessIcon({ icon }: ProcessIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    className: "size-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (icon === "signup") {
    return <svg {...commonProps}><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-2.1A4.4 4.4 0 0 1 7.9 12.5h2.2a4.4 4.4 0 0 1 3.4 1.6M18 8v6M15 11h6" /></svg>;
  }

  if (icon === "funds") {
    return <svg {...commonProps}><path d="M12 3v12M15.5 6.5H10a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H8.5M4 18.5l3.4 2.1a3 3 0 0 0 3.1 0l8-5a2 2 0 0 0-2-3.5l-4.2 2.1" /></svg>;
  }

  if (icon === "service") {
    return <svg {...commonProps}><path d="M4 7h8M16 7h4M4 17h4M12 17h8M14 4v6M10 14v6" /><circle cx="14" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></svg>;
  }

  return <svg {...commonProps}><path d="m4 8 8-4 8 4-8 4-8-4Z" /><path d="m4 8 8 4 8-4v8l-8 4-8-4V8ZM12 12v8" /></svg>;
}
