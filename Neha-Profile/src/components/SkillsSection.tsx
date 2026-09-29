import type { SkillGroup } from "../types";

interface SkillsSectionProps{
    title: string;
    groups: SkillGroup[];
}

export default function SkillsSection({title, groups}: SkillsSectionProps){
    if (groups.length === 0) return null;

    return (
        <section>
            <h2>{title}</h2>
            <div className="skills-grid">
                {groups.map((group)=>(
                    <div key={group.label}>
                        <p className="skill-group-label mono">{group.label}</p>
                        <ul className="skill-list">{group.items.map((item)=>(<li key={item}>{item}
                        </li>))}
                        </ul>
                        </div>
                ))}
            </div>
        </section>
    )
}