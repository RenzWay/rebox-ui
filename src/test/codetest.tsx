import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

export default function CodeTabs() {
  const [active, setActive] = useState("react");
  const [html, setHtml] = useState({ react: "", css: "" });

  const reactCode = `export default function Button() {
  return <button className="btn btn-primary">Click</button>;
}`;

  const cssCode = `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-primary {
  background-color: var(--color-blue-500);
  color: white;

  &:hover {
    background-color: var(--color-blue-600);
  }
}`;

  useEffect(() => {
    async function highlight() {
      const highlighter = await createHighlighter({
        themes: ["github-dark"],
        langs: ["jsx", "css"],
      });

      setHtml({
        react: highlighter.codeToHtml(reactCode, {
          lang: "jsx",
          theme: "github-dark",
        }),
        css: highlighter.codeToHtml(cssCode, {
          lang: "css",
          theme: "github-dark",
        }),
      });
    }

    highlight();
  }, [cssCode, reactCode]);

  function copy() {
    navigator.clipboard.writeText(active === "react" ? reactCode : cssCode);
  }

  return (
    <div className="code-wrapper">
      {/* tabs */}
      <div className="tabs">
        <button
          className="btn-primary"
          onClick={() => setActive("react")}
          data-active={active === "react"}>
          React
        </button>
        <button
          className="btn-primary"
          onClick={() => setActive("css")}
          data-active={active === "css"}>
          CSS
        </button>

        <button className="copy btn-primary" onClick={copy}>
          Copy
        </button>
      </div>

      {/* code */}
      <div
        className="code"
        dangerouslySetInnerHTML={{
          __html: active === "react" ? html.react : html.css,
        }}
      />
    </div>
  );
}
