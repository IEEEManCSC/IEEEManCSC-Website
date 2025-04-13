import Image from "next/image";
import Logo from "./Logo";
export default function Home() {
  return (
    <section className="flex bg-neutral-700 items-center h-screen justify-center">
      <div className=" h-[669px] w-[90%] relative ">
        <Logo />
        <Image src="/img.png" alt="Picture of the author" fill className="  object-cover" />
      </div>
    </section>
  );
}
