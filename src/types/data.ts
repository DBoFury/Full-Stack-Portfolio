import { contacts, projects, sections } from '@/helpers/data';

export type ProjectType = (typeof projects)[number];

export type ContactType = (typeof contacts)[number];

export type SectionName = (typeof sections)[number]['name'];
