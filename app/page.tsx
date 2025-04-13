import Image from "next/image";
import Logo from "./components/Logo";
import CornerBrackets from "@/components/ui/CornerBrackets";
import GoalCard from "./components/GoalCard";
import services from "@/data.json";

export default function Home() {
  return (
    <>
      <section className="flex  items-center h-screen justify-center">
        <div className=" h-[calc(100vh-5rem)] w-[90%] relative  ">
          <Logo />
          <Image
            src="/img.png"
            alt="Picture of the author"
            fill
            className="  object-cover rounded-2xl"
          />
        </div>
      </section>
      <section className="mx-auto w-[90%] ">
        <div
          className="
          relative flex flex-col md:items-start items-center md:gap-1 gap-6 overflow-hidden 
          rounded-3xl bg-[#1B1B1B]  p-6 
          text-white md:flex-row gradient
        "
        >
          <CornerBrackets />

          <div className="relative md:h-[400px] h-[340px] w-[65%] flex-shrink-0 overflow-hidden rounded-[16px]  md:w-[27%]">
            <Image
              src="/whoSec.png"
              alt="IEEE Mansoura Computer Society Chapter"
              fill
              className="object-cover max-w-[90%]  "
            />
          </div>

          <div className="flex flex-col justify-center md:items-start items-center w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-[#F7A500] mb-2 font-[Merriweather]">
              WHO WE ARE
            </h2>
            <h3 className="text-2xl font-semibold mb-4 tracking-wider">
              IEEE Mansoura Computer Society Chapter{" "}
              <span className="text-[#F7A500]">Since 2021</span>
            </h3>
            <p className="text-gray-300 text-lg leading-8 tracking-wider">
              IEEE Mansoura Computer Society Chapter is considered to be the
              technical subunit of IEEE Mansoura Student Branch. IEEE ManCSC
              follows the IEEE Computer Society. The IEEE Mansoura Computer
              Society Chapter is considered to be the technical subunit of IEEE
              Mansoura Student Branch. IEEE ManCSC follows the IEEE Computer
              Society.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F0F0F] text-white">
        <h2 className="text-4xl font-[Merriweather] font-bold text-center text-[#F7A500] mb-12">
          OUR GOALS
        </h2>
        <div className="w-[90%] mx-auto px-4 flex flex-col md:flex-row gap-8">
          {services.map((g) => (
            <GoalCard key={g.id} title={g.title} description={g.description} />
          ))}
        </div>
      </section>
    </>
  );
}
