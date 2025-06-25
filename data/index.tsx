import { MdGroups, MdEvent, MdHandshake, MdPerson } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import {
  Service,
  StatItem,
  Event,
  BoardMember,
  Heads,
  Committee,
  CommitteeDetail,
} from "@/app/types";

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
    image: "/events/code-step.png",
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
      linkedin:
        "https://www.linkedin.com/in/gamal-abdelnasser-wafa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/gamal-w",
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
export const committees: Committee[] = [
  {
    id: 1,
    title: "UI/UX",
    description:
      "Is where creativity meets functionality, guiding you through the art of designing seamless, user-centered digital experiences.",
    href: "/commites/ui-ux",
    icon: "/Committeeslogo/ui.svg",
  },
  {
    id: 2,
    title: "Frontend",
    description:
      "Empowers you to bring digital interfaces to life, combining code, design, and interactivity to craft seamless user experiences.",
    href: "/commites/frontend",
    icon: "/Committeeslogo/front.svg",
  },
  {
    id: 3,
    title: "Flutter",
    description:
      "Equips you with the tools to build fast, beautiful, and cross-platform mobile applications using a single codebase.",
    href: "/commites/flutter",
    icon: "/Committeeslogo/flutter.svg",
  },
  {
    id: 4,
    title: "Backend",
    description:
      "Dives deep into server-side development, teaching you how to build secure, scalable, and efficient systems that power modern applications.",
    href: "/commites/backend",
    icon: "/Committeeslogo/back.svg",
  },
  {
    id: 5,
    title: "Data Science",
    description:
      "Helps you turn raw data into powerful insights using statistics, programming, machine learning tools, and data visualization techniques.",
    href: "/commites/data-science",
    icon: "/Committeeslogo/science.svg",
  },
  {
    id: 6,
    title: "Data Engineering",
    description:
      "Teaches you to design data pipelines, manage databases, and optimize data flow for analytics and machine learning.",
    href: "/commites/data-engineering",
    icon: "/Committeeslogo/engineer.svg",
  },
  {
    id: 7,
    title: "Embedded Systems",
    description:
      "Focuses on designing and programming hardware systems to create smart devices and innovative technology solutions.",
    href: "/commites/embedded-systems",
    icon: "/Committeeslogo/embedded.svg",
  },
  {
    id: 8,
    title: "Cyber Security",
    description:
      "Focuses on protecting systems, networks, and data from cyber threats using advanced security techniques and tools.",
    href: "/commites/cyber-security",
    icon: "/Committeeslogo/cyber.svg",
  },
];

