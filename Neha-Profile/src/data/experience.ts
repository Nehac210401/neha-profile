import type {ExperienceItem, TrackId} from "../types";

export const experienceByTrack: Record<TrackId, ExperienceItem[]> ={
    frontend:[],
    administrator:[
        {
            id: "Siddharth",
            period: "2011-2020",
            role: "Administrator-Siddharth Enterprise, Mumbai",
            description: "Nine years of experience as an administrator – coordination with project activities, and deliverables to the teams.Customer contact point -- problem solving, handling of communication between customers and the team, and much more. Documentation of process and procedures."
        },
        {
            id: "mg-admin",
            period: "2023",
            role: "Intern-MG Sustainable Engineering AB, Uppsala",
            description: "Coordination with project activities, and deliverables to the teams. Scheduling of meeting. Organising and processing of receipts, invoices, prepartion of reports and documentations.",
            current: true,
        }
    ],
    "account-manager": [
        {
        id: "fei",
            period: "2023-2025",
            role: "Account Manager Program, FEI(Företags Ekonomi Institute), Stockholm",
            description: "Further developing of skills of B2B sales, CRM system, Customer relations, anaysis of behovioural needs and understanding of Company's economics and sales process."
        },
        {id: "performiq",
            period: "2025",
            role: "Intern-Performiq AB, Stockholm",
            description: "Co-ordinated meetings between the company and the customers, developed better communication techniques, done onboarding of the customers, analysed feedback, improvements in the company's product(according to customer's need and requirements and much more.",
            current: true,
    }
    ],
    "project-manager":[
        {
      id: "methods",
      period: "Currently ongoing",
      role: "Project Manager",
      description:
        "Understanding of how to choose the project, which method to use in the project so that the project is much profitable, is sustainable and resources are managed is the effiecent. Also understanding of full lifecycle of the project.",
    },
    
  ],

  accountant: [
    {
      id: "mumbai-masters",
      period: "2006-2012",
      role: "Master's Degree, University of Mumbai",
      description:
        "Understanding of basics of accounting in business, the source of finance for the business, book-keeping etc. ",
    },
    {
      id: "mg-economist",
      period: "2023",
      role: "Economist, Intern — MG Sustainable Engineering AB, Uppsala",
      description:
        "Managed receipts, invoices, and documentation across reports, events, and meetings. Prepared accounting and bookkeeping records in accordance with K2, filed VAT declarations with Skatteverket, updated revenue records, and assisted management with stock purchase decisions.",
      current: true,
    },
  ],
};

    