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
interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
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
export const events: Event[] = [
  {
    id: "code-steps-4.0",
    title: "Code Steps 4.0",
    date: "29/12/2024",
    image: "/image.png",
    description:
      "An intensive coding bootcamp designed for students across two schools. A total of 20 volunteers from the biggest participated — served as instructors, while 16 acted as evaluators.",
  },
  {
    id: "dev-duel-1.0",
    title: "Dev Duel 1.0",
    date: "9/11/2024",
    image: "/image.png",
    description:
      "A competitive programming contest that challenges the top IEEE Mansoura Computer Science Chapter members. 5 teams for every category: Software, Embedded Systems, Data and AI with Science.",
  },
  {
    id: "victor-db-3.0",
    title: "VictorDB 3.0",
    date: "25/8/2024",
    image: "/image.png",
    description:
      "A different technical booth, beginning with online sessions supervised by expert speakers, followed by securing the database with real-world scenarios.",
  },
  {
    id: "sudo-1",
    title: "Sudo-1",
    date: "14/2/2024",
    image: "/image.png",
    description:
      "An online Capture The Flag (CTF) competition featuring cybersecurity organized by IEEE Mansoura Computer Science Chapter. This bootcamp is designed for beginners to advanced students.",
  },
  {
    id: "event-5",
    title: "Event 5",
    date: "15/1/2024",
    image: "/image.png",
    description:
      "Another exciting event description here for testing pagination functionality.",
  },
  {
    id: "event-6",
    title: "Event 6",
    date: "10/1/2024",
    image: "/image.png",
    description:
      "Final event description to demonstrate the pagination working correctly.",
  },
];
