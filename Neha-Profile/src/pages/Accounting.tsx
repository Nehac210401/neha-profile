import { Link } from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { experienceByTrack } from "../data/experience";
import { skillsByTrack } from "../data/skills";
import "../Styles/Accounting.css";

export default function Accounting(){
    return(
        <>
        <div>
            <section>
                <Link to="/">My Profile</Link>
            </section>
            <div>
                <h1> Accounting and Finance</h1>
                <h2>2012 and 2023</h2>
                <p>Commerce and business administration. Business accounting and finance. Business operations, documentation and analytical skills. Specialized in business accounting and finance to drive profitable growth. Has developed strong operational, documentation and analytical skills to drive business value.
                    <br />Managed receipts, invoices and documentations of all reports, events and meeting. Assisted management with stock purchase decisions. Preparing of Accounting and book-keeping books in accordance with K2. Filling up of VAT with Skatteverket (Swedish Tax Agency). Updating revenue records.
                </p>
            </div>
        </div>
        <ExperienceSection title= "Education and experience" items= {experienceByTrack.accountant}/>
        <SkillsSection title="What is built" groups={skillsByTrack.accountant}/>
        </>
    )
}