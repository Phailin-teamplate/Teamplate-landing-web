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

export function Carousels() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <Carousel className="relative w-full max-w-xs items-center">
      <Image
        className="absolute z-10 w-full h-full object-cover"
        src={Ios}
        alt="Background"
        quality={100}
        objectPosition="top"
      />
     <div className="relative w-full">
  <CarouselContent>
    {images.map((image, index) => (
      <CarouselItem key={index} className="flex justify-center">
        <div className="p-6 md:p-2 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
          <Card2>
            <CardContent className="flex items-center justify-center p-4 sm:p-6 md:p-8">
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
  <CarouselPrevious />
  <CarouselNext />
</div>

    </Carousel>
  );
}
