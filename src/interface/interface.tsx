import type { JSX } from "react/jsx-runtime";

//** Interface for codetabs ButtonComponent */
export interface CodeBlock {
  label: "React" | "React (JSX)" | "CSS (Variables)" | "CSS (Plain)" | "CSS";
  language: "tsx" | "jsx" | "css";
  code: string;
}

export interface CodeTabsProps {
  title: string;
  element: JSX.Element;
  index?: number;
  codes: CodeBlock[];
}

export interface ModalProps {
  open: boolean;
  children: JSX.Element;
  setOpenModal: (open: boolean) => void;
  title?: string;
}

export interface TooltipProps {
  label: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}
