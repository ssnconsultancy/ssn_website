import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });
  
  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values);
  }

  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-supportingText">
              Ready to start your digital transformation journey?
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Ready to start your digital transformation journey? Contact us today to discuss how we can help your government agency embrace innovation and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                              {...field}
                            />
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
                          <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="How can we help you?"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                              {...field}
                            />
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
                          <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5}
                              placeholder="Tell us about your project or inquiry..."
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      className="w-full bg-highlight text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition duration-150"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-highlight bg-opacity-10 p-3 rounded-full">
                        <i className="fas fa-phone text-highlight"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">Phone</h3>
                      <p className="text-secondary">+91 9897392540</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-highlight bg-opacity-10 p-3 rounded-full">
                        <i className="fas fa-envelope text-highlight"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">Email</h3>
                      <p className="text-secondary">ssnconsultancy@outlook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-highlight bg-opacity-10 p-3 rounded-full">
                        <i className="fas fa-map-marker-alt text-highlight"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">Address</h3>
                      <p className="text-secondary">Tea Estate Plot No. 82, Banjarawala,<br/>Dehradun, Uttarakhand – 248001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-72 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27717.019261826737!2d78.01872213955077!3d30.269677600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091ba6de41ce91%3A0xfabeb21b641e81fa!2sBanjarawala%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1684903817992!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SSN Consultancy office location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Working Hours</h2>
            <div className="section-divider"></div>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right font-medium text-primary">Monday - Friday:</div>
                <div className="text-left text-secondary">9:00 AM - 6:00 PM</div>
                
                <div className="text-right font-medium text-primary">Saturday:</div>
                <div className="text-left text-secondary">10:00 AM - 4:00 PM</div>
                
                <div className="text-right font-medium text-primary">Sunday:</div>
                <div className="text-left text-secondary">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
