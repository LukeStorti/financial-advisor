import MaxWidthWrapper from "./MaxWidthWrapper";
import aboutImg from "../assets/aboutImg.png";

const About = () => {
  return (
    <section id="about" className="w-full my-12">
      <MaxWidthWrapper>
        <h3 className="text-4xl italic px-8 mt-8">About Financial Advisor</h3>
        <div className="w-full flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2  flex flex-col items-center justify-center ">
            <img
              src={aboutImg}
              alt="image of financial advisor"
              className="object-contain w-[250px] h-[400px]"
            />
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "My mission is to simplify your financial life, allowing you to focus on what truly
              matters."
            </blockquote>
          </div>
          <div className="my-8 px-8 flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-col gap-1 ">
              <h4 className="text-lg font-semibold">Your Trusted Partner in Financial Success </h4>
              <p className="text-muted-foreground">
                At [Advisor's Firm Name], we believe that true financial success is built on trust,
                expertise, and personalized service. With over 15 years of experience in the
                financial industry, [Financial Advisor's Name] has been dedicated to guiding clients
                through their financial journeys with tailored strategies and unwavering commitment.
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <h4 className="text-lg font-semibold">Our Mission </h4>
              <p className="text-muted-foreground">
                Our mission is to empower individuals and families to achieve their financial goals
                through comprehensive planning and sound investment management. We strive to provide
                clarity and confidence, ensuring that each client understands their financial
                options and the steps needed to secure their future.
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <h4 className="text-lg font-semibold">Our Approach </h4>
              <p className="text-muted-foreground">
                We take a holistic approach to financial planning, considering all aspects of your
                financial life. This includes retirement planning, investment management, tax
                strategies, estate planning, and risk management. By understanding your unique goals
                and circumstances, we create customized plans that align with your vision for the
                future.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
