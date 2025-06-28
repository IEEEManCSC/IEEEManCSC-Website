import Image from "next/image";
import Countdown from "@/app/components/Countdown";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import BlackMainSection from "@/app/components/BlackMainSection";
import BorderedBlackSection from "@/app/components/BorderedBlackSection";
import LatestEvents from "@/app/components/LatestEvents";
export default function page() {
  return (
    <>
      <section className="flex items-center justify-center h-[calc(85vh-2rem)] py-10">
        <div className="relative w-[90%] h-full  overflow-hidden rounded-2xl">
          <Image
            src="/event.svg"
            alt="Events background"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex @container flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-[#F0B41A] mb-2">
              Our Events
            </h1>
            <p className="text-white max-w-2xl text-pretty text-[clamp(14px,1.75cqi,30px)] mb-8">
              Welcome to our Events Page—your gateway to a world of exciting
              experiences! Whether you’re looking to learn, connect.
            </p>
          </div>
        </div>
      </section>
      <BlackMainSection className="mb-8 !px-0">
        <BorderedBlackSection className="w-[90%] mx-auto text-white">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="xl:text-4xl md:text-3xl text-2xl font-merriweather font-bold text-yellow-500 mb-4">
              TechX Egypt
            </h2>

            <div className="mx-auto md:w-[80%] w-[90%] border-t border-gray-700 mb-8"></div>

            <div className="flex items-center justify-center md:space-x-8 space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-yellow-500" />
                <span className="md:text-lg text-sm md:tracking-wide tracking-normal">
                  21/8/2025
                </span>
              </div>

              <div className=" h-7 w-px bg-gray-700" />

              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-yellow-500" />
                <span className="md:text-lg text-sm md:tracking-wide tracking-normal">
                  Alex - Cairo
                </span>
              </div>

              <div className=" h-7 w-px bg-gray-700" />

              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-yellow-500" />
                <span className="md:text-lg text-sm md:tracking-wide tracking-normal">
                  3 Days
                </span>
              </div>
            </div>
            <div className="mx-auto md:w-[80%] w-[90%] border-t border-gray-700 mb-8"></div>
            <div className="w-full flex justify-center">
              <Countdown className="mx-auto w-fit mb-8" target="21/08/2025" />
            </div>
            <Link
              href="#"
              className="inline-block bg-yellow-500 text-white font-semibold py-3 px-10 rounded-full hover:bg-yellow-600 transition"
            >
              Explore More
            </Link>
          </div>
        </BorderedBlackSection>
      </BlackMainSection>
      <LatestEvents />
    </>
  );
}
