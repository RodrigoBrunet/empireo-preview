"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/photo.jpg", "/photo2.jpg", "/photo.jpg"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-150 overflow-hidden">
      {/* Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay azul translúcido */}
          <div className="absolute inset-0 bg-[#0046A6]/40"></div>
        </div>
      ))}

      {/* Texto central fixo (fora do overlay) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="mt-28 flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center px-4 leading-snug">
            Transformando desafios em soluções
          </h2>
          <h3 className="text-white text-2xl md:text-4xl drop-shadow-lg text-center px-4 mt-4 font-logo">
            PRAZER, SOMOS A EMPIREO
          </h3>

          {/* Botão Fale Conosco */}
          <button
            onClick={() => console.log("Botão clicado!")}
            className="mt-6 bg-white text-[#0046A6] font-bold px-6 py-3 rounded-lg shadow-lg
    hover:bg-blue-600 hover:text-white
    transition duration-300 transform hover:scale-105
    active:scale-95 active:bg-blue-800 active:text-white"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
}
