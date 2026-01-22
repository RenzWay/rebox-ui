import { useState } from "react";
import { LuComponent } from "react-icons/lu";
import { ButtonComponent } from "./content/buttonComponent";
import BadgeComponent from "./content/badgeComponent";

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
  return (
    <>
      <main className="min-h-screen bg-gray-950 text-gray-100">
        <header className="px-8 py-6 mb-8 border-b border-gray-800">
          <h2 className="flex gap-1 items-center font-bold"><LuComponent /> Components</h2>
          <p className="text-gray-400">
            A collection of reusable UI elements
          </p>
        </header>

        <section className="flex">
          {/* SIDEBAR */}
          <aside className="w-56 border-r border-gray-800 px-6 py-8 sticky top-16 h-screen">
            <ul className="flex flex-col gap-2">
              {sidebarItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveComponent(item)}
                  className={`cursor-pointer text-sm text-gray-400 px-3 py-2 rounded-md transition-all hover:text-white  ${activeComponent === item ? "font-bold text-white bg-blue-500/60" : "bg-gray-500/10"}`}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <section className="flex-1 px-10 py-8">
            {activeComponent === "Button" && (
              <ButtonComponent></ButtonComponent>
            )}
            {activeComponent === "Badge" && (
              <BadgeComponent></BadgeComponent>
            )}
          </section>
        </section>
      </main>
    </>
  );
}
