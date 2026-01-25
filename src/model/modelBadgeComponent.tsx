import type { CodeTabsProps } from "@/interface/interface";

export const badgeComponentsCode: CodeTabsProps[] = [
  {
    title: "Variant color Badge",
    element: (
      <div>
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-danger">Danger</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-info">Info</span>
      </div>
    ),
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `
<span className="badge badge-primary">Primary</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-danger">Danger</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-info">Info</span>
            `,
      },
      {
        label: "React (JSX)",
        language: "jsx",
        code: `
<span className="badge badge-primary">Primary</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-danger">Danger</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-info">Info</span>
            `,
      },
      {
        label: "CSS",
        language: "css",
        code: `
    /* Badge Base Styles */
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
          
      min-width: 1.9rem;
      height: 1.9rem;
      padding: 0 0.6rem;
          
      white-space: nowrap;
      text-align: center;
          
      border-radius: 9999px;
      font-size: 0.95rem;
      font-weight: 500;
          
      cursor: default;
    }

    
    /* Variant Colors */
    .badge-primary {
        background-color: rgba(59, 130, 246, 0.18);
        border: 1.5px solid rgba(59, 130, 246, 0.4);
        color: #3b82f6;
    }
    
    .badge-success {
        background-color: rgba(34, 197, 94, 0.18);
        border: 1.5px solid rgba(34, 197, 94, 0.4);
        color: #22c55e;
    }
    
    .badge-warning {
        background-color: rgba(234, 179, 8, 0.18);
        border: 1.5px solid rgba(234, 179, 8, 0.4);
        color: #eab308;
    }
    
    .badge-danger {
        background-color: rgba(239, 68, 68, 0.18);
        border: 1.5px solid rgba(239, 68, 68, 0.4);
        color: #ef4444;
    }
    
    .badge-info {
        background-color: rgba(14, 165, 233, 0.18);
        border: 1.5px solid rgba(14, 165, 233, 0.4);
        color: #0ea5e9;
    }
`,
      },
    ],
  },
  {
    title: "Pulse Animation Badge",
    element: <span className="badge badge-info badge-pulse">Info</span>,
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `<span className="badge badge-info badge-pulse">Info</span>`,
      },
      {
        label: "React (JSX)",
        language: "jsx",
        code: `<span className="badge badge-info badge-pulse">Info</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `
    /* Pulse Animation */
.badge-pulse {
  position: relative;
}

.badge-pulse::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;

  border: 2px solid currentColor;
  opacity: 0.6;

  animation: badge-pulse 1.6s ease-out infinite;
}

@keyframes badge-pulse {
  0% {
    opacity: 0.6;
    transform: scale(0.95);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}

`,
      },
    ],
  },
];
