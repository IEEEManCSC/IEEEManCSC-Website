import Image from "next/image";

interface EventCardProps {
  image: string;
  altText: string;
  title?: string;
  date?: string;
  description?: string;
  showDetails?: boolean;
  className: string;
}

// export default function EventCard({
//   image,
//   altText,
//   title,
//   date,
//   description,
//   showDetails = false,
//   className,
// }: EventCardProps) {
//   return (
//     <article
//       className={`group overflow-hidden relative rounded-3xl w-[500px] mb-2  ${className}  `}
//     >
//       <Image
//         src={image}
//         alt={altText}
//         fill
//         className="object-cover rounded-3xl"
//       />
//       {showDetails && (
//         <div
//           className="flex flex-col gap-12 justify-center items-center absolute left-14 top-[52px] w-[640px] h-[432px]
//                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                      max-md:h-[90%] max-md:left-[5%] max-md:top-[5%] max-md:w-[90%] max-sm:p-4"
//         >
//           <div className="flex justify-between items-start w-full">
//             <h2 className="text-4xl font-bold text-amber-500 max-sm:text-3xl">
//               {title}
//             </h2>
//             <time className="text-3xl font-medium text-amber-500 max-sm:text-2xl">
//               {date}
//             </time>
//           </div>
//           <p className="text-3xl font-semibold leading-9 text-neutral-100 text-opacity-70 max-md:text-2xl max-sm:text-xl max-sm:leading-7">
//             {description}
//           </p>
//           <button className="px-20 py-3 text-2xl font-extrabold tracking-wider bg-amber-500 cursor-pointer rounded-[35px] text-neutral-100 hover:bg-amber-600 transition-colors max-sm:text-xl w-[304px] h-14 max-sm:h-12 max-sm:w-[90%]">
//             Know More
//           </button>
//         </div>
//       )}
//     </article>
//   );
// }
// Parent Component

// EventCard Component
export default function EventCard({
  image,
  altText,
  title,
  date,
  description,
  className,
  showDetails,
}: EventCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={image}
        alt={altText}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />

      <div className="absolute inset-0 flex flex-col justify-between p-8  opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:p-4">
        <div className="flex justify-between w-full">
          <h2 className="text-4xl font-bold max-md:text-3xl max-sm:text-2xl text-[#F7A500]">
            {title}
          </h2>
          <time className="text-3xl font-medium max-md:text-2xl max-sm:text-xl text-[#F7A500]">
            {date}
          </time>
        </div>

        <p className="text-2xl font-semibold text-neutral-100/90 max-md:text-xl max-sm:text-lg">
          {description}
        </p>

        <button className="self-center px-8 py-3 text-xl font-bold bg-amber-500 rounded-full hover:bg-amber-600 transition-colors max-md:text-lg max-sm:px-6 max-sm:py-2">
          Know More
        </button>
      </div>
    </article>
  );
}
