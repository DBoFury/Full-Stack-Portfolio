import { contacts, projects, sections, skills } from '@/helpers/data';

export type ProjectType = (typeof projects)[number];

export type ContactType = (typeof contacts)[number];

export type SectionName = (typeof sections)[number]['name'];
export type SectionsType = typeof sections;

export type SkillType = (typeof skills)['frontend' | 'backend'][number];
