import Image from "next/image";
import Link from "next/link";

interface EventCardData {
  id: number;
  image: string;
  altText: string;
  href: string;
  title?: string;
  date?: string;
  description?: string;
  showDetails?: boolean;
  className: string;
}
export const events: EventCardData[] = [
  {
    id: 1,
    href: "codesteps",
    image: "/topleft.svg",
    altText: "Code Steps 4.0 Event",
    title: "Code Steps 4.0",
    date: "25/2/2024",
    description:
      "The event successfully engaged young students across two schools...",
    className:
      "lg:w-[700px]  md:w-[calc(50%-60px)]  w-[90%]  md:aspect-video aspect-square",
  },
  {
    id: 2,
    href: "victory",
    image: "/topright.svg",
    altText: "VICTORIS 3.0",
    title: "VICTORIS 3.0",
    date: "15/3/2024",
    description:
      "participants with a unique opportunity to showcase their skills...",
    className: "lg:w-[420px] md:w-[calc(50%-60px)]  w-[90%]  aspect-square",
  },
  {
    id: 3,
    href: "sudo-ibootcamp",
    image: "/btnleft.svg",
    altText: "sudo-ibootcamp",
    title: "Sudo-i Bootcamp",
    date: "15/2/2025",
    description:
      "The Sudo-i Bootcamp empowers you with practical skills in DevOps, cloud technologies, and AI development ...",
    className:
      "lg:w-[700px]  md:w-[calc(50%-60px)] w-[90%]  md:aspect-video aspect-square",
  },
  {
    id: 4,
    image: "/btnright.svg",
    href: "sudo-ibootcamp",
    altText: "Group Event",
    title: "Group Collaboration",
    date: "20/4/2024",
    description: "Team up for a collaborative coding challenge...",
    className: "lg:w-[420px] md:w-[calc(50%-60px)] w-[90%]  aspect-square",
  },
];
export default function EventCard() {
  return events.map((event) => (
    <article
      key={event.id}
      className={`group overflow-hidden relative rounded-3xl ${event.className}`}
    >
      <Image
        src={event.image}
        alt={event.altText}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />

      <div className="absolute inset-0 flex flex-col justify-between p-8  opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:p-4">
        <div className="flex justify-between w-full">
          <h2 className="text-4xl font-bold max-md:text-3xl max-sm:text-2xl text-[#F7A500]">
            {event.title}
          </h2>
          <time className="text-3xl font-medium max-md:text-2xl max-sm:text-xl text-[#F7A500]">
            {event.date}
          </time>
        </div>

        <p className="text-2xl font-semibold text-neutral-100/90 max-md:text-xl max-sm:text-lg">
          {event.description}
        </p>

        <Link
          href={`events/${event.href}`}
          className="self-center px-8 py-3 text-xl font-bold bg-amber-500 rounded-full hover:bg-amber-600 transition-colors max-md:text-lg max-sm:px-6 max-sm:py-2"
        >
          Know More
        </Link>
      </div>
    </article>
  ));
}
