import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { ReactNode, ElementType } from "react";

interface IProps<T extends ElementType = "section"> {
  as?: T;
  children: ReactNode;
  className?: ClassValue;
}

function BlackMainSection<T extends ElementType = "section">({
  as,
  children,
  className,
}: IProps<T>) {
  const Component = (as ?? "section") as ElementType;
  return (
    <Component
      className={cn(
        "relative before:content-[''] before:absolute before:-inset-[1px] before:rounded-[50px] before:lg:rounded-[88px] before:z-[-1] before:bg-[linear-gradient(90deg,_#141414_0%,#F7A500_50%,#141414_100%)] px-6 sm:px-8 md:px-11 lg:px-14 xl:px-16 py-7 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black rounded-[50px] lg:rounded-[88px]",
        className
      )}
    >
      {children}
    </Component>
  );
}

export default BlackMainSection;
