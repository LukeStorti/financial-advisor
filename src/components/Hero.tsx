import MaxWidthWrapper from "./MaxWidthWrapper";
import heroImg from "../assets/heroImg.png";
import { BookOpenCheck, HandCoins, Handshake } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="my-8 lg:mb-20">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row w-full  justify-evenly">
          <div className="w-full md:w-1/2  flex flex-col items-center">
            <h1 className="mt-6 text-2xl font-semibold">Meet Financial Advisor</h1>
            <p className="text-muted-foreground text-center my-2 tracking-tight">
              With over a decade of experience in financial planning and investment management,
              [Financial Advisor's Name] is dedicated to helping clients achieve their financial
              goals with personalized, strategic advice. Whether you're planning for retirement,
              investing for the future, or seeking comprehensive financial guidance, [Advisor's
              Name] provides the expertise and commitment you need to navigate your financial
              journey with confidence. Partner with [Advisor's Name] and take the first step towards
              a secure and prosperous financial future.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "Your financial success is my top priority. Let's navigate your journey together with
              confidence."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-evenly my-8 md:my-12 w-full">
              <div className="border-2 rounded-md h-40 w-40 flex flex-col items-center justify-center">
                <HandCoins size={50} />
                <div className="flex flex-col text-center mt-4">
                  <h2 className="font-bold">$50 Million</h2>
                  <p className="text-muted-foreground">Actively Managed</p>
                </div>
              </div>
              <div className="border-2 rounded-md h-40 w-40 flex flex-col items-center justify-center">
                <Handshake size={50} />
                <div className="flex flex-col text-center mt-4">
                  <h2 className="font-bold">14 Years</h2>
                  <p className="text-muted-foreground">Industry Expertise</p>
                </div>
              </div>
              <div className="border-2 rounded-md h-40 w-40 flex flex-col items-center justify-center">
                <BookOpenCheck size={50} />
                <div className="flex flex-col text-center mt-4">
                  <h2 className="font-bold">CFP Certified</h2>
                  <p className="text-muted-foreground">2010 Graduate</p>
                </div>
              </div>
            </div>
            <Button className=" sm:text-lg font-semibold" asChild>
              <a href="#contact">Secure Your Financial Future Now</a>
            </Button>
          </div>
          <div className="w-full md:w-1/2  flex items-center justify-center">
            <img src={heroImg} alt="image of financial advisor" className="object-contain" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
