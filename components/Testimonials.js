import { AnimatedTestimonials } from "./ui/animated-testimonials";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      designation: "UI/UX Designer",
      quote: "Working with this team has been an incredible experience. Their attention to detail and creative solutions exceeded all expectations.",
      src: "/pp.jpg"
    },
    {
      name: "Michael Chen", 
      designation: "Software Engineer",
      quote: "The quality of work and professionalism shown throughout the project was outstanding. I highly recommend their services.",
      src: "/pp.jpg"
    },
    {
      name: "Emma Davis",
      designation: "Product Manager", 
      quote: "They delivered exactly what we needed, on time and within budget. The results have helped transform our business.",
      src: "/pp.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-4 text-black sm:py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            What My Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};