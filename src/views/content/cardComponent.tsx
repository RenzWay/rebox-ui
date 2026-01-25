import { CodeTabs } from "@/components/codeTabs";
import { CardComponentCode } from "@/model/modelCardComponent";

export default function CardComponent() {
  return (
    <>
      <header>
        <h2>Card Component</h2>
        <p className="w-1/2 mt-3">
          Cards are flexible containers for grouping related content. Rebox
          cards are built with clean structure and minimal CSS, making them easy
          to extend and style.
        </p>
      </header>
      <div>
        {CardComponentCode.map((card, index) => (
          <CodeTabs
            key={index}
            index={index + 1}
            title={card.title}
            element={card.element}
            codes={card.codes}></CodeTabs>
        ))}
      </div>
    </>
  );
}
