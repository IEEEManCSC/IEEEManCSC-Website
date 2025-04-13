import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import Nav from "./components/Nav";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
    <html lang="en">
      <body
        className={`${cairo.className}  antialiased bg-[#141414] h-[1000px]`}
      >
        <Nav />
        {/* <NavBar />
        <section className=" pt-36 pb-20 lg:pt-52">{children}</section>
        <Suspense fallback={<Loading />}>
        </Suspense>
        <Footer /> */}
        {children}
      </body>
    </html>
  );
}
