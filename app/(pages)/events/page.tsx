import Image from "next/image";
import Countdown from "@/app/components/Countdown";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";
export default function EventsHero() {
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

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F0B41A] mb-2">
              Our Events
            </h1>
            <p className="text-white text-lg md:text-xl mb-4">Session 2</p>
            <p className="text-white text-sm md:text-base max-w-2xl mb-8">
              Welcome to our Events Page—your gateway to a world of exciting
              experiences! Whether you’re looking to learn, connect.
            </p>

            <Countdown target="14/05/2025" />
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto mb-8 relative bg-black text-white py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-24  border-t-2 border-l-2 rounded-tl-lg border-yellow-500" />

        <div className="absolute bottom-0 right-0 w-32 h-24 border-b-2 border-r-2 rounded-br-lg border-yellow-500" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-semibold text-yellow-500 mb-4">
            TechX Egypt
          </h2>

          <div className="mx-auto md:w-[80%] w-[90%] border-t border-gray-700 mb-8"></div>

          <div className="flex items-center justify-center md:space-x-8 space-x-5 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={20} className="text-yellow-500" />
              <span className="md:text-lg text-base md:tracking-wide tracking-normal">
                22/5/2025
              </span>
            </div>

            <div className=" h-7 w-px bg-gray-700" />

            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-yellow-500" />
              <span className="md:text-lg text-base md:tracking-wide tracking-normal">
                ITI Creativa
              </span>
            </div>

            <div className=" h-7 w-px bg-gray-700" />

            <div className="flex items-center space-x-2">
              <Clock size={20} className="text-yellow-500" />
              <span className="md:text-lg text-base md:tracking-wide tracking-normal">
                2 Days
              </span>
            </div>
          </div>
          <div className="mx-auto md:w-[80%] w-[90%] border-t border-gray-700 mb-8"></div>
          <Link
            href="#"
            className="inline-block bg-yellow-500 text-black font-semibold py-3 px-10 rounded-full hover:bg-yellow-600 transition"
          >
            Explore More
          </Link>
        </div>
      </section>
    </>
  );
}
