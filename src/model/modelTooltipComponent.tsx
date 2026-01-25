import { Tooltip } from "@/components/tooltip";
import type { CodeTabsProps } from "@/interface/interface";

export const tooltipComponentCode: CodeTabsProps[] = [
  {
    title: "Basic Tooltip",
    element: (
      <>
        <Tooltip label="hover the tooltip">
          <button className="btn btn-secondary">Hover here!</button>
        </Tooltip>
      </>
    ),
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `
interface TooltipProps {
  label: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

export function Tooltip({ label, position = "top", children }: TooltipProps) {
  return (
    <div className="tooltip">
      {children}
      <span className={\`tooltip-content tooltip-\${position}\`}>{label}</span>
    </div>
  );
}
        `,
      },
      {
        label: "React (JSX)",
        language: "jsx",
        code: `
export function Tooltip({ label, position = "top", children }) {
  return (
    <div className="tooltip">
      {children}
      <span className={\`tooltip-content tooltip-\${position}\`}>{label}</span>
    </div>
  );
}
        `,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  z-index: 50;

  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.2;

  background: var(--slate-900);
  color: var(--text-white);
  border-radius: 0.375rem;
 
  white-space: nowrap;

  opacity: 0;
  pointer-events: none;

  transition: opacity 0.15s ease;
}

.tooltip:hover .tooltip-content {
  opacity: 1;
}

.tooltip-top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}
        `,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  z-index: 50;

  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.2;

  background: #0f172a;
  color: #ffffff;
  border-radius: 0.375rem;
 
  white-space: nowrap;

  opacity: 0;
  pointer-events: none;

  transition: opacity 0.15s ease;
}

.tooltip:hover .tooltip-content {
  opacity: 1;
}

.tooltip-top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}
        `,
      },
    ],
  },
];
