import { useState } from "react";

type CodeBlockProps = {
  title: string;
  rawCode: string;
  highlightedHtml: string;
  theme: string;
};

export function CodeBlock({
  title,
  rawCode,
  highlightedHtml,
  theme,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await navigator.clipboard.writeText(rawCode);
    if (ok !== undefined) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div
      className={`rounded-xl border overflow-hidden ${
        theme === "light" ? "border-gray-200" : "border-gray-700"
      }`}
    >
      {/* header */}
      <div
        className={`px-4 py-3 border-b flex items-center justify-between ${
          theme === "light"
            ? "bg-gray-50 border-gray-200"
            : "bg-gray-800 border-gray-700"
        }`}
      >
        <span
          className={`text-sm font-medium ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {title}
        </span>

        <button
          onClick={handleCopy}
          className={`text-xs px-2 py-1 rounded transition ${
            theme === "light"
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* content */}
      <div
        className="max-h-96 overflow-auto"
        dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      />
    </div>
  );
}
