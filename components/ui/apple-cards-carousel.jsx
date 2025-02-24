"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = React.forwardRef(({ items, initialScroll = 0, isInfinite = true }, ref) => {
  const carouselRef = ref || React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Only add duplicates if infinite scroll is enabled
  const extendedItems = isInfinite 
    ? [...items.slice(-1), ...items, ...items.slice(0, 2)]
    : items;

  useEffect(() => {
    if (carouselRef.current && isInfinite) {
      const cardWidth = isMobile() ? 144 : 256;
      carouselRef.current.scrollLeft = cardWidth + 12;
      checkScrollability();
    }
  }, [isInfinite]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current && isInfinite) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const cardWidth = isMobile() ? 230 : 384;
      const gap = 16;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.style.scrollBehavior = 'auto';
        carouselRef.current.scrollLeft = cardWidth + gap;
        carouselRef.current.style.scrollBehavior = 'smooth';
      }

      if (scrollLeft <= 10) {
        carouselRef.current.style.scrollBehavior = 'auto';
        carouselRef.current.scrollLeft = scrollWidth - (2 * cardWidth + 2 * gap);
        carouselRef.current.style.scrollBehavior = 'smooth';
      }

      checkScrollability();
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div className="flex w-full overflow-x-scroll overscroll-x-auto py-14 md:py-16 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-3 pl-4",
              "max-w-6xl mx-auto"
            )}
          >
            {extendedItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex justify-center gap-2">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-50 hover:bg-gray-100 transition-colors"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-50 hover:bg-gray-100 transition-colors"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
});

export const Card = ({ card, index, layout = false, link }) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-96 w-80 md:h-[24rem] md:w-80 overflow-hidden flex flex-col items-start justify-start relative z-10 group"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none group-hover:from-black/70 transition-all duration-500" />
      <div className="relative z-40 p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-white text-sm md:text-base font-medium font-sans text-left"
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
        >
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};