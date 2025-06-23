// components/Countdown.tsx
"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useState, useEffect, useMemo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function calculateTimeLeft(targetTs: number): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, targetTs - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export default function Countdown({
  target,
  className,
}: {
  target: string;
  className: ClassValue;
}) {
  // parse "DD/MM/YYYY" just once
  const targetTs = useMemo(() => {
    const [dd, mm, yyyy] = target.split("/").map(Number);
    return new Date(yyyy, mm - 1, dd).getTime();
  }, [target]);

  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const update = () => setTime(calculateTimeLeft(targetTs));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [targetTs]);

  return (
    <div className={cn("flex gap-8", className)}>
      {[
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#F0B41A] flex items-center justify-center mb-2">
            <span className="text-white text-2xl font-semibold">{value}</span>
          </div>
          <span className="text-white text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
