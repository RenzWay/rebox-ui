import type { CodeTabsProps } from "@/interface/interface";
import { CiMenuKebab } from "react-icons/ci";

export const menuComponentsCode: CodeTabsProps[] = [
  {
    title: "Menu Popup",
    element: (
      <>
      <button className="btn btn-primary">
        <CiMenuKebab size={"1.85rem"}></CiMenuKebab>
      </button>
      </>
    ),
    codes: [
      { label: "React", language: "tsx", code: "" },
      { label: "React (JSX)", language: "jsx", code: "" },
    ],
  },
];
