import { useState } from "react";
import type { CodeTabsProps } from "../interface/interface";
import { Badge } from "./assets/badge";

export function CodeTabs({ title, element, codes, index }: CodeTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-8 p-4 bg-gray-900 rounded-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Badge text={index} /> {title}
      </h2>

      {/* PREVIEW */}
      <div className=" flex justify-center items-center my-14">{element}</div>

      {/* TABS */}
      <div className="flex gap-2 mb-4">
        {codes.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={`px-3 py-1 rounded text-sm ${
              active === index
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* CODE */}
      <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-sm">
        <code>{codes[active].code}</code>
      </pre>
    </div>
  );
}
