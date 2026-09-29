import { Link } from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { experienceByTrack } from "../data/experience";
import { skillsByTrack } from "../data/skills";

export default function Administrator(){
    return(
        <div>
            <section>
                <div>
                    <Link to="/">Profile</Link>
                </div>
                <h2>Administrator</h2>
                <h3>2011-2020 & 2023</h3>
                <p>Nearly 9 years of exprience as an administrator. Developing of communication skills, customer interaction, handling of all kind of office work, documentation, and meditatior between customer and the team.</p>
            </section>

            <ExperienceSection title="Experience" items={experienceByTrack["administrator"]}/>
            <SkillsSection title="Core strenghts" groups={skillsByTrack["administrator"]}/>
        </div>
    );
}