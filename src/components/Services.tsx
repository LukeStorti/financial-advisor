import { SERVICES_DATA } from "@/lib";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };
  return (
    <section id="services" className="w-full my-12">
      <MaxWidthWrapper>
        <h3 className="text-4xl italic px-8 mt-8">Our Services</h3>
        <div className="w-full ">
          <Accordion type="single" collapsible className="w-full flex flex-col items-center my-4">
            {SERVICES_DATA.map((item) => (
              <AccordionItem key={item.title} value={item.title} className="w-full sm:w-1/2 ">
                <AccordionTrigger className="text-xl font-semibold">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <AnimatePresence>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="flex flex-col"
                    >
                      <motion.h4 variants={childVariants} className="text-lg mb-2">
                        {item.subtitle}
                      </motion.h4>
                      <motion.p variants={childVariants} className="text-muted-foreground mb-2">
                        {item.description}
                      </motion.p>
                      {item.features.map((feature) => (
                        <motion.li
                          variants={childVariants}
                          key={feature}
                          className="text-muted-foreground"
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
