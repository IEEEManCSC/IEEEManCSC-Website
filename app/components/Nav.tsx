import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-[90%] mx-auto flex justify-center py-3 ">
      <div
        className="flex w-full  items-center justify-between 
          rounded-full px-6 py-3  bg-[#262626]
          "
      >
        <div className="flex items-center">
          <div className="relative md:w-36 md:h-14 h-10 w-28">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          <a
            href="#"
            className="text-sm font-semibold text-[#F0B41A] hover:text-yellow-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Events
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Membership
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Committees
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:block rounded-full bg-[#F7A500] px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 transition"
          >
            Join Us
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="md:hidden h-10 w-10 text-white bg-[#141414] hover:bg-[#231b06] "
              >
                <Menu className="h-12 w-12" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#141414] text-white p-6">
              <div className="mb-2 flex items-center gap-3">
                <div className="relative w-20 h-20">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <nav className="grid gap-4 text-base font-medium">
                <a
                  href="#"
                  className="text-[#F0B41A] border-b border-gray-700 pb-2 hover:text-yellow-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white border-b border-gray-700 pb-2 hover:text-gray-300"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-white border-b border-gray-700 pb-2 hover:text-gray-300"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-white border-b border-gray-700 pb-2 hover:text-gray-300"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-white border-b border-gray-700 pb-2 hover:text-gray-300"
                >
                  Membership
                </a>
                <a
                  href="#"
                  className="text-white border-b border-gray-700 pb-2 hover:text-gray-300"
                >
                  Committees
                </a>
                <a
                  href="#"
                  className="mt-4 rounded-full bg-[#F7A500] px-4 py-2 text-center font-semibold text-black hover:bg-yellow-400"
                >
                  Join Us
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to right, #333333, #F7A500, #666666)",
          filter: "blur(100px)",
          opacity: 0.2,
        }}
      ></div>
    </header>
  );
}
