import type { TooltipProps } from "@/interface/interface";

export function Tooltip({ label, position = "top", children }: TooltipProps) {
  return (
    <div className="tooltip">
      {children}
      <span className={`tooltip-content tooltip-${position}`}>{label}</span>
    </div>
  );
}