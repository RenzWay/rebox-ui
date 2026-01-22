import type { JSX } from "react/jsx-runtime";

//** Interface for codetabs ButtonComponent */
export interface CodeBlock {
  label: "React" | "CSS (Variables)" | "CSS (Plain)";
  language: "tsx" | "css";
  code: string;
}

export interface CodeTabsProps {
  title: string;
  element: JSX.Element;
  index?: number;
  codes: CodeBlock[];
}
