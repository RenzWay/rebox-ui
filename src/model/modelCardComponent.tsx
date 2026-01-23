import type { CodeTabsProps } from "@/interface/interface";

export const CardComponentCode: CodeTabsProps[] = [
  {
    title: "Simple Card",
    element: (
      <div className="card">
        <h3>Title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi
          maxime labore accusantium rem odit quos libero, repellendus hic itaque
          quo quia magnam! Beatae nobis modi a, veniam adipisci hic.
        </p>
      </div>
    ),
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `
function SimpleCard({title, description}: {title?: string; description?: string}) {
  return (
    <div className="card">
      <h3>{title || "Title"}</h3>
      <p>{description || "Description text"}</p>
    </div>
  );
}`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `
.card {
  padding: 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-gray-700);
  background-color: var(--color-gray-900);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  max-width: 24rem;

  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}`,
      },

      {
        label: "CSS (Plain)",
        language: "css",
        code: `
.card {
  padding: 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid #374151;
  background-color: #111827;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  max-width: 24rem;

  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}`,
      },
    ],
  },
  {
    title: "Card Image",
    element: (
      <div className="card">
        <div className="bg-lime-500 w-full h-48 rounded-lg mb-4"></div> 
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero
          nostrum quia animi quidem eos nihil optio excepturi minus ipsam sunt
          nisi quaerat temporibus, quasi quisquam harum? Animi, a
          necessitatibus!
        </p>
      </div>
    ),
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `
function CardImage({title, description}: {title?: string; description?: string}) {
  return (
    <div className="card">
      <img className="card-img" src="/download.jpg" alt="" />
      <h3>{title || "Title"}</h3>
      <p>{description || "Description text"}</p>
    </div>
  );
}`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `
.card-img {
  width: 100%;
  max-height: 12rem;
  object-fit: contain;
  display: block;

  border-radius: 0.5rem;
  margin-bottom: 1rem;

  background-color: #0b0f1a; /* Fallback color */
}
        `,
      },
    ],
  },
];
