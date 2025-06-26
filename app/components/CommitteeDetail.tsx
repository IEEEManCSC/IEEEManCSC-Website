// components/CommitteeDetail.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import BlackMainSection from "./BlackMainSection";
import BoardCard from "./BoardCard";
import BorderedBlackSection from "./BorderedBlackSection";
import { CommitteeDetail as CD } from "@/app/types";

export default function CommitteeDetail({ committee }: { committee: CD }) {
  return (
    <>
      <div className="px-6 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-amber-500 uppercase font-[Merriweather]">
          Our Mentors
        </h2>
        <p className="text-gray-200 text-sm md:text-base mt-2 mb-12 max-w-3xl mx-auto">
          Get to know the faces driving creativity, mentorship, and innovation
          in our track
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
          {committee.mentors.slice(0, 3).map((m) => (
            <BoardCard
              key={m.id}
              name={m.name}
              role={m.role}
              image={m.image}
              socials={m.socials}
            />
          ))}
        </div>
      </div>

      <BlackMainSection className="px-6 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-amber-500 uppercase font-[Merriweather]">
            {committee.title}
          </h2>
          <p className="text-gray-200 text-lg md:text-xl mt-2 mb-8">
            {committee.tagline}
          </p>

          <BorderedBlackSection className="mb-12">
            <div className="space-y-6 text-gray-300">
              <p className="italic font-semibold">{committee.intro}</p>

              <ul className="list-disc list-inside space-y-4 ">
                {committee.description.map((line, idx) => (
                  <li key={idx} className="leading-relaxed text-amber-500">
                    <span className="text-gray-300">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BorderedBlackSection>
        </div>
      </BlackMainSection>

      <div className="w-[90%] mx-auto mb-8 p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:max-w-lg space-y-4 md:text-left text-center">
          <h3 className="text-3xl tracking-wider font-bold text-amber-500 uppercase font-[Merriweather]">
            Our Roadmap
          </h3>
          <p className="text-gray-300 tracking-widest">
            Step into the embedded world with a roadmap that takes you from
            basics to real-world applications.
          </p>
          <Link
            href={committee.roadmapUrl}
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-full transition"
          >
            Explore Now
          </Link>
        </div>
        <div className="w-[75%] md:w-48 mt-6 md:mt-0">
          <Image
            src="/roadmap.svg"
            alt="Roadmap graphic"
            width={192}
            height={192}
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
      <BlackMainSection className="w-full flex flex-col md:flex-row items-center justify-between mb-2">
        <div className="mx-auto md:mx-0 grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Image, pushed left */}
          <div className="relative w-full h-auto md:block hidden md:overflow-hidden md:pl-0 md:ml-[-90px]">
            <Image
              src="/youtube.svg"
              alt="YouTube graphic"
              width={200}
              height={150}
              className="w-full h-auto"
            />
          </div>

          {/* Right column: Text + button */}
          {committee.youtubeUrl && (
            <div className="text-gray-300 md:h-[50%] text-center md:text-left">
              <h3 className="text-3xl tracking-wider font-bold text-amber-500 uppercase font-[Merriweather] mb-4">
                Our Videos
              </h3>
              <p className="mb-6 text-base md:text-xl leading-9 tracking-wide">
                Discover a variety of technical videos on our{" "}
                <Link
                  href={committee.youtubeUrl!}
                  target="_blank"
                  className="text-amber-500 hover:underline"
                >
                  YouTube channel
                </Link>
                , crafted by our mentors and field experts.
              </p>
              <Link
                href={committee.youtubeUrl!}
                target="_blank"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-full md:text-lg text-base transition duration-300"
              >
                Explore Now
              </Link>
            </div>
          )}
        </div>
      </BlackMainSection>
    </>
  );
}
