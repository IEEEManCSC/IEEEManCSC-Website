"use client";
import BorderedBlackSection from "@/app/components/BorderedBlackSection";
import { events } from "@/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import BlackMainSection from "@/app/components/BlackMainSection";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

export default function EventPage() {
  const params = useParams();
  const eventId = params.id;
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div className="p-8 text-red-500">Event not found.</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center mt-[2.5rem] pb-[96px]">
      <div className="w-[90%] relative">
        <section className="relative w-full h-[674px] rounded-[24px] border-x-[8px] border-[#F7A500] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
              style={{ opacity: 0.8 }}
            />
            <div className="absolute inset-0 bg-[#2C2C2C] opacity-75" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[985px] h-[220px] md:h-[300px] px-2">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-[90px] lg:leading-[120px] text-center text-[#F7A500] w-full">
              {event.title}
            </h1>
            <p
              className="font-medium text-lg md:text-2xl lg:text-[24px] leading-snug md:leading-[40px] lg:leading-[60px] text-center text-white w-full mt-2"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {event.subtitle}
            </p>
          </div>
        </section>
      </div>

      <BlackMainSection className="w-[90%] md:w-full mt-[56px] md:mt-[88px] !py-[48px] md:!py-[96px] !px-4 md:!px-[64px]">
        <BorderedBlackSection className="w-full rounded-[32px] md:rounded-[88px]">
          <div className="w-full flex flex-col items-center bg-transparent rounded-[4px] px-2 md:px-8">
            <h2 className="font-merriweather font-bold text-1xl md:text-2xl lg:text-3xl leading-tight md:leading-[45px] uppercase text-center text-[#F7A500] tracking-wide">
              Event Details
            </h2>
            <div
              className="flex flex-col gap-4 py-6 mt-8 w-full"
              style={{
                borderWidth: "1px 0px 1px 0px",
                borderImage:
                  "linear-gradient(90deg, rgba(194,194,194,0) 0%, rgba(247,165,1,0.96) 50%, rgba(143,143,143,0) 100%) 1",
                borderStyle: "solid",
              }}
            >
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                  <span className="text-lg text-[#F5F5F5]">
                    <IoCalendarOutline />
                  </span>
                  <span className="text-sm md:text-md lg:text-xl text-[#F5F5F5] tracking-wider break-words">
                    {event.details.dateFrom} – {event.details.dateTo}
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                  <span className="text-lg text-[#F5F5F5]">
                    <IoLocationOutline />
                  </span>
                  <span className="text-sm md:text-md lg:text-xl text-[#F5F5F5] tracking-wider break-words">
                    {event.details.location}
                  </span>
                </div>
              </div>

              {/* Content + Sessions - Responsive Fix */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 w-full flex-wrap mt-6">
                {event.details.content && (
                  <div className="flex flex-wrap items-center gap-1 md:gap-2 min-w-0">
                    <span className="text-sm md:text-md lg:text-xl text-[#F5F5F5]">
                      Content:
                    </span>
                    <span className="text-sm md:text-md lg:text-xl text-[#F7A500] break-words">
                      {event.details.content}
                    </span>
                  </div>
                )}

                {/* Divider */}
                {event.details.content && (
                  <div className="hidden md:block w-[33px] h-[2px] md:w-[2px] md:h-[33px] bg-white mx-[0px] md:mx-[43px]"></div>
                )}

                <div className="flex flex-wrap items-center gap-1 md:gap-2 min-w-0">
                  <span className="text-sm md:text-md lg:text-xl text-[#F5F5F5]">
                    Number of Sessions:
                  </span>
                  <span className="text-sm md:text-md lg:text-xl text-[#F7A500] break-words">
                    {event.details.sessionsNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start px-2 md:px-8 py-4 md:py-8 !pb-0">
            <h3 className="font-bold text-xl md:text-xl lg:text-2xl leading-tight md:leading-[45px] uppercase text-white tracking-wide">
              Description :
            </h3>
            <div className="flex flex-col gap-4 md:gap-6 w-full mt-4">
              {event.description.map((desc, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-3 md:gap-6">
                    {desc.icon && (
                      <span className="font-semibold text-sm md:text-md lg:text-xl text-[#F5F5F5]">
                        {desc.icon}
                      </span>
                    )}
                    <span className="font-semibold text-sm md:text-md lg:text-xl text-[#F5F5F5]">
                      {desc.title}
                    </span>
                  </div>
                  <ul className="text-sm md:text-sm lg:text-[1rem] text-[#F5F5F5]/70 mt-2 list-disc pl-6">
                    {desc.content.map((line, i) => (
                      <li className="mt-2" key={i}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </BorderedBlackSection>
      </BlackMainSection>
    </section>
  );
}
