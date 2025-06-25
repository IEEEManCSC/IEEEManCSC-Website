"use client";

import { Button } from "@/components/ui/button";
import { events } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlackMainSection from "./BlackMainSection";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LatestEvents() {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      setCurrent(0);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const scrollToPage = (pageIndex: number) => {
    setCurrent(pageIndex);
  };

  const getTransformValue = () => {
    const translateX = -(current * 100);
    return `translateX(${translateX}%)`;
  };

  return (
    <section className="min-h-screen p-8 relative">
      <div className=" p-8 h-full">
        <div className="p-8 h-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold text-[#F7A708] font-merriweather mb-4 tracking-[5%]">
              LATEST EVENTS
            </h2>
            <p className="text-[#F5F5F5F5]/[96.06%] md:text-2xl text-lg tracking-[5%]">
              CATCH OUR LATEST MEMORABLE MOMENTS FROM RECENT EVENTS
            </p>
          </div>

          {/* Custom Carousel */}
          <div className="mb-8 ">
            <div className="max-w-7xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: getTransformValue() }}
                >
                  {/* Create pages */}
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="w-full flex-shrink-0 grid justify-between px-2 md:px-4 h-[500px] gap-12 overflow-visible"
                      style={{
                        gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                      }}
                    >
                      {events
                        .slice(
                          pageIndex * itemsPerPage,
                          (pageIndex + 1) * itemsPerPage
                        )
                        .map((event) => (
                          <div
                            key={event.id}
                            className=" rounded-lg grid grid-rows-subgrid row-span-4 h-[500px] relative overflow-hidden"
                          >
                            {/* Event Image */}
                            <div className="absolute inset-0 bottom-1/3">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover filter grayscale object-center"
                              />
                            </div>

                            {/* Event Content */}
                            <div className="absolute inset-0 bottom-px top-[40%] z-10 flex flex-col">
                              <BlackMainSection
                                className={cn(
                                  "flex-1 !rounded-3xl flex flex-col gap-4 before:!rounded-3xl bg-[#111111CC] backdrop-blur-[20px] !p-6 !pb-14"
                                )}
                              >
                                <div className="flex justify-between items-center gap-2">
                                  <h3 className="text-[#F7A500] font-bold lg:text-lg text-base truncate font-merriweather">
                                    {event.title}
                                  </h3>
                                  <span className="text-[#F7A500] text-sm font-merriweather text-nowrap">
                                    {event.details.dateFrom}
                                  </span>
                                </div>

                                <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
                                  {event.subtitle}
                                </p>

                                <Link
                                  className="mt-auto"
                                  href={`/events/${event.id}`}
                                >
                                  <Button
                                    variant="default"
                                    className="py-2 px-6 border-b rounded-[12px] border-[#F7A500] w-fit bg-transparent text-[#F7A500] hover:bg-[#F7A500]/10 hover:text-white hover:scale-105 active:scale-95 focus-visible:ring-[#F7A500] transition-all duration-300"
                                  >
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                              </BlackMainSection>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant="default"
                onClick={() => scrollToPage(index)}
                className={cn(
                  "p-4 border-b rounded-[12px] border-[#F7A500] w-fit bg-transparent text-[#F7A500] hover:bg-[#F7A500]/10 hover:text-white hover:scale-105 active:scale-95 focus-visible:ring-[#F7A500] transition-all duration-300",
                  {
                    "border-b-2 shadow-[0_2px_2px_0_#F7A500] bg-[#1B1B1B]":
                      index === current,
                  }
                )}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
