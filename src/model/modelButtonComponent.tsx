import type { CodeTabsProps } from "@/interface/interface";

export const buttonComponentsCode: CodeTabsProps[] = [
  {
    title: "Primary Button",
    element: <button className="btn btn-primary">Primary Button</button>,
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `<button className="btn btn-primary">Primary Button</button>`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-primary {
  background-color: var(--color-blue-500);
  color: white;

  &:hover {
    background-color: var(--color-blue-600);
  }
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;

  &:hover {
    background-color: #2563eb;
  }
}`,
      },
    ],
  },
  {
    title: "Secondary Button",
    element: <button className="btn btn-secondary">Secondary Button</button>,
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `<button className="btn btn-secondary">Secondary Button</button>`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-secondary {
  background-color: var(--color-gray-200);
  color: black;

  &:hover {
    background-color: var(--color-gray-300);
  }
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: black;

  &:hover {
    background-color: #d1d5db;
  }
}`,
      },
    ],
  },
  {
    title: "Outline Button",
    element: <button className="btn btn-outline">Outline Button</button>,
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `<button className="btn btn-outline">Outline Button</button>`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-outline {
  background-color: rgba(23, 37, 84, 0.3);
  border: 2px solid var(--color-blue-500);
  color: var(--color-blue-500);

  &:hover {
    background-color: var(--color-blue-500);
    color: white;
  }
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-outline {
  background-color: rgba(23, 37, 84, 0.3);
  border: 2px solid #3b82f6;
  color: #3b82f6;

  &:hover {
    background-color: #3b82f6;
    color: white;
  }
}`,
      },
    ],
  },
  {
    title: "Link Button",
    element: <button className="btn btn-link">Link Button</button>,
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `<button className="btn btn-link">Link Button</button>`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-link{
  text-decoration: underline !important;
  color: var(--color-blue-600);

  &:hover {
    color: var(--color-blue-800);
  }
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-link{
  text-decoration: underline !important;
  color: #3b82f6;

  &:hover {
    color: #1d4ed8;
  }
}`,
      },
    ],
  },
  {
    title: "Danger Button",
    element: <button className="btn btn-danger">Danger</button>,
    codes: [
      {
        label: "React",
        language: "tsx",
        code: `<button className="btn btn-danger">Danger</button>`,
      },
      {
        label: "CSS (Variables)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-danger {
  background-color: var(--color-red-500);
  color: white;

  &:hover {
    background-color: var(--color-red-600);
  }
}`,
      },
      {
        label: "CSS (Plain)",
        language: "css",
        code: `.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.btn-danger {
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: #dc2626;
  }
}`,
      },
    ],  
  },
];
