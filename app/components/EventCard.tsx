import Image from "next/image";

interface EventCardData {
  id: number;
  image: string;
  altText: string;
  title?: string;
  date?: string;
  description?: string;
  showDetails?: boolean;
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
    className: "lg:w-[700px]  md:w-[calc(50%-16px)]  w-[90%]  aspect-video",
  },
  {
    id: 2,
    image: "/topright.svg",
    altText: "IEEE Event",
    title: "IEEE Event",
    date: "15/3/2024",
    description:
      "Join us for an exciting IEEE workshop on emerging technologies...",
    className: "lg:w-[450px] md:w-[calc(50%-16px)]  w-[90%]  aspect-square",
  },
  {
    id: 3,
    image: "/btnleft.svg",
    altText: "Embedded Systems Event",
    title: "Embedded Systems",
    date: "10/4/2024",
    description:
      "Explore the world of embedded systems with hands-on projects...",
    className: "lg:w-[700px]  md:w-[calc(50%-16px)] w-[90%]  aspect-video",
  },
  {
    id: 4,
    image: "/btnright.svg",
    altText: "Group Event",
    title: "Group Collaboration",
    date: "20/4/2024",
    description: "Team up for a collaborative coding challenge...",
    className: "lg:w-[450px] md:w-[calc(50%-16px)] w-[90%]  aspect-square",
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

        <button className="self-center px-8 py-3 text-xl font-bold bg-amber-500 rounded-full hover:bg-amber-600 transition-colors max-md:text-lg max-sm:px-6 max-sm:py-2">
          Know More
        </button>
      </div>
    </article>
  ));
}
