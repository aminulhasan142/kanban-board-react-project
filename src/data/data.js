const initialData = [
  {
    id: crypto.randomUUID(),
    title: "Wireframes",
    description: "Set up high-fidelity prototypes with conditional logic",
    tag: "Design",
    date: "Aug 26",
    status: "To-do",
  },
  {
    id: crypto.randomUUID(),
    title: "Data Entry",
    description: "Data Entry Cleanup and validation",
    tag: "Operations",
    date: "Aug 27",
    status: "To-do",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media",
    description: "Social Media Scheduling and posting",
    tag: "Marketing",
    date: "Aug 28",
    status: "To-do",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media",
    description: "Graphic Design Edits and refinements",
    tag: "Creative",
    date: "Aug 27",
    status: "In Progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Presentation",
    description: "Presentation Slide Design",
    tag: "Development",
    date: "Aug 30",
    status: "In Progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Software Installation",
    description: "Install and configure development tools",
    tag: "Setup",
    date: "Aug 23",
    status: "Done",
  },
  {
    id: crypto.randomUUID(),
    title: "Database Design",
    description: "Database schema and optimization",
    tag: "Infrastructure",
    date: "Aug 24",
    status: "Done",
  },
];

const tags = [
  "Design",
  "Operations",
  "Marketing",
  "Creative",
  "Development",
  "Backend",
  "Setup",
  "Infrastructure",
  "Documentation",
];

export { initialData, tags };
