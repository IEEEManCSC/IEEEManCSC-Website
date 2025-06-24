// components/CommitteeCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Committee } from "../types";

export default function CommitteeCard({ committee }: { committee: Committee }) {
  return (
    <Link
      href={committee.href}
      className="
      p-1
        group
        relative
        w-full
         max-w-[350px]       
  md:aspect-square aspect-video
        bg-black
        hover:bg-[#1f1f1f]
        rounded-xl
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        border-b-4
        border-[#F7A708]
        cursor-pointer
        hover:shadow-[0px_4px_10px_0px_#F7A708]
      "
    >
      {/* icon + title */}
      <div className="flex items-center space-x-2 px-4 pt-4">
        <Image
          src={committee.icon}
          alt={`${committee.title} icon`}
          width={30}
          height={30}
        />
        <h3 className="text-xl font-semibold text-white">{committee.title}</h3>
      </div>

      {/* description */}
      <p className="px-4 text-base text-gray-300">{committee.description}</p>

      {/* Learn More button */}
      <div className="px-4 pb-4">
        <span
          className="
            inline-flex
            items-center
            space-x-1
            text-base
            font-medium
            text-[#F7A708]
            border-b-2
           border-[#F7A708]
            py-3
            px-4
            rounded-xl
          "
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#F7A708"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
