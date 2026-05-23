"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, PlayCircle, X } from "lucide-react";
import type { MediaItem } from "@/lib/types";

function ImageSlide({ item }: { item: MediaItem }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <Image
          src={item.src}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 50vw"
        />
      </button>
      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image
              src={item.src}
              alt=""
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function VideoSlide({ item }: { item: MediaItem }) {
  const thumb = `https://img.youtube.com/vi/${item.src}/0.jpg`;
  const youtubeLink = `https://www.youtube.com/watch?v=${item.src}`;

  return (
    <a
      href={youtubeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-border"
    >
      <Image
        src={thumb}
        alt="YouTube thumbnail"
        fill
        className="object-cover opacity-90 transition group-hover:opacity-100"
        sizes="(max-width: 768px) 90vw, 50vw"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
        <span className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white">
          <PlayCircle className="size-4" />
          Watch on YouTube
          <Play className="size-4 fill-white" />
        </span>
      </span>
    </a>
  );
}

export function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!media.length) return null;

  return (
    <section className="mt-10">
      <h2 className="font-sans text-lg font-semibold text-text">Media</h2>
      <div className="relative mt-4">
        <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="embla__container">
            {media.map((item, i) => (
              <div className="embla__slide px-1" key={`${item.type}-${item.src}-${i}`}>
                {item.type === "image" ? (
                  <ImageSlide item={item} />
                ) : (
                  <VideoSlide item={item} />
                )}
              </div>
            ))}
          </div>
        </div>
        {media.length > 1 ? (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-lg bg-bg-card/90 p-2 text-accent hover:bg-bg-elevated"
              aria-label="Previous"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-l-lg bg-bg-card/90 p-2 text-accent hover:bg-bg-elevated"
              aria-label="Next"
            >
              <ChevronRight className="size-5" />
            </button>
            <div className="mt-3 flex justify-center gap-1.5">
              {media.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`size-2 rounded-full transition ${
                    i === selected ? "bg-accent" : "bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
