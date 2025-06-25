import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import { GrYoutube } from "react-icons/gr";
export default function Footer() {
  return (
    <footer className="bg-black mx-auto text-neutral-200 py-8 ">
      <div className="w-[90%] mx-auto md:px-0 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="IEEE Computer Society"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-semibold text-lg text-amber-500 leading-tight max-sm:text-base">
                  IEEE COMPUTER SOCIETY
                </h2>
                <p className="text-sm font-medium mt-1 max-sm:text-xs">
                  Mansoura Student Branch Chapter
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed max-sm:text-sm max-sm:leading-normal">
              IEEE Mansoura Computer Society Chapter is considered to be the
              technical subunit of IEEE Mansoura Student Branch. IEEE Man-CS
              follows the IEEE Computer Society.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-amber-500 text-base font-semibold mb-2 max-sm:text-sm">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm max-sm:text-xs">
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-amber-500 text-base font-semibold mb-2 max-sm:text-sm">
                  More About Us
                </h3>
                <ul className="space-y-2 text-sm max-sm:text-xs">
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      Goals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      Our Leaders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      We in Numbers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-amber-500 text-base font-semibold mb-2 max-sm:text-sm">
                  Get in Touch
                </h3>
                <ul className="space-y-2 text-sm max-sm:text-xs">
                  <li>
                    <a
                      href="mailto:someone@ieee.org"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      <FiMail className="h-5 w-5 max-sm:h-4 max-sm:w-4" />
                      Mail
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      <FiMapPin className="h-5 w-5 max-sm:h-4 max-sm:w-4" />
                      Location
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 mb-6" />

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-lg text-neutral-300 text-center max-sm:text-base">
            Designed by IEEE CS © 2025 All Rights Reserved
          </p>

          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/ieeemancsc"
              className="text-neutral-300 hover:text-amber-500 transition-colors"
            >
              <FiFacebook className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/c/IEEEManCSC"
              className="text-neutral-300 hover:text-amber-500 transition-colors"
            >
              <GrYoutube className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ieeemancsc/posts/?feedView=all"
              className="text-neutral-300 hover:text-amber-500 transition-colors"
            >
              <FiLinkedin className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
