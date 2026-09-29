import type {SkillGroup, TrackId} from "../types";

export const skillsByTrack: Record<TrackId, SkillGroup[]> = {
    frontend: [
    {
      label: "Core",
      items: [
        "HTML, CSS & JavaScript",
        "React & TypeScript",
        "React Router (data mode)",
        "CSS Modules",
        "Git & GitHub",
      ],
    },
    {
         label: "Applied",
      items: [
        "EXpress & SQLite(backend basics)",
        "RESTful APIs (building, consuming and testing)",
        "Form Validation and business logic",
        "Agile teamwork, Scrum Master, shared codebase",
        "AI assisted development workflow",
      ],
    },
],
administrator:[
    {
         label: "Day to day",
      items: [
        "Scheduling and coordinating of meeting",
        "Correspondence and documenation management",
        "Record keeping and filing systems",
        "Book-keeping, reconciliations",
        "Complaince management",
      ],
    },
    {
         label: "Working Style",
      items: [
        "Attention to detail",
        "Reliable under routine and dealine pressure",
        "Clear wirtten and verbal communications",
        "Comfortable with structured, compliant process",
        "Great with team and efficeint as single",
      ],
    },
],
"account-manager":[
    {
         label: "Client-facing",
      items: [
        "CRM proficiency",
        "Client presentaitons and relationship building",
        "Customer lifecycle and pipeline management",
        "Active Listening and needs assessment",
        "Communication Skills",
      ],
    },
    {
         label: "Strategic",
      items: [
        "B2B and Saas sales strategy",
        "Market and competitor analysis",
        "Data analysis and customer feedback",
        "Business strategy development",
        "Understanding of business",
      ],
    },
],
"project-manager":[],

accountant:[
    {
         label: "Technical",
      items: [
        "Bookkeeping and invoicing",
        "K2 (Swedish accounting rules)",
        "React Router (data mode)",
        "VAT filing with Skatteverket",
        "Financial reporting",
      ],
    },
],
};