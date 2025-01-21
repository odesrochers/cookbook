import React from "react";
import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-gray-800 text-stone-50 px-8 py-16 rounded-r-xl md:w-72">
      <h2 className="uppercase md:text-xl font-bold mb-8">Your Projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-gray-700";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-gray-900 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
