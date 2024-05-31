import { useForm } from "react-hook-form";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().min(2).email({ message: "Enter a valid email address" }).max(50),
  message: z
    .string()
    .min(1, { message: "Message must not be empty" })
    .max(200, { message: "Message must not be longer than 200 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: <span>I&apos;ll get back to you as soon as possible!</span>,
    });
  }

  return (
    <section id="contact" className="w-full my-24">
      <MaxWidthWrapper>
        <h3 className="text-4xl italic px-8 mt-8">Get in touch</h3>
        <p className="px-8 w-full md:w-2/3 mt-4 text-muted-foreground">
          We are here to help you with all your financial needs. Whether you have questions, need
          advice, or want to schedule a consultation, our team is ready to assist you. Reach out to
          us today and take the first step towards securing your financial future.
        </p>
        <div className="flex flex-col items-center w-full mt-12 mb-28">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full sm:w-1/2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="I'd love to hear from you!" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Send
              </Button>
            </form>
          </Form>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
