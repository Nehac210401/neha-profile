import type {ProjectItems} from "../types";
import GenericList from "./GenericList";

interface ProjectsSectionProps{
    items: ProjectItems[];
}
export default function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section className="wrap">
      <h2>Projects</h2>
      <div className="projects-grid">
        <GenericList
          items={items}
          renderItem={(project) => (
            <div className={`project-card${project.featured ? " featured" : ""}`}>
              <p className="project-name">{project.name}</p>
              <div>
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`project-desc${project.featured ? "" : " placeholder"}`}>
                {project.description}
              </p>
              <div className="project-links">
                <a href={project.repoUrl ?? "#"} target="_blank" rel="noopener noreferrer">
                  {project.repoUrl ? "View repo →" : "Add repo link →"}
                </a>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
