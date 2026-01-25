import { CodeTabs } from "@/components/codeTabs";
import { tooltipComponentCode } from "@/model/modelTooltipComponent";

export default function TooltipComponent() {
  return (
    <>
      <header>
        <h2>Tooltip Component</h2>
        <p>
          A tooltip component displays informative text or content when users
          hover over, focus on, or click an element. It provides additional
          context or explanations without cluttering the main interface{" "}
        </p>{" "}
      </header>
      <div>
        {tooltipComponentCode.map((code, index) => (
          <CodeTabs
            title={code.title}
            element={code.element}
            codes={code.codes}
            index={index + 1}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
