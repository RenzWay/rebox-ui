import { useState } from "react";
import { LuComponent, LuMenu, LuX } from "react-icons/lu";
import { ButtonComponent } from "./content/buttonComponent";
import BadgeComponent from "./content/badgeComponent";
import CardComponent from "./content/cardComponent";
import { useTheme } from "@/context/useTheme";

const sidebarItems = [
  "Introduction",
  "Getting Started",
  "Button",
  "Badge",
  "Card",
  "Modal",
  "Tooltip",
];

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState<string>("Button");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const handleItemClick = (item: string) => {
    setActiveComponent(item);
    setSidebarOpen(false);
  };

  return (
    <>
      <main className={`min-h-screen ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-950 text-gray-100'}`}>
        <header className={`px-4 sm:px-8 py-6 mb-8 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`flex gap-1 items-center font-bold ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                <LuComponent /> Components
              </h2>
              <p className={`text-sm sm:text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                A collection of reusable UI elements
              </p>
            </div>
            <button
              className={`lg:hidden p-2 rounded-md ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' : 'bg-gray-800 hover:bg-gray-700 text-gray-100'}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <LuX size={20} /> : <LuMenu size={20} />}
            </button>
          </div>
        </header>

        <section className="flex relative">
          <aside
            className={`
              fixed lg:sticky top-0 left-0 z-50
              w-64 lg:w-56 h-full lg:h-screen
              px-4 lg:px-6 py-8
              transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              ${theme === 'light' ? 'border-r border-gray-200 bg-white' : 'border-r border-gray-800 bg-gray-950'}
            `}>
            <div className="lg:hidden flex justify-end mb-4">
              <button
                className={`p-2 rounded-md ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' : 'bg-gray-800 hover:bg-gray-700 text-gray-100'}`}
                onClick={() => setSidebarOpen(false)}>
                <LuX size={16} />
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {sidebarItems.map((item) => (
                <li
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`
                    cursor-pointer text-sm px-3 py-2 rounded-md transition-all
                    ${
                      activeComponent === item
                        ? "font-bold text-white bg-blue-500/60"
                        : theme === 'light' 
                          ? "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900" 
                          : "text-gray-400 bg-gray-500/10 hover:bg-gray-500/20 hover:text-white"
                    }
                  `}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <section className="flex-1 px-4 sm:px-6 lg:px-10 py-8 w-full lg:w-auto">
            {activeComponent === "Button" && <ButtonComponent />}
            {activeComponent === "Badge" && <BadgeComponent />}
            {activeComponent === "Card" && <CardComponent />}
            {activeComponent === "Introduction" && (
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>Introduction</h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  Welcome to Rebox UI components. Choose a component from the
                  sidebar to get started.
                </p>
              </div>
            )}
            {activeComponent === "Getting Started" && (
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>Getting Started</h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  Learn how to use Rebox components in your project.
                </p>
              </div>
            )}
          </section>
        </section>
      </main>
    </>
  );
}