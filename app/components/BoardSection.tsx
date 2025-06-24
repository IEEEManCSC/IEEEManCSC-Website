import { BoardMember } from "@/app/types";
import BoardCard from "./BoardCard";

interface BoardSectionProps {
  title: string;
  description: string;
  members: BoardMember[];
}

export default function BoardSection({
  title,
  description,
  members,
}: BoardSectionProps) {
  return (
    <section className="mt-10 py-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-amber-500 uppercase font-[Merriweather]">
        {title}
      </h2>
      <p className="text-lg md:text-xl font-medium tracking-widest leading-7 text-gray-200 mt-4 mb-12 max-w-3xl mx-auto">
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {members.map((member) => (
          <BoardCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            socials={member.socials}
          />
        ))}
      </div>
    </section>
  );
}
