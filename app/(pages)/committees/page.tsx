import CommitteeCard from "@/app/components/CommitteeCard";
import { committees } from "@/data";

export default function page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-center text-amber-500 uppercase font-[Merriweather]">
        OUR COMMITTEES
      </h2>
      <p className="mt-2 text-lg md:text-xl font-medium tracking-widest  leading-7 text-center text-gray-300 max-w-2xl mx-auto">
        Welcome To Our Committees — Where Passion Meets Purpose Across Eight
        Specialized Teams, Each Dedicated To Growth, Innovation, And Impact
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {committees.slice(0, 6).map((c) => (
          <CommitteeCard key={c.id} committee={c} />
        ))}

        <div className="col-span-full flex justify-center gap-6 md:gap-20 md:flex-row flex-col">
          {committees.slice(6).map((c) => (
            <div className="" key={c.id}>
              <CommitteeCard committee={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
