
export type NavBarLink = {
    label: string;
    href: string;
}

export type School = {
    title: string;
    alt: string;
    degree: string;
    period: string;
    gpa: string;
    logo: string;
}

export type Experience = {
    title: string;
    alt: string;
    role: string;
    period: string;
    skills: string[];
    bullets: string[];
    logo: string;
    url: string;
}

export type Project = {
    title: string;
    link: string;
    description: string;
    alt: string;
    techstack: string[];
    image: string;
}