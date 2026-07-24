import { Clapperboard } from "lucide-react";

import { themeCssVariables } from "@/src/constants/theme";

import { youtubeSuggestions } from "./darshan.data";

export function YouTubeVideos() {
  return (
    <section
      className="bg-[var(--color-warm-ivory)] py-16 text-[var(--color-primary-text)] sm:py-20 lg:py-24"
      style={themeCssVariables}
      aria-labelledby="youtube-videos-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
            YouTube Videos
          </p>
          <h2
            id="youtube-videos-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
          >
            Devotional Video Suggestions
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
            Static suggestions for future YouTube embeds, including live
            sessions, devotional videos, and temple highlights.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {youtubeSuggestions.map((video) => {
            const Icon = video.icon;

            return (
              <article
                className="border border-[var(--color-border)] bg-[var(--color-soft-cream)] p-6 shadow-[0_18px_50px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)]"
                key={video.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center bg-[var(--color-temple-maroon)] text-[var(--color-warm-ivory)]">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm-saffron)]">
                    <Clapperboard aria-hidden="true" size={16} />
                    {video.category}
                  </span>
                </div>
                <h3 className="mt-6 font-[var(--font-cormorant),serif] text-2xl font-semibold leading-tight text-[var(--color-temple-name)]">
                  {video.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-secondary-text)]">
                  {video.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