export const committeeDetails: CommitteeDetail[] = [
  {
    id: 1,
    title: "Embedded Systems",
    slug: "embedded-systems",
    tagline:
      "One of the most exciting committees where creativity meets real-world applications",
    intro: "Let us introduce you to the Embedded Systems track",
    description: [
      "Embedded systems are the brains behind the devices we use daily, such as mobile phones, televisions, cars, and more. The core idea is that they combine hardware and software. Our role is to use software to write commands for the hardware to achieve a specific goal.",
      "The field of embedded systems helps us better understand how the things around us work. It's not just about programming a microcontroller but also interacting with sensors and actuators to build a complete system.",
      "This field stands out because it blends practical creativity with technology, opening up numerous opportunities for innovation, especially in areas like IoT, smart cars, and robotics.",
    ],
    roadmapUrl: "https://github.com/ayabedair/EMBEDDED-ROADMAP-IEEE",
    youtubeUrl:
      "https://www.youtube.com/playlist?list=PLJu3s68C-0EAc1KlrzM-eujWvk3z88ekA",
    mentors: [
      {
        id: 2,
        name: "Salma Hossam",
        role: "Vice Head",
        image: "/comittesboard/viceembedded.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/salma-hossam--/",
          github: "https://github.com/Salma-Hossam1",
        },
      },
      {
        id: 1,
        name: "Aya Bedair",
        role: "Head",
        image: "/comittesboard/headembedded.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/aya-bedair-38905b278/",
          github: "https://github.com/ayabedair",
        },
      },
      {
        id: 3,
        name: "Mariam Ayman",
        role: "M.D",
        image: "/comittesboard/mdembedded.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/mariam-elsalamony-b0009b29b/",
          github: "https://github.com/Mariam2552",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Flutter",
    slug: "flutter",
    tagline:
      "One of the most exciting committees where creativity meets real-world applications",
    intro: "Let us introduce you to the Flutter track",
    description: [
      "Flutter is an open-source framework from Google that allows app development for all platforms using a single codebase. It has transformed how apps are built thanks to its speed and high efficiency.",
      "Flutter features Hot Reload, enabling a significantly faster development experience. It also provides powerful and smooth performance due to its built-in rendering engine.",
      "It offers a massive library of customizable widgets, allowing the creation of attractive and unique user interfaces. Google itself uses Flutter in its apps, making it a reliable choice for developers worldwide.",
    ],
    roadmapUrl: "https://github.com/mosayyyed/Flutter-Roadmap-2025",
    youtubeUrl:
      "https://www.youtube.com/watch?v=zxOcSJwYzcQ&list=PLJu3s68C-0EDFYt1pCWqqYSAnIDyFYa4Y",
    mentors: [
      {
        id: 2,
        name: "Farah Osama",
        role: "Vice Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/farah-osama-b961632b5/",
          github: "https://github.com/FarahOsama511",
        },
      },
      {
        id: 1,
        name: "Mohamed Elsayed",
        role: "Head",
        image: "/comittesboard/headmobile.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/mosayyyed",
          github: "https://github.com/mosayyyed",
        },
      },
      {
        id: 3,
        name: "Yomna Osama",
        role: "M.D",
        image: "/comittesboard/mdmobile.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/Yomna-Abozaid",
          github: "https://github.com/Yomna-Abozaid",
        },
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX",
    slug: "ui-ux",
    tagline:
      "One of the most exciting committees where creativity meets real-world applications",
    intro: "Let us introduce you to the UI/UX track",
    description: [
      "A UI/UX Designer starts by understanding user needs through research and interviews to identify their challenges. Then, they design a smooth and clear user journey that helps users navigate the app or website easily and effectively.",
      "They work on visual designs like colors, buttons, fonts, and icons to create an attractive and user-friendly interface. Tools like Figma or Adobe XD are used to bring these designs to life professionally and consistently.",
      "They also create prototypes and run usability tests to gather real user feedback before development begins. Based on that, they refine the design to improve functionality, solve user problems, and enhance the overall experience.",
      "In addition to designing, they ensure all elements are visually consistent and aligned with the brand identity. This helps create a cohesive product that feels complete and delivers a seamless, enjoyable experience for users.",
    ],
    roadmapUrl: "https://github.com/ahmedaymanllll/ui-ux-roadmap-IEEE",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLJu3s68C-0EBzKfShemgITcNj0gyr53rd&si=jBkeliUVfAWkbzd-",
    mentors: [
      {
        id: 2,
        name: "Menna Nasef",
        role: "Vice Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/menna-nasef-063a3926b",
          github: ":https://www.behance.net/menanassef",
        },
      },
      {
        id: 1,
        name: "Ahmed Ayman",
        role: "Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/ahmed-rakha-c",
          github: "https://www.behance.net/ahmedayman218",
        },
      },
      {
        id: 3,
        name: "Reham Ahmed",
        role: "M.D",
        image: "/comittesboard/mdmobile.svg",
        socials: {
          linkedin:
            "https://www.linkedin.com/in/reham-ahmed-736145268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          github: "https://www.behance.net/rehamahmed68 ",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Cyber Security",
    slug: "cyber-security",
    tagline:
      "Data has become the core of all the technology we use today, and if this data isn’t secure, it could lead to disasters.",
    intro:
      "Through our Cyber Security Circle, we aim to understand challenges and learn the skills to protect technology we rely on.",
    description: [
      "Cybersecurity protects our information and privacy from constantly evolving threats.",
      "It helps secure personal and financial data from attackers.",
      "Our track focuses on understanding and mitigating modern security risks using hands-on experience.",
    ],
    roadmapUrl: "https://github.com/0xkalawy/IEEE",
    mentors: [
      {
        id: 2,
        name: "Mohamed Wagdy",
        role: "Vice Head",
        image: "/comittesboard/vicecyber.svg",
        socials: {
          github: "https://github.com/0xkalawy",
          linkedin: "https://www.linkedin.com/in/mohamedwagdy72",
        },
      },
      {
        id: 1,
        name: "Gamal Abdelnase",
        role: "Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          github: "https://github.com/gamal-w",
          linkedin: "https://www.linkedin.com/in/gamal-abdelnasser-wafa",
        },
      },
      {
        id: 3,
        name: "Ahmed Emad",
        role: "M.D",
        image: "/comittesboard/mdcyber.svg",
        socials: {
          github: "https://github.com/ahmed-elgaml11",
          linkedin: "https://www.linkedin.com/in/ahmed-elgaml-03203a289",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Data Engineering",
    slug: "data-engineering",
    tagline:
      "The backbone of any data-driven system lies in its engineering infrastructure.",
    intro:
      "Data engineers build the pipelines and manage data flow, enabling reliable analysis and insights.",
    description: [
      "Responsible for creating and maintaining infrastructure to convert raw data into useful formats.",
      "Handle data lakes, ETL processes, and ensure efficient storage and transformation.",
      "Work closely with scientists and analysts to provide clean, consistent data.",
    ],
    roadmapUrl:
      "https://github.com/Welloz03/Data-Engineering-Roadmap-IEEEManCSC-2025",
    mentors: [
      {
        id: 5,
        name: "Kareem Nagah",
        role: "Vice Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          github: "https://github.com/kareemNagah",
          linkedin: "https://www.linkedin.com/in/kareem-nagah-81328022a",
        },
      },
      {
        id: 4,
        name: "Mohamed Wael",
        role: "Head",
        image: "/comittesboard/headdataeng.svg",
        socials: {
          github: "https://github.com/Welloz03",
          linkedin: "https://www.linkedin.com/in/mohamedwaelelsamman/",
        },
      },
      {
        id: 6,
        name: "Mohamed Elshahaby",
        role: "M.D",
        image: "/comittesboard/avatar.svg",
        socials: {
          github: "https://github.com/Elshahaby",
          linkedin:
            "https://www.linkedin.com/in/mohamedelshahabya852277/?locale=en_US",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Data Science",
    slug: "data-science",
    tagline: "Transform raw data into insights and powerful predictive models.",
    intro:
      "Data Science combines statistics, programming, and visualization to help make data-driven decisions.",
    description: [
      "Data scientists collect, clean, and analyze data to uncover trends and build models.",
      "They visualize insights and collaborate across teams to drive real-world solutions.",
      "Their role bridges analysis, modeling, and communication.",
    ],
    roadmapUrl:
      "https://github.com/Mariam-Ahmed15/Data-Science-Roadmap-IEEEManCSC-2025",
    youtubeUrl:
      "https://www.youtube.com/playlist?list=PLJu3s68C-0EACtalImGLmF-6HjK39-wSX",
    mentors: [
      {
        id: 8,
        name: "Mariam Yasser",
        role: "Vice Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          github: "https://github.com/Mariam3bdelsalam",
          linkedin: "https://www.linkedin.com/in/mariam-yasser-929805258",
        },
      },
      {
        id: 7,
        name: "Mohamed Kardosha",
        role: "Head",
        image: "/comittesboard/headdatascience.svg",
        socials: {
          github: "https://github.com/mhmdkardosha",
          linkedin: "https://www.linkedin.com/in/mohamedkardosha/",
        },
      },
      {
        id: 9,
        name: "Wafaa Ayman",
        role: "M.D",
        image: "/comittesboard/avatar.svg",
        socials: {
          linkedin: "https://www.linkedin.com/in/wafaa-ayman-8755121b2",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Backend",
    slug: "backend",
    tagline:
      "The engine room of any web application, powering user experience behind the scenes.",
    intro:
      "The backend handles data processing, authentication, logic, and more—ensuring everything runs smoothly.",
    description: [
      "Developers manage server-side code, database interaction, and performance optimization.",
      "Tools like Node.js, MongoDB, and MySQL are used to build reliable systems.",
      "Back-end is essential for security, speed, and seamless communication with the front-end.",
    ],
    roadmapUrl: "https://github.com/saifsweelam/IEEE-Backend-Roadmap-2025/",
    youtubeUrl:
      "https://www.youtube.com/playlist?list=PLJu3s68C-0EBKh4sPIRtgMhjOcuwPhYV3",
    mentors: [
      {
        id: 11,
        name: "Mohamed Elgamal",
        role: "Vice Head",
        image: "/comittesboard/viceback.svg",
        socials: {
          github: "https://github.com/mohamed97163",
          linkedin: "http://linkedin.com/in/mohamed-a-elgamal-91395021b/",
        },
      },
      {
        id: 10,
        name: "Seif El-Din Wael Sweilam",
        role: "Head",
        image: "/comittesboard/headback.svg",
        socials: {
          github: "https://github.com/saifsweelam",
          linkedin: "https://www.linkedin.com/in/saifsweelam/",
        },
      },
      {
        id: 12,
        name: "Mohamed Elshahaby",
        role: "M.D",
        image: "/comittesboard/avatar.svg",
        socials: {
          github: "https://github.com/Elshahaby",
          linkedin:
            "https://www.linkedin.com/in/mohamedelshahabya852277/?locale=en_US",
        },
      },
    ],
  },
  {
    id: 8,
    title: "Frontend",
    slug: "frontend",
    tagline:
      "Everything you interact with visually on websites and apps starts here.",
    intro:
      "Frontend developers bring websites to life with interactive, aesthetic, and accessible interfaces.",
    description: [
      "Involves HTML, CSS, JavaScript plus frameworks like React or Vue.",
      "Focuses on responsive design, animation, and optimizing user experience.",
      "Requires knowledge of performance, accessibility, and even some backend basics.",
    ],
    roadmapUrl: "https://github.com/N0ble-dev/Frontend-Roadmap",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLJu3s68C-0EAc1KlrzM-eujWvk3z88ekA",
    mentors: [
      {
        id: 14,
        name: "Youssef Mohamed",
        role: "Vice Head",
        image: "/comittesboard/avatar.svg",
        socials: {
          github: "https://github.com/YoussefMohammed93",
          linkedin: "https://www.linkedin.com/in/youssef-mohammed-6893a031b",
        },
      },
      {
        id: 13,
        name: "Nabil Mohamed",
        role: "Head",
        image: "/comittesboard/headfront.svg",
        socials: {
          github: "https://github.com/N0ble-dev",
          linkedin: "https://www.linkedin.com/in/n0ble-dev",
        },
      },
      {
        id: 15,
        name: "Omar M. Kamal",
        role: "M.D",
        image: "/comittesboard/mdfront.svg",
        socials: {
          github: "https://github.com/omarkamal204",
          linkedin: "https://www.linkedin.com/in/omarkamal204",
        },
      },
    ],
  },
];
