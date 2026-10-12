import { Link } from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { experienceByTrack } from "../data/experience";
import { skillsByTrack } from "../data/skills";
import "../Styles/Administrator.css";

export default function Administrator(){
    return(
        <div>
            <section>
                    <Link to="/">My Profile</Link>
                <h1>Administrator</h1>
                <h2>2011-2020 & 2023</h2>
                <p>Nine years of experience in administration in a large organisation, coordinated project activites, travel and deliveries across teams. Experience in customer and business contact, answering emails and questions from customers and suppliers, solving problems and communicating between parties. Reconcliliation of accounts receivable and accounts payable as well as ongoing book-keeping. Developed and maintained documentation, templates and routines for the administrative work. Produced status reports and budget documentation, as well as obtained documentation for managment decisions. Handled and resolved issues in dialogue with stakeholders. Supporting for billing, invoicing and reporting processes. Have clear communication and client relationship management.</p>
            </section>

            <ExperienceSection title="Experience" items={experienceByTrack["administrator"]}/>
            <SkillsSection title="Core strenghts" groups={skillsByTrack["administrator"]}/>
        </div>
    );
}