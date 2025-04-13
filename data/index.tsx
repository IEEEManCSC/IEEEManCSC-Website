import { MdGroups, MdEvent, MdHandshake, MdPerson } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { ReactElement } from "react"; // Add this import

interface StatItem {
  icon: ReactElement;
  count: string;
  label: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  outlineIcon: string;
  filledIcon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting beautiful interfaces for modern websites.",
    outlineIcon: "/icons/web-outline.svg",
    filledIcon: "/icons/web-filled.svg",
  },
  {
    id: 2,
    title: "App Development",
    description: "Building smooth and performant mobile apps.",
    outlineIcon: "/icons/app-outline.svg",
    filledIcon: "/icons/app-filled.svg",
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Designing strong visual identities and logos.",
    outlineIcon: "/icons/brand-outline.svg",
    filledIcon: "/icons/brand-filled.svg",
  },
];

export const stats: StatItem[] = [
  {
    icon: <MdGroups size={36} />,
    count: "+30",
    label: "Members",
  },
  {
    icon: <MdEvent size={36} />,
    count: "+10",
    label: "Events",
  },
  {
    icon: <MdHandshake size={36} />,
    count: "+6",
    label: "Partners",
  },
  {
    icon: <LuBadgeCheck size={36} />,
    count: "+2",
    label: "Years Old",
  },
  {
    icon: <MdPerson size={36} />,
    count: "+10",
    label: "Mentors",
  },
];
