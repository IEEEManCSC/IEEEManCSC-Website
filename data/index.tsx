import { MdGroups, MdEvent, MdHandshake, MdPerson } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { ReactElement } from "react";

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
export interface EventCardData {
  id: number;
  image: string;
  altText: string;
  title: string;
  date: string;
  description: string;
  className: string;
}

export const events: EventCardData[] = [
  {
    id: 1,
    image: "/topleft.svg",
    altText: "Code Steps 4.0 Event",
    title: "Code Steps 4.0",
    date: "25/2/2024",
    description:
      "The event successfully engaged young students across two schools...",
    className: "w-[90%] md:w-[calc(50%-16px)] lg:w-[752px] aspect-video",
  },
  {
    id: 2,
    image: "/topRight.svg",
    altText: "IEEE Event",
    title: "IEEE Event",
    date: "15/3/2024",
    description:
      "Join us for an exciting IEEE workshop on emerging technologies...",
    className: "w-[90%] md:w-[calc(50%-16px)] lg:w-[528px] aspect-square",
  },
  {
    id: 3,
    image: "/btnLeft.svg",
    altText: "Embedded Systems Event",
    title: "Embedded Systems",
    date: "10/4/2024",
    description:
      "Explore the world of embedded systems with hands-on projects...",
    className: "w-[90%] md:w-[calc(50%-16px)] lg:w-[528px] aspect-square",
  },
  {
    id: 4,
    image: "/btnRight.svg",
    altText: "Group Event",
    title: "Group Collaboration",
    date: "20/4/2024",
    description: "Team up for a collaborative coding challenge...",
    className: "w-[90%] md:w-[calc(50%-16px)] lg:w-[752px] aspect-video",
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
