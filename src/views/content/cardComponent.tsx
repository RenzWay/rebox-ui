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
        <SimpleCard />
      </div>
    </>
  );
}

function SimpleCard({ title }: { title?: string }) {
  return (
    <div className="card">
      <img className="card-img" src="/download.jpg" alt="" />
      <h3>{title || "Title"}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero
        nostrum quia animi quidem eos nihil optio excepturi minus ipsam sunt
        nisi quaerat temporibus, quasi quisquam harum? Animi, a necessitatibus!
      </p>
    </div>
  );
}
