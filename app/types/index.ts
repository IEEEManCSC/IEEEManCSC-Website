import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement } from "react";

export interface StatItem {
  icon: ReactElement;
  count: string;
  label: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  outlineIcon: string;
  filledIcon: string;
}

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  details: {
    dateFrom: string;
    dateTo: string;
    location: string;
    content?: string;
    sessionsNumber: string;
  };
  description: {
    icon?: string;
    title: string;
    content: string[];
  }[];
}

export interface MemberSocials {
  linkedin?: string;
  email?: string;
  github?: string;
}

export interface BoardMember {
  id: number;
  name: string;
  role: string;
  image: StaticImport;
  socials: MemberSocials;
}

export interface Heads {
  id: number;
  name: string;
  role: string;
  image: StaticImport;
  socials: MemberSocials;
}
export interface Committee {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}
export interface CommitteeDetail {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  intro: string;
  description: string[];
  roadmapUrl: string;
  youtubeUrl?: string;
  mentors: {
    id: number;
    name: string;
    role: string;
    image: string;
    socials: MemberSocials;
  }[];
}
