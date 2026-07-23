import { Hero } from "@/components/home/Hero";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { AboutTemple } from "@/components/home/AboutTemple";
import { LiveDarshan } from "@/components/home/LiveDarshan";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <AboutTemple />
      <LiveDarshan />
    </>
  );
}
