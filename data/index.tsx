import { MdGroups, MdEvent, MdHandshake, MdPerson } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { Service, StatItem, Event, BoardMember, Heads } from "@/app/types";

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
    id: "codesteps",
    title: "Code Steps 4.0",
    subtitle:
      "The event successfully engaged young students across two schools. A total  of 20 volunteers from the chapter participated—4 served as instructors,  while 16 acted as assistants. ",
    image: "/events/code-step.svg",
    details: {
      dateFrom: "22/5/2025",
      dateTo: "24/5/2025",
      location:
        "Al-Wady Language Schools For Girls, Mansoura College International Schools  ",
      content: "Python Fundamentals",
      sessionsNumber: "3 Offline, 2 Online, competition",
    },
    description: [
      {
        icon: "🧪",
        title: "Labs & Participants",
        content: [
          "College Labs: 2 labs—one for IG students and one for American students; each accommodates 25 students.",
          "Wady Labs: 2 labs, each with 20 students.",
          "Grade Distribution: One lab for grades 4–6 and another for grades 7–8.​",
        ],
      },
      {
        icon: "👥",
        title: "Staffing",
        content: [
          "Total Staff: 2 instructors and 8 assistants.",
          "Per Lab: Each lab is managed by 1 instructor and 4 assistants.",
        ],
      },
      {
        icon: "📅",
        title: "Sessions Overview",
        content: [
          "Offline Sessions: 3 sessions, each lasting 3 hours, including welcoming, attendance, content delivery, activities, and breaks.",
          "Online Sessions:",
          "First session: 1.5–2 hours covering attendance, content, activities, and breaks.",
          "Second session: 2–2.5 hours dedicated to comprehensive content revision.",
          "Competition: Includes multiple-choice questions and Python problem-solving tasks, with difficulty levels adjusted for IG and American students.​",
        ],
      },
      {
        icon: "📢",
        title: "Communication Channels",
        content: [
          "Dedicated channels for each lab, managed by instructors and assistants.",
          "Used to share recorded sessions for absentees and provide homework solutions.",
        ],
      },
    ],
  },
  {
    id: "victory",
    title: "VICTORIS 3.0",
    subtitle:
      "participants with a unique opportunity to showcase their skills, gain  practical experience, and receive recognition for their achievements",
    image: "/events/victories.jpg",
    details: {
      dateFrom: "25 Aug 2024 12:00 PM",
      dateTo: "26 Sep 2024 06:00 PM",
      location: "ITI Mansoura",
      sessionsNumber: "online sessions supervised by expert speakers",
    },
    description: [
      {
        title: "Competitions",
        content: [
          "Micromouse (1-5 Members)",
          "CTF (2-3 Members)",
          "Data-driven Software quest (5-8 Members)",
          "IoT (3-5 Members)",
        ],
      },
      {
        title: "Vision",
        content: [
          "Under the slogan “Innovate Your World,” we aim to build an insightful, innovative, intellectually mature engineering community, aware of market requirements, and contributes to its development.",
        ],
      },
      {
        title: "How it Went",
        content: [
          "Chapter volunteers assumed roles such as coordinators, technical directors, support, and Mentors. Around 30 volunteer participated.",
        ],
      },
      {
        title: "Competitions Details",
        content: [
          "Micromouse: This competition challenges participants to explore a maze by using their autonomous robot and compete for the shortest time to reach the center of the maze.",
          "IoT: This competition challenges participants to develop innovative IoT solutions to address real-world problems.",
          "The Data-Driven Software Quest: The Data-Driven Software Quest purpose is to encourage participants to apply their understanding of software engineering principles and processes.",
          "CTF: The CTF purpose is to encourage participants to apply their understanding of cybersecurity principles and processes in a simulated environment.",
        ],
      },
      {
        title: "Awards",
        content: [
          "Winners received financial prizes worth over 90,000 EGP from the National Telecom Regulatory Authority (NTRA). The event ended with a celebration honoring the outstanding participants who made this edition a success.",
        ],
      },
    ],
  },
  {
    id: "sudo-ibootcamp",
    title: "Sudo-i Bootcamp",
    subtitle:
      "The Sudo-i Bootcamp empowers you with practical skills in DevOps, cloud technologies, and AI development, culminating in a hands-on project that brings together CI/CD and machine learning",
    image: "/events/sudo-i.jpg",
    details: {
      dateFrom: "15/2/2025",
      dateTo: "26/2/2025",
      location: "ITI Mansoura",
      content: "Python Fundamentals",
      sessionsNumber: "6 Offline",
    },
    description: [
      {
        icon: "🧪",
        title: "Labs & Participants",
        content: [
          "Weekly hands-on labs focused on applying learned skills.",
          "Participants collaborate in teams to solve real-world problems.",
          "Projects are reviewed by mentors and domain experts.",
          "Tools like GitHub and cloud credits are provided for support.",
        ],
      },
      {
        icon: "👥",
        title: "Staffing",
        content: [
          "Experienced mentors lead each topic area.",
          "Teaching Assistants (TAs) are available for continuous support.",
          "An organizing team handles scheduling, logistics, and technical help.",
        ],
      },
      {
        icon: "📅",
        title: "Sessions Overview",
        content: [
          "Each week includes a core lecture and a hands-on lab.",
          "Weekly deliverables help track learning progress.",
          "Short team standups keep everyone aligned.",
          "Weekly wrap-ups for feedback, Q&A, and reflection.",
        ],
      },
      {
        icon: "📢",
        title: "Communication Channels",
        content: [
          "Discord is the primary space for communication and updates.",
          "Google Classroom or Notion will host materials and deadlines.",
          "GitHub is used for collaboration and project submissions.",
          "Official updates and feedback will be shared via email.",
        ],
      },
    ],
  },
];
export const board: BoardMember[] = [
  {
    id: 1,
    name: "Ola Mohamed",
    role: "Vice Board",
    image: "/board/ola.svg",
    socials: {
      linkedin: "http://linkedin.com/in/ola-mohamed-6673441b1 ",
      github: "https://github.com/0laM0hamed ",
    },
  },
  {
    id: 2,
    name: "Dr. Sherif Kishk",
    role: "Branch Counselor",
    image: "/board/sherifkishk.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/kishk-sherif/",
      email: "shkishk@mans.edu.eg",
    },
  },
  {
    id: 3,
    name: "Ahmed Adel",
    role: "Board",
    image: "/board/ahmedwafdy.svg",
    socials: {
      email: "ahmedadelwafdy782@gmail.com",
      github: "https://github.com/AhmedAdelWafdy7",
      linkedin: "https://www.linkedin.com/in/ahmed-wafdy-094567242/",
    },
  },
  {
    id: 4,
    name: "Hossam Mohsen",
    role: "Webmaster",
    image: "/board/hossam.svg",
    socials: {
      email: "hosam.mohsen13@gmail.com",
      linkedin: "https://www.linkedin.com/in/hossammohsen/",
    },
  },
  {
    id: 5,
    name: "Ammar Yasser",
    role: "Treasurer",
    image: "/board/ammar.svg",
    socials: {
      email: "ammarsleem321@gmail.com",
      linkedin: "https://www.linkedin.com/in/ammaryoussef",
    },
  },
  {
    id: 6,
    name: "Zahraa Ragab",
    role: "Secretary",
    image: "/board/zahraa.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/zahraa-ragab-1789b1266/",
      email: "zahraaragab2002@gmail.com",
    },
  },
];

