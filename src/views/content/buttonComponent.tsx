import { CodeTabs } from "@/components/codeTabs";
import { buttonComponentsCode } from "@/model/modelButtonComponent";

export function ButtonComponent() {
  return (
    <>
      <header>
        <h2 className="">Button Component</h2>
        <p>various variations of buttons with different styles</p>
      </header>
      <div>
        {buttonComponentsCode.map((tab, index) => (
          <CodeTabs
            key={index}
            index={index + 1}
            title={tab.title}
            element={tab.element}
            codes={tab.codes}
          />
        ))}
      </div>
    </>
  );
}
