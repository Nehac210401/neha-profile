import {Link} from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { experienceByTrack } from "../data/experience";
import { skillsByTrack } from "../data/skills";
import "../Styles/AccountManager.css";

export default function AccountManager(){
    return(
        <div>
            <section>
                    <Link to="/">My Profile</Link>
                <h1>Account Manager</h1>
                <h2>2023-2025</h2>
                <p>Co-ordinated meetings between clients and account management teams. Created client communication materials for presentations and updates to enhance engagement. Developed and maintained relationships with clients to ensure customer satisfaction. Evaluated market trends and competitors' activities to identify growth opportunities. Collected and analysed customer feedback through surveys and interviews to pinpoint areas for improvement. Conducted regular meetings with clients to discuss strategies for improving their accounts. Listened to customer needs to identify and recommened best products and services. <br></br>I specialized in B2B sales with a strong focus on Saas platfroms. Knowledge of CRM system and digital communication tools. Experience in customer lifecycle management and business strategy development. A solid understanding of customer-facing work and relationship management.</p>
            </section>

            <ExperienceSection title="Experience" items={experienceByTrack["account-manager"]}/>
            <SkillsSection title="Core strenghts" groups={skillsByTrack["account-manager"]}/>
        </div>
    );
}