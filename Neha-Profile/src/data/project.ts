import type { ProjectItems } from "../types";

export const projects: ProjectItems[] = [
    {
    id: "pram and poise",
    name: "Pram & Poesi",
    tags: ["Group project — KYH"],
    description: "The very first project done using basic HTML and CSS.",
    repoUrl:"https://github.com/Nehac210401/pram-and-poise-redo",
  },
  {
    id: "bookshop",
    name: "Bookshop",
    tags: ["Group project — KYH"],
    description: "A sole project and use of React and Javascript. Understanding of using API without backend.",
    repoUrl:"https://github.com/Nehac210401/bookshop",
  },
  {
    id: "airbean",
    name: "Airbean",
    tags: ["Group project — KYH"],
    description: "A backend group project, to understand RESTAPI and using of Express and testing of code.",
    repoUrl:"https://github.com/Maizer89/grupp4Airbean",
  },
  {
    id: "petshop",
    name: "Petshop",
    tags: ["Group project — KYH"],
    description: "An app build using React, Javascript and understanding of basic of Strapi as a backend tool to RESTful API. A project guided by the teacher to understand the complex working of React-router and using of props.",
    repoUrl:"https://github.com/Nehac210401/petshop",
  },
  {
    id: "globalnotes",
    name: "GlobalNotes",
    tags: ["Group project — KYH"],
    description: "A more little complex group project, building of basic backend, strapi and express. Use of React and Javascript to build the frontend of the app. (A replica of Petshop app)",
    repoUrl:"https://github.com/noiralba/globenotes-group-5",
  },
  
  {
    id: "studiospot",
    name: "StudioSpot",
    tags: ["React", "TypeScript", "React Router", "Group project — KYH"],
    description:
      "A booking platform for photo, video, podcast, and music studios, built with a team of five. I owned the availability logic: validating booking times and preventing double bookings by checking new requests against existing confirmed reservations, with clear feedback shown directly in the booking form. Built with React, TypeScript, and React Router in data mode, backed by a REST API.",
      repoUrl:"https://github.com/noiralba/studiospot",
    featured: true,
  },
  
];
