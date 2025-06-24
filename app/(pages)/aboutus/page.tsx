import { board, heads } from "@/data";
import BoardSection from "@/app/components/BoardSection";

export default function page() {
  return (
    <>
      <BoardSection
        title="OUR LEADERSHIP TEAM"
        description="Our work is powered by creativity, collaboration, and dedication — now it's time to meet the amazing team behind every detail we craft"
        members={board}
      />

      <div className="h-[1px] p-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent my-10" />

      <BoardSection
        title="OUR COMMITTEE HEADS"
        description="Our journey is guided by leadership, experience, and vision — now it’s time to meet the dedicated mentors leading our 8 committees to success"
        members={heads}
      />
      <div className="h-[1px] p-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-10" />
    </>
  );
}
