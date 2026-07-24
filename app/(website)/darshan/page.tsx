import { LiveDarshan } from "@/components/home/LiveDarshan";
import { VirtualTour, YouTubeVideos } from "@/components/darshan";

export default function DarshanPage() {
  return (
    <>
      <div className="pt-32 sm:pt-36 lg:pt-40">
        <LiveDarshan />
      </div>
      <VirtualTour />
      <YouTubeVideos />
    </>
  );
}
