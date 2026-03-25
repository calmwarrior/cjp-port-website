import { cn } from "@/lib/utils";

interface CJPLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CJPLogo({ className, size = "md" }: CJPLogoProps) {
  const sizes = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-14 h-14 text-sm",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-primary flex items-center justify-center font-bold text-white tracking-wider",
        sizes[size],
        className
      )}
      aria-hidden="true"
    >
      CJP
    </div>
  );
}
