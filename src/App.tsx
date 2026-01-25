import { MdTouchApp } from "react-icons/md";
import { FaArrowRight, FaBolt, FaRegStar } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import CodeTabs from "./test/codetest";
import { Footer } from "./components/footer";
import { Link } from "react-router-dom";
import modelComponent from "./model/modelComponent";
import { Badge } from "./components/assets/badge";
import { useTheme } from "./context/useTheme";

const headerItemDesc = [
  {
    title: "No Need to Install",
    icon: <GrInstallOption />,
  },
  {
    title: "Easy to use",
    icon: <MdTouchApp />,
  },
  {
    title: "Simple and fast",
    icon: <FaBolt />,
  },
];

export default function App() {
  const { theme } = useTheme();

  return (
    <>
      <header
        className={`relative min-h-screen overflow-hidden ${theme === "light" ? "bg-linear-to-br from-blue-50 to-indigo-100" : "bg-[#0b0f1a]"}`}>
        {/* Animated bubbles for both themes */}
        <div
          className={`
          absolute z-0
          w-75 sm:w-100 md:w-125
          h-75 sm:h-100 md:h-125
          rounded-full blur-[140px]
          animate-[float_18s_ease-in-out_infinite]
          -top-32 -left-24
          ${
            theme === "light"
              ? "opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.6),transparent_65%)]"
              : "opacity-70 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.9),transparent_65%)]"
          }
        `}
        />

        <div
          className={`
          absolute z-0
          w-75 sm:w-100 md:w-125
          h-75 sm:h-100 md:h-125
          rounded-full blur-[140px]
          animate-[float_22s_ease-in-out_infinite]
          -bottom-32 -right-28
          ${
            theme === "light"
              ? "opacity-25 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.5),transparent_65%)]"
              : "opacity-70 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.9),transparent_65%)]"
          }
        `}
        />

        <div
          className={`absolute inset-0 z-10 backdrop-blur-md ${theme === "light" ? "bg-white/20" : "bg-white/5"}`}
        />

        <div className="relative z-20 flex flex-col gap-4 min-h-screen items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl text-center ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              <img
                src="/rebox.png"
                alt="Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 inline-block animate-spin"
              />{" "}
              Rebox <span className="text-blue-500 text-6xl font-bold">U</span>
              <span className="text-sky-400 text-6xl font-bold">I</span>
            </h1>
          </div>
          <h4
            className={`text-base sm:text-lg md:text-xl text-center ${theme === "light" ? "text-gray-700" : "text-white"}`}>
            React components styled with plain{" "}
            <span className="text-blue-400 font-bold">CSS</span> — not
            utility-locked.
          </h4>

          <p
            className={`mt-4 text-sm sm:text-base md:text-lg font-bold text-center max-w-2xl mx-auto ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>
            Copy and paste ready <span className="text-sky-500">React UI</span>{" "}
            components styled with plain{" "}
            <span className="text-blue-400">CSS</span>.
            <br className="hidden sm:block" />
            No dependencies, no setup — just copy and use.
          </p>

          <ul className="mt-8 flex flex-col sm:flex-row md:flex-wrap justify-center gap-4 sm:gap-8">
            {headerItemDesc.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 text-sm sm:text-base whitespace-nowrap ${theme === "light" ? "text-gray-700" : "text-white"}`}>
                <span className="text-blue-400 text-lg sm:text-xl">
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/components"
              className={`no-underline ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              <button className="btn btn-primary w-full sm:w-auto px-6 py-2">
                Get Started
              </button>
            </Link>

            <a
              className={`no-underline ${theme === "light" ? "text-gray-900" : "text-white"}`}
              href="https://github.com"
              target="_blank"
              rel="noreferrer">
              <button className="btn btn-github w-full sm:w-auto px-6 py-2 flex gap-1 items-center justify-center">
                <FaRegStar /> Star on GitHub
              </button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          className={`py-28 px-4 sm:px-6 lg:px-10 ${theme === "light" ? "bg-linear-to-tr from-gray-50 to-blue-50" : "bg-linear-to-tr from-gray-800 via-slate-900 to-gray-950"}`}>
          <header className="text-center">
            <h3
              className={`font-bold text-xl sm:text-2xl ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Simple. Customize.{" "}
              <span className="text-blue-600 text-2xl sm:text-3xl">
                Readable.
              </span>
            </h3>
            <p
              className={`mt-2 text-sm sm:text-base font-bold ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>
              write css as it should be. and customize it yourself
            </p>
          </header>

          <section
            className={`w-fit p-1 sm:p-10 mx-auto rounded-xl mt-8 flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-10 border ${theme === "light" ? "bg-white border-blue-200" : "bg-gray-900 border-blue-900/40"}`}>
            <CodeTabs />
            <div className="flex items-center">
              <button className="btn btn-outline">Click me!</button>
            </div>
          </section>
        </section>

        <section
          className={`border-t ${theme === "light" ? "bg-linear-to-bl from-blue-50 to-indigo-50 border-gray-200" : "bg-linear-to-bl from-indigo-950/55 via-cyan-950/65 to-sky-950/60 border-t-gray-400"}`}>
          <header className="text-center mt-10 py-10 px-4 sm:px-6 lg:px-10">
            <h2
              className={`text-4xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Search <span className="text-blue-500 text-4xl">Components</span>
            </h2>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
              A growing collection of components, ready to use and easy to
              customize.
            </p>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-10 pb-16">
            {modelComponent.map((component, index) => (
              <li
                key={index}
                className={`rounded-lg p-4 hover:scale-105 transition-transform border ${theme === "light" ? "bg-white border-blue-200" : "bg-gray-900 border-blue-900/40"}`}>
                <div className="flex justify-between">
                  <h3
                    className={`font-bold text-lg flex gap-1 items-center ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    {component.icon} {component.title}
                  </h3>
                  <Badge variant="info" text={component.badge} />
                </div>
                <p
                  className={`text-sm mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-500"}`}>
                  {component.decs}
                </p>

                <Link className="btn btn-link" to={`/components`}>
                  <button className="mt-10 mb-4 underline">
                    View Component{" "}
                    <FaArrowRight className="inline-block ml-1" />
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
