import { CodeTabs } from "@/components/codeTabs";
import { menuComponentsCode } from "@/model/modelMenuComponent";
import { useEffect, useRef, useState } from "react";

export function MenuComponent() {
  return (
    <>
      <header>
        <h2>Menu Popup</h2>
      </header>
      <div>
        {menuComponentsCode.map((tab, index) => (
          <CodeTabs
            key={index}
            index={index + 1}
            title={tab.title}
            element={tab.element}
            codes={tab.codes}
          />
        ))}
      </div>
      <MenuPopup></MenuPopup>
    </>
  );
}

export function MenuPopup() {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Logic: Kalau klik di luar menu, tutup menunya
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setShow(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <button
        className="menu-trigger btn btn-danger"
        onClick={() => setShow(!show)}>
        ou
      </button>

      {show && (
        <ul className="menu-content menu-pos-right">
          <li className="menu-item">Edit</li>
          <li className="menu-item" style={{ color: "red" }}>
            Hapus
          </li>
        </ul>
      )}
    </div>
  );
}
