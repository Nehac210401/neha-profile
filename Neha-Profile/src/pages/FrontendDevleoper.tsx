import { Link } from "react-router";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectSection";
import { skillsByTrack } from "../data/skills";
import {projects} from "../data/project";
import "../Styles/FrontendDeveloper.css";

export default function FrontEndDeveloper(){
    return(
        <div>
            <section>
                    <Link to="/">My Profile</Link>
                <h1>FrontEnd Developer</h1>
                <h2>2025-2027</h2>
                <p>Currently studying to be a Front-End Developer with KYH, Sweden. Building modern web application using React, TypeScript, JavaScript including basics of HTML, CSS and various CSS modules. Database and backend fundamentals alongside frontend coursework which include SQLite, Express and Strapi. Wireframing, prototyping and interfaces with the help of UX tools such as Figma and Canva. Version control and collaborative development workflows co-ordinating in Git and GitHub.</p>
            </section>

            <SkillsSection title="Skills" groups={skillsByTrack.frontend}/>
            <ProjectsSection items={projects}/>
        </div>
    );
}