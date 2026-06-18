import './Carousel.css';
import { useState } from 'react';
import type { ReactNode } from 'react';

export interface CarouselProps {
  slides: ReactNode[];
  className?: string;
}

/** Slideshow with arrows and dot indicators. Mirrors the Figma "Carousel". */
export function Carousel({ slides, className = '' }: CarouselProps) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);
  return (
    <div className={`ds-carousel ${className}`.trim()}>
      <div className="ds-carousel__viewport">
        <div className="ds-carousel__track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s, idx) => (
            <div className="ds-carousel__slide" key={idx}>
              {s}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="ds-carousel__nav ds-carousel__nav--prev"
        aria-label="Previous"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="ds-carousel__nav ds-carousel__nav--next"
        aria-label="Next"
        onClick={() => go(1)}
      >
        ›
      </button>
      <div className="ds-carousel__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`ds-carousel__dot ${idx === i ? 'ds-carousel__dot--active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}
