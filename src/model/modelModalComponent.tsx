import { ExampleModal } from "@/components/modal";
import type { CodeTabsProps } from "@/interface/interface";

export const modalComponentCode: CodeTabsProps[] = [
  {
    title: "Basic Modal",
    element: (
      <>
        <ExampleModal />
      </>
    ),
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `import { useState } from "react";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}

function Modal({ open, children, onClose, title }: ModalProps) {
  if (!open) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        {title && <h1 className="modal-header">{title}</h1>}
        <div className="modal-body">{children}</div>
        <footer className="modal-footer">
          <button className="btn btn-danger" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </>
  );
}

function ExampleModal() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="btn btn-primary">
        Open Modal
      </button>
      
      <Modal 
        open={openModal} 
        onClose={() => setOpenModal(false)}
        title="Example Modal"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque quam culpa est reiciendis. Eveniet cum perferendis
          saepe voluptatibus impedit corporis quia, dolorum nam maxime
          consectetur! Quis ad adipisci minus inventore.
        </p>
      </Modal>
    </div>
  );
}`,
      },
      {
        label: "React (JSX)",
        language: "jsx",
        code: `import { useState } from "react";

function Modal({ open, children, onClose, title }) {
  if (!open) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        {title && <h1 className="modal-header">{title}</h1>}
        <div className="modal-body">{children}</div>
        <footer className="modal-footer">
          <button className="btn btn-danger" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </>
  );
}

function ExampleModal() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="btn btn-primary">
        Open Modal
      </button>
      
      <Modal 
        open={openModal} 
        onClose={() => setOpenModal(false)}
        title="Example Modal"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque quam culpa est reiciendis. Eveniet cum perferendis
          saepe voluptatibus impedit corporis quia, dolorum nam maxime
          consectetur! Quis ad adipisci minus inventore.
        </p>
      </Modal>
    </div>
  );
}`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.modal {
  position: fixed;
  z-index: 1000;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.98);

  width: 100%;
  max-width: 26rem;
  max-height: 85vh;

  padding: 1.5rem;

  background: var(--modal-bg-dark);
  backdrop-filter: blur(20px) saturate(160%);

  border-radius: 0.875rem;
  border: 1px solid var(--modal-border-dark);

  color: var(--modal-text-light);

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.35),
    0 40px 80px rgba(0, 0, 0, 0.4);

  overflow-y: auto;

  animation: modal-in 0.18s ease-out forwards;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;

  background: var(--modal-overlay);
  backdrop-filter: blur(6px);
}

.modal-header {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.modal-body {
  margin-bottom: 1rem;
}

.modal-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: translate(-50%, -45%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.modal {
  position: fixed;
  z-index: 1000;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.98);

  width: 100%;
  max-width: 26rem;
  max-height: 85vh;

  padding: 1.5rem;

  background: rgba(30, 30, 30, 0.75);
  backdrop-filter: blur(20px) saturate(160%);

  border-radius: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.08);

  color: #f5f5f5;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.35),
    0 40px 80px rgba(0, 0, 0, 0.4);

  overflow-y: auto;

  animation: modal-in 0.18s ease-out forwards;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;

  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
}

.modal-header {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.modal-body {
  margin-bottom: 1rem;
}

.modal-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: translate(-50%, -45%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}`,
      },
    ],
  },
];
