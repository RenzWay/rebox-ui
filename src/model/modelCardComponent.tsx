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
        code: `function SimpleCard({title, description}: {title?: string; description?: string}) {
  return (
    <div className="card">
      <h3>{title || "Title"}</h3>
      <p>{description || "Description text"}</p>
    </div>
  );
}`,
      },
      {
        label: "React (JSX)",
        language: "jsx",
        code: `function SimpleCard({title, description}) {
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
        code: `function CardImage({title, description}: {title?: string; description?: string}) {
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
        label: "React (JSX)",
        language: "jsx",
        code: `function CardImage({title, description}) {
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
  {
    title: "Card Interaction",
    element: (
      <div className="card card-interaction">
        <h3>Interactive Card</h3>
        <p>
          Hover and click me! This card has advanced 3D interactions with smooth animations.
        </p>
      </div>
    ),
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `function InteractiveCard({title, description}: {title?: string; description?: string}) {
  return (
    <div className="card card-interaction">
      <h3>{title || "Interactive Card"}</h3>
      <p>{description || "Hover and click me! This card has advanced 3D interactions with smooth animations."}</p>
    </div>
  );
}`,
      },
      {
        label: "React (JSX)",
        language: "jsx",
        code: `function InteractiveCard({title, description}) {
  return (
    <div className="card card-interaction">
      <h3>{title || "Interactive Card"}</h3>
      <p>{description || "Hover and click me! This card has advanced 3D interactions with smooth animations."}</p>
    </div>
  );
}`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.card-interaction:hover {
  transform: translateY(-12px) rotateX(15deg) rotateY(5deg);
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.3),
    0 15px 25px rgba(0,0,0,0.2),
    0 5px 15px var(--blue-500);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-interaction:active {
  transform: scale(0.95) rotateX(-8deg) rotateY(8deg);
  box-shadow: 
    0 8px 20px rgba(0,0,0,0.4),
    0 4px 12px rgba(0,0,0,0.3),
    0 2px 8px var(--blue-400);
}

.card-interaction::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    225deg,
    rgba(255,255,255,0.15) 0%,
    var(--blue-500) 25%,
    transparent 60%
  );
  border-radius: var(--rounded-xl);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-interaction:hover::before {
  opacity: 0.1;
}

.card-interaction::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 0.85rem;
  background: linear-gradient(
    135deg,
    var(--blue-500) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card-interaction:hover::after {
  opacity: 0.3;
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.card-interaction:hover {
  transform: translateY(-12px) rotateX(15deg) rotateY(5deg);
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.3),
    0 15px 25px rgba(0,0,0,0.2),
    0 5px 15px rgba(59, 130, 246, 0.1);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-interaction:active {
  transform: scale(0.95) rotateX(-8deg) rotateY(8deg);
  box-shadow: 
    0 8px 20px rgba(0,0,0,0.4),
    0 4px 12px rgba(0,0,0,0.3),
    0 2px 8px rgba(59, 130, 246, 0.2);
}

.card-interaction::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    225deg,
    rgba(255,255,255,0.15) 0%,
    rgba(59, 130, 246, 0.1) 25%,
    transparent 60%
  );
  border-radius: 0.75rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-interaction:hover::before {
  opacity: 1;
}

.card-interaction::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 0.85rem;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.3) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card-interaction:hover::after {
  opacity: 1;
}`,
      },
    ],
  },
];
