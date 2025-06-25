import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { ReactNode, ElementType } from "react";

interface IProps<T extends ElementType = "section"> {
  as?: T;
  children: ReactNode;
  className?: ClassValue;
  contentClassName?: ClassValue;
}

function BorderedBlackSection<T extends ElementType = "section">({
  as,
  children,
  className,
  contentClassName,
}: IProps<T>) {
  const Component = (as ?? "section") as ElementType;
  return (
    <Component
      className={cn("relative bg-black text-white flex flex-col", className)}
    >
      <div className="absolute inset-[-4px] rounded-lg z-[1] bg-[linear-gradient(123deg,rgba(247,167,8,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_85%,rgba(247,167,8,1)_100%)]" />
      <div
        className={cn(
          "bg-black relative z-10 h-full flex-1 w-full py-10 px-5 rounded-lg ",
          contentClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}

export default BorderedBlackSection;
