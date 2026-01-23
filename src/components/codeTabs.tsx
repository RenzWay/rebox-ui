import { useState } from "react";
import type { CodeTabsProps } from "../interface/interface";
import { Badge } from "./assets/badge";
import { useTheme } from "@/context/useTheme";

export function CodeTabs({ title, element, codes, index }: CodeTabsProps) {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();

  return (
    <div className={`my-4 md:my-8 p-2 md:p-4 rounded-md ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-900'}`}>
      <h2 className={`text-xl md:text-2xl font-bold mb-2 md:mb-4 flex items-center gap-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
        <Badge variant="primary" text={index} /> {title}
      </h2>

      {/* PREVIEW */}
      <div className="my-8 md:my-14 flex justify-center w-full">
        <div className="w-full max-w-3xl flex justify-center">{element}</div>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-2 mb-2 md:mb-4">
        {codes.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm transition-colors ${
              active === index
                ? "bg-blue-600 text-white"
                : theme === 'light'
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* CODE */}
      <pre className={`p-2 md:p-4 rounded-md overflow-x-auto text-xs md:text-sm ${theme === 'light' ? 'bg-gray-50 text-gray-800 border border-gray-200' : 'bg-gray-800 text-gray-200'}`}>
        <code>{codes[active].code}</code>
      </pre>
    </div>
  );
}
