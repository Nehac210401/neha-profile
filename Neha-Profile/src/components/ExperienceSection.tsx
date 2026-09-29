import type { ExperienceItem } from "../types";
import GenericList from "./GenericList";

interface ExperienceSectionProps{
    title: string;
    items: ExperienceItem[];
}

export default function ExperienceSection({title, items}: ExperienceSectionProps) {
    if(items.length === 0) return null;

    return (
    <section className="wrap">
      <h2>{title}</h2>
      <div className="journey">
        <GenericList
          items={items}
          renderItem={(item) => (
            <div className={`journey-row${item.current ? " current" : ""}`}>
              <div className="journey-period">{item.period}</div>
              <div>
                <div className="journey-role">{item.role}</div>
                <div className="journey-desc">{item.description}</div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}