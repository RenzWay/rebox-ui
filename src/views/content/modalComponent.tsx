import { modalComponentCode } from "@/model/modelModalComponent";
import { CodeTabs } from "@/components/codeTabs";

export default function ModalComponent() {
  return (
    <>
      <header>
        <h2>Modal Component</h2>

        <p>
          Modal is a popup window that appears above the page content to display
          important information or request input
        </p>
      </header>
      <div>
        {modalComponentCode.map((code, index) => (
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
