"use client";

import { Button } from "@/components/ui/button";
import { events } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4 tracking-wider">
              LATEST EVENTS
            </h2>
            <p className="text-gray-300 text-sm tracking-widest">
              CATCH OUR LATEST MEMORABLE MOMENTS FROM RECENT EVENTS
            </p>
          </div>

          {/* Custom Carousel */}
          <div className="mb-8 overflow-hidden">
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
                      className="w-full flex-shrink-0 grid justify-between px-2 md:px-4 h-[500px]"
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
                            className=" rounded-lg overflow-hidden grid grid-rows-subgrid row-span-4 h-[500px] relative"
                          >
                            {/* Event Image */}
                            <div className="absolute inset-0 bottom-1/2">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover filter grayscale object-center"
                              />
                            </div>

                            {/* Event Content */}
                            <div className="p-4 grid grid-rows-subgrid row-span-3 relative z-10 row-start-2 items-start content-between">
                              <div className="flex justify-between items-start">
                                <h3 className="text-yellow-400 font-bold text-lg">
                                  {event.title}
                                </h3>
                                <span className="text-cyan-400 text-sm font-mono">
                                  {event.details.dateFrom}
                                </span>
                              </div>

                              <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
                                {event.subtitle}
                              </p>

                              <Button
                                variant="ghost"
                                className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 p-0 h-auto font-semibold self-start w-fit"
                              >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
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
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`w-8 h-8 border flex items-center justify-center text-sm font-mono transition-colors ${
                  index === current
                    ? "border-yellow-400 bg-yellow-400/20 text-yellow-400"
                    : "border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