export const heads: Heads[] = [
  {
    id: 1,
    name: "Aya Bedair",
    role: "Embedded Systems",
    image: "/comittesboard/headembedded.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/aya-bedair-38905b278/",
      github: "https://github.com/ayabedair",
    },
  },
  {
    id: 2,
    name: "Mohamed Elsayed",
    role: "Flutter",
    image: "/comittesboard/headmobile.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/mosayyyed",
      github: "https://github.com/mosayyyed",
    },
  },
  {
    id: 3,
    name: "Ahmed Ayman",
    role: "Ui/Ux",
    image: "/comittesboard/avatar.svg",
    socials: {
      github: "https://www.behance.net/ahmedayman218",
      linkedin: "https://www.linkedin.com/in/ahmed-rakha-c/",
    },
  },
  {
    id: 4,
    name: "Mohamed Kardosha",
    role: "Data Science",
    image: "/comittesboard/headdatascience.svg",
    socials: {
      github: "https://github.com/mhmdkardosha",
      linkedin: "https://www.linkedin.com/in/mohamedkardosha/",
    },
  },
  {
    id: 5,
    name: "Nabil Mohamed",
    role: "Front-End",
    image: "/comittesboard/headfront.svg",
    socials: {
      github: "https://github.com/N0ble-dev",
      linkedin:
        "https://www.linkedin.com/in/n0ble-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    id: 6,
    name: "Gamal Abdelnasser",
    role: "Cyber Security",
    image: "/comittesboard/avatar.svg",
    socials: {
      linkedin: "https://github.com/saifsweelam",
      github: "https://github.com/saifsweelam",
    },
  },
  {
    id: 7,
    name: "Mohamed Wael",
    role: " Data Engineering ",
    image: "/comittesboard/headdataeng.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohamedwaelelsamman/",
      github: "https://github.com/Welloz03",
    },
  },
  {
    id: 8,
    name: "Seif Sweilam",
    role: "Backend",
    image: "/comittesboard/headback.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/saifsweelam/",
      github: "https://github.com/saifsweelam",
    },
  },
];
