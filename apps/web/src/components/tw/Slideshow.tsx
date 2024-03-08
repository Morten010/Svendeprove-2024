"use client";
import { FC, useRef } from "react";
import Slider, { Settings } from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "@/constants";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SlidwehowProps {}

const Slideshow: FC<SlidwehowProps> = ({}) => {
  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  } as Settings;
  return (
    <div className="relative w-full overflow-hidden">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
        className="aspect-square sm:aspect-video sm:max-h-[80vh] w-full"
      >
        {slides.map((slide, index) => (
          <div
            className="w-full aspect-square sm:aspect-video max-h-[80vh] relative"
            key={slide.alt + index}
          >
            <Image
              src={slide.href}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </Slider>
      <button
        className="absolute border-2 rounded-full border-[#d0e1d2] bg-[#d0e1d2]/10 p-2 top-2/4 left-4 text-[#d0e1d2] -translate-y-2/4"
        onClick={previous}
        aria-label="Tidligere billede"
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute border-2 rounded-full border-[#d0e1d2] bg-[#d0e1d2]/10 p-2 top-2/4 right-4 text-[#d0e1d2] -translate-y-2/4"
        onClick={next}
        aria-label="Næste billede"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slideshow;
