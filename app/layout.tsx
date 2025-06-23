import type { Metadata } from "next";
import "./globals.css";
import { Cairo, Merriweather } from "next/font/google";
import Nav from "@/app/components/Nav";
import Footer from "./components/Footer";

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
  title: "IEEE",
  description: "IEEE",
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
