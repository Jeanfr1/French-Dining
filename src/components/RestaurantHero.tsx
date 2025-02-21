
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function RestaurantHero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-sm md:text-base font-light text-zinc-500 mb-2 tracking-wide">
              WELCOME TO
            </span>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              La Maison <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Gastronomique
              </span>
            </h1>
            <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-base md:text-lg">
              Experience culinary excellence in the heart of the city, where every dish tells a story of passion and creativity.
            </p>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=3270&auto=format&fit=crop"
          alt="Restaurant interior"
          className="w-full h-full object-cover object-center"
        />
      </ContainerScroll>
    </div>
  );
}
