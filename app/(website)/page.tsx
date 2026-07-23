import { Hero } from "@/components/home/Hero";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { AboutTemple } from "@/components/home/AboutTemple";
import { LiveDarshan } from "@/components/home/LiveDarshan";
import { TimingsSnapshot } from "@/components/home/TimingsSnapshot";
import { Gallery } from "@/components/home/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <AboutTemple />
      <LiveDarshan />
      <TimingsSnapshot />
      <Gallery />
    </>
  );
}
