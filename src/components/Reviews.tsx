import { REVIEWS_DATA } from "@/lib";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section id="reviews" className="w-full my-28">
      <MaxWidthWrapper>
        <h3 className="text-4xl italic px-8 mt-8">Testimonials</h3>
        <div className="w-full px-4 flex justify-center items-center my-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="px-2 flex flex-col items-center justify-center relative "
          >
            <CarouselContent className="w-[358px] md:w-[600px] lg:w-[850px]">
              {REVIEWS_DATA.map((item) => (
                <CarouselItem key={item.name} className="md:basis-1/2 lg:basis-1/3 ">
                  <div className="p-1">
                    <ReviewCard name={item.name} review={item.review} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute flex items-center justify-between -bottom-8">
              <CarouselDots />
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Reviews;

const ReviewCard = ({ name, review }: { name: string; review: string }) => {
  return (
    <Card className="h-52  flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-md">{review}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between text-muted-foreground">
        {name}{" "}
        <div className="flex items-center gap-1">
          <Star size={12} fill="white" className="text-primary" />
          <Star size={12} fill="white" className="text-primary" />
          <Star size={12} fill="white" className="text-primary" />
          <Star size={12} fill="white" className="text-primary" />
          <Star size={12} fill="white" className="text-primary" />
        </div>
      </CardContent>
    </Card>
  );
};
