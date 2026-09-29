export type TrackId=
|"frontend"
|"administrator"
|"account-manager"
|"project-manager"
|"accountant";

export interface TrackMeta {
    id: TrackId;
    path: string;
    navLabel: string;
    accentClass: string;
    cardLabel: string;
    cardTitle: string;
    cardBlurb: string;
}

export interface ExperienceItem{
    id: string;
    period: string;
    role: string;
    description: string;
    current?: boolean;
}

export interface SkillGroup{
    label: string;
    items: string[];
}

export interface ProjectItems{
    id: string;
    name: string;
    tags: string[];
    description: string;
    repoUrl?: string;
    featured?: boolean;
}