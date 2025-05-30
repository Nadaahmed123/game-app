import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type SharedButtonButtonProps = {
  onClick?: () => void;
  className?: string;
  label?: string;
  showIcon?: boolean;  // خاصية جديدة لتحديد ظهور الأيقونة
};

export default function SharedButton({
  onClick,
  className = "cursor-pointer",
  label = "Show More",
  showIcon = true,
}: SharedButtonButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`flex-1 gap-2 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 ${className}`}
      size="lg"
    >
      {label}
      {showIcon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Button>
  );
}
