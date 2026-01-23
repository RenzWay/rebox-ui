import { CodeTabs } from "@/components/codeTabs";
import { badgeComponentsCode } from "@/model/modelBadgeComponent";

export default function BadgeComponent() {
  return (
    <>
      <header>
        <h2>Badge</h2>
        <p>
          Badges are small UI elements that display brief information or status.
        </p>
      </header>
      <div>
        {badgeComponentsCode.map((item, index) => (
          <CodeTabs
            key={index}
            index={index + 1}
            title={item.title}
            element={item.element}
            codes={item.codes}></CodeTabs>
        ))}
      </div>
    </>
  );
}
