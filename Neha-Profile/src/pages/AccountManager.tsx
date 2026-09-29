import {Link} from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { experienceByTrack } from "../data/experience";
import { skillsByTrack } from "../data/skills";

export default function AccountManager(){
    return(
        <div>
            <section>
                <div>
                    <Link to="/">Profile</Link>
                </div>
                <h2>Account Manager</h2>
                <h3>2023-2025</h3>
                <p>Through FEI's Account Manager program and client facing internship at Performiq AB, I built a solid grounding in B2B and Saas sales. CRM systems and customer lifecycle management, upsales, resales etc. The much deeper understanding of customer need and requirement analysis.</p>
            </section>

            <ExperienceSection title="Experience" items={experienceByTrack["account-manager"]}/>
            <SkillsSection title="Core strenghts" groups={skillsByTrack["account-manager"]}/>
        </div>
    );
}