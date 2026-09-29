import { Link } from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { experienceByTrack } from "../data/experience";
import { skillsByTrack } from "../data/skills";


export default function Accountanting(){
    return(
        <>
        <div>
            <section>
                <Link to="/">Profile</Link>
            </section>
            <div>
                <h1> 2012 & 2023 Accounting and Finance</h1>
                <p>A Master's degree in Accounting and Finance, to understand the business module. In depth of finances that keep the business running and making it profitable. The importance of financial reporting, invocing and much more.</p>
            </div>
        </div>
        <ExperienceSection title= "Education and experience" items= {experienceByTrack.accountant}/>
        <SkillsSection title="What is built" groups={skillsByTrack.accountant}/>
        </>
    )
}