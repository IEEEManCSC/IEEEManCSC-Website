"use client";
import { MemberSocials } from "@/app/types";

interface BoardCardProps {
  name: string;
  role: string;
  image: string;
  socials: MemberSocials;
}
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function BoardCard({
  name,
  role,
  image,
  socials,
}: BoardCardProps) {
  return (
    <div className="w-64 rounded-2xl overflow-hidden shadow-lg border-b-[3px] border-[#F7A708]">
      {/* Top gradient + image */}
      <div
        className="w-full flex justify-center py-1"
        style={{
          background: "linear-gradient(180deg, #C08819 0%, #262626 100%)",
        }}
      >
        <div className="w-[200px] h-[200px] overflow-hidden border-4 border-transparent">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-[#262626] flex justify-center space-x-3 py-3">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-3 py-1 bg-[#e7a11a] rounded-md text-white hover:bg-yellow-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-3 py-1 bg-[#e7a11a] rounded-md text-white hover:bg-yellow-600 transition"
          >
            <FaGithub size={20} />
          </a>
        )}
        {socials.email && (
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center px-3 py-1 bg-[#e7a11a] rounded-md text-white hover:bg-yellow-600 transition"
          >
            <HiOutlineMail size={20} />
          </a>
        )}
      </div>

      {/* Separator */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      {/* Footer */}
      <div className="bg-[#262626] text-center py-4">
        <h3 className="text-white text-lg font-semibold tracking-wider">
          {name}
        </h3>
        <p className="text-[#F9B200] tracking-wide mt-1">{role}</p>
      </div>
    </div>
  );
}
