import type { Metadata } from "next";
import "./globals.css";
import { Cairo, Merriweather } from "next/font/google";
import Nav from "@/app/components/Nav";
import Footer from "./components/Footer";
import ieeeLogo from "@/public/logo.png";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "IEEE Mansoura Computer Society Chapter",
  description:
    "IEEE Mansoura Computer Society Chapter is considered to be the technical subunit of IEEE ManSB, IEEE ManCSC follows the IEEE Computer Society which is the world’s leading organization of computing and information technology professionals.",
  openGraph: {
    images: [
      {
        url: "https://computer.mansoura.ieee.org/logo.png",
        width: 1200,
        height: 630,
        alt: "IEEE Mansoura Computer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${cairo.className} ${merriweather.variable}   antialiased bg-[#141414]  overflow-x-hidden`}
      >
        <Nav />
        {/* <NavBar />
        <section className=" pt-36 pb-20 lg:pt-52">{children}</section>
        <Suspense fallback={<Loading />}>
        </Suspense>
        <Footer /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
