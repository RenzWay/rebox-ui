import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";
import { steps } from "@/model/variables";
import { Badge } from "@/components/assets/badge";
import { CodeBlock } from "@/components/codeBlock";

export default function GettingStarted({ theme }: { theme: string }) {
  const [highlightedCode, setHighlightedCode] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    async function highlight() {
      const highlighter = await createHighlighter({
        langs: ["css", "jsx", "bash", "javascript"],
        themes: ["dracula-soft"],
      });

      const result: Record<string, string> = {};
      steps.forEach((step) => {
        result[step.codeKey] = highlighter.codeToHtml(step.raw, {
          lang:
            step.codeKey === "install"
              ? "bash"
              : step.codeKey === "css"
                ? "css"
                : step.codeKey === "jsx"
                  ? "jsx"
                  : "javascript",
          theme: "dracula-soft",
        });
      });

      setHighlightedCode(result);
    }

    highlight();
  }, []);

  return (
    <section className="max-w-4xl">
      {/* Hero Section */}
      <header className="mb-12">
        <Badge text="✨ Copy & Paste Components" variant="info" />
        <h1
          className={`text-4xl font-bold mb-4 ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}>
          Getting Started with Rebox
        </h1>
        <p
          className={`text-lg leading-relaxed ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}>
          Beautiful, accessible, and customizable React components. Copy the
          code, paste in your project, and you're ready to go.
        </p>
      </header>

      {/* Quick Start Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div
          className={`p-6 rounded-xl border ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-gray-800/50 border-gray-700"
          }`}>
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
              theme === "light" ? "bg-blue-100" : "bg-blue-900/30"
            }`}>
            <span className="text-xl">📋</span>
          </div>
          <h3
            className={`font-semibold mb-2 ${
              theme === "light" ? "text-gray-900" : "text-gray-100"
            }`}>
            Copy Components
          </h3>
          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
            Browse our component library and copy the ones you need
          </p>
        </div>

        <div
          className={`p-6 rounded-xl border ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-gray-800/50 border-gray-700"
          }`}>
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
              theme === "light" ? "bg-green-100" : "bg-green-900/30"
            }`}>
            <span className="text-xl">🎨</span>
          </div>
          <h3
            className={`font-semibold mb-2 ${
              theme === "light" ? "text-gray-900" : "text-gray-100"
            }`}>
            Customize Styles
          </h3>
          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
            Modify CSS variables to match your brand and design system
          </p>
        </div>

        <div
          className={`p-6 rounded-xl border ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-gray-800/50 border-gray-700"
          }`}>
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
              theme === "light" ? "bg-purple-100" : "bg-purple-900/30"
            }`}>
            <span className="text-xl">🚀</span>
          </div>
          <h3
            className={`font-semibold mb-2 ${
              theme === "light" ? "text-gray-900" : "text-gray-100"
            }`}>
            Start Building
          </h3>
          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
            Use components in your React app with full TypeScript support
          </p>
        </div>
      </div>

      {/* Detailed Steps */}
      <div className="space-y-12">
        {steps.map((step) => (
          <article key={step.id}>
            <div className="flex items-center gap-3 mb-4">
              <Badge text={String(step.id)} variant="primary" />
              <h2
                className={`text-2xl font-bold ${
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                }`}>
                {step.title}
              </h2>
            </div>

            <p
              className={`mb-6 text-lg ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
              {step.description}
            </p>

            <CodeBlock
              title={step.file}
              rawCode={step.raw}
              highlightedHtml={highlightedCode[step.codeKey]}
              theme={theme}
            />
          </article>
        ))}
      </div>

      {/* Next Steps */}
      <div
        className={`mt-16 p-8 rounded-2xl ${
          theme === "light"
            ? "bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100"
            : "bg-linear-to-r from-blue-900/20 to-indigo-900/20 border border-blue-800/30"
        }`}>
        <h2
          className={`text-2xl font-bold mb-4 ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}>
          What's Next?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3
              className={`font-semibold mb-3 ${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              }`}>
              Explore Components
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
              <li>• Browse 20+ ready-to-use components</li>
              <li>• View live examples and code snippets</li>
              <li>• Check component props and variants</li>
              <li>• Copy components with one click</li>
            </ul>
          </div>
          <div>
            <h3
              className={`font-semibold mb-3 ${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              }`}>
              Customize & Extend
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
              <li>• Modify CSS variables for your brand</li>
              <li>• Add custom variants and sizes</li>
              <li>• Extend components with new features</li>
              <li>• Build your own design system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
