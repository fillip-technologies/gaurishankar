"use client";

import { Mic, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

import { HEADER_ASSETS } from "./header.constants";
import { mantraText } from "./header.data";

export function MantraBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      audio.muted = true;
      setIsPlaying(false);
      return;
    }

    audio.muted = false;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="group flex h-14 w-full min-w-0 items-center gap-3 rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_52%,var(--color-mantra-border))] bg-[color-mix(in_srgb,var(--color-soft-cream)_92%,var(--color-white))] px-3 py-2 shadow-[0_18px_42px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--color-white)_70%,transparent)] backdrop-blur-xl [box-shadow:inset_0_1px_0_color-mix(in_srgb,var(--color-white)_82%,transparent),inset_0_-12px_24px_color-mix(in_srgb,var(--color-accent-gold)_8%,transparent),0_18px_42px_color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)] sm:px-4 lg:max-w-[660px] xl:max-w-[680px]">
      <audio
        ref={audioRef}
        src={HEADER_ASSETS.mantraAudioSrc}
        preload="none"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-accent-gold)_38%,transparent)] bg-[var(--color-warm-ivory)] font-[var(--font-noto-devanagari),var(--font-geist-sans)] text-xl font-semibold text-[var(--color-om-icon)] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--color-white)_80%,transparent)] sm:size-11"
      >
        ॐ
      </span>
      <div
        className="relative min-w-0 flex-1 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-8 before:bg-linear-to-r before:from-[var(--color-soft-cream)] before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-8 after:bg-linear-to-l after:from-[var(--color-soft-cream)] after:to-transparent"
        aria-label="Scrolling mantra"
      >
        <div className="flex w-max whitespace-nowrap font-[var(--font-noto-devanagari),var(--font-geist-sans)] text-[15px] font-semibold leading-none text-[var(--color-mantra-text)] will-change-transform [animation:header-mantra_64s_linear_infinite] group-hover:[animation-play-state:paused] sm:text-base">
          <span className="shrink-0 pr-12">{mantraText}</span>
          <span className="shrink-0 pr-12" aria-hidden="true">
            {mantraText}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={toggleAudio}
        className="grid size-10 shrink-0 place-items-center rounded-full text-[var(--color-temple-maroon)] transition hover:bg-[color-mix(in_srgb,var(--color-temple-maroon)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
        aria-label={isPlaying ? "Pause mantra audio" : "Play mantra audio"}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <Volume2 aria-hidden="true" size={18} /> : <VolumeX aria-hidden="true" size={18} />}
      </button>
      <button
        type="button"
        className="hidden size-10 shrink-0 place-items-center rounded-full text-[var(--color-warm-saffron)] transition hover:bg-[color-mix(in_srgb,var(--color-warm-saffron)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)] sm:grid"
        aria-label="Voice search"
      >
        <Mic aria-hidden="true" size={18} />
      </button>
      <style>{`
        @keyframes header-mantra {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .\\[animation\\:header-mantra_64s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
