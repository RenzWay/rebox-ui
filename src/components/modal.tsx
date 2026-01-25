import { useState } from "react";

export function ExampleModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="btn btn-primary">
        Open Modal
      </button>

      {openModal && (
        <>
          <div className="modal-overlay" onClick={() => setOpenModal(false)} />

          <div className="modal">
            <header className="modal-header">
              <h1 className="">Title</h1>
            </header>
            <p className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque quam culpa est reiciendis. Eveniet cum perferendis
              saepe voluptatibus impedit corporis quia, dolorum nam maxime
              consectetur! Quis ad adipisci minus inventore.
            </p>
            <footer className="modal-footer">
              <button
                className="btn btn-danger"
                onClick={() => setOpenModal(false)}>
                Close
              </button>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
