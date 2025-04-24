"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/committees", label: "Committees" },
    { href: "/aboutus", label: "About Us" },
    { href: "/contactus", label: "Contact Us" },
  ];

  const getLinkClass = (href: string, isMobile = false) => {
    const isActive = pathname === href;
    const base = isMobile
      ? "text-base font-medium pb-2 border-b"
      : "text-sm font-medium";
    const active = isActive
      ? `text-[#F0B41A] border-grLinky-700`
      : `text-white border-gray-700 hover:text-grLinky-300`;
    return `${base} ${active}`;
  };

  return (
    <header className="sticky top-0 z-50 w-[90%] mx-auto flex justify-center py-3">
      <div className="relative flex w-full items-center justify-between rounded-full bg-[#262626] px-6 py-3">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-28 md:h-14 md:w-36">
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={getLinkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Join + Mobile sheet trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full bg-[#F7A500] px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 transition md:block"
          >
            Join Us
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="h-10 w-10 bg-transparent text-3xl text-white hover:bg-[#231b06] md:hidden"
              >
                <CgMenuGridO size={25} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-[#141414] p-6 text-white">
              {/* Mobile logo */}
              <div className="mb-6 flex items-center">
                <div className="relative h-20 w-20">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Mobile menu items */}
              <nav className="grid gap-4">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={getLinkClass(href, true)}
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  href="#"
                  className="mt-4 rounded-full bg-[#F7A500] px-4 py-2 text-center font-semibold text-black hover:bg-yellow-400"
                >
                  Join Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Glow background */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(to right, #333333, #F7A500, #666666)",
            filter: "blur(100px)",
            opacity: 0.2,
          }}
        />
      </div>
    </header>
  );
}
