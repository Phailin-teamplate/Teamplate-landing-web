"use client";
import { Card2, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Ios from "@/public/ios.png";

export default function Carousels() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <div
      className="flex flex-col items-center text-center mt-12 md:mt-16 px-0 md:px-0 w-full scroll-mt-25"
      id="contact"
    >
      <h2 className="text-4xl font-bold">
        <span className="text-gray-800">Recent</span>{" "}
        <span className="text-blue-500">Works</span>
      </h2>

      <p className="text-lg text-gray-600 mt-4 max-w-3xl">Hong Hong Application</p>

      <Carousel className="relative w-full max-w-xs items-center" opts={{ loop: true }}>
        <Image
          className="absolute z-10 w-full h-full object-cover"
          src={Ios}
          alt="Background"
          quality={100}
          objectPosition="top"
        />
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="p-4 md:p-2 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
                <Card2>
                  <CardContent className="flex items-center justify-center p-6 sm:p-6 md:p-8">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto object-cover rounded-3xl"
                    />
                  </CardContent>
                </Card2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex justify-center items-center m-4 sm:m-2 md:m-0" />
        <CarouselNext className="flex justify-center items-center m-4 sm:m-2 md:m-0" />
      </Carousel>
    </div>
  );
}
