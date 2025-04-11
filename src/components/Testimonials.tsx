
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "American Global Reinsurance's innovative approach to our complex portfolio challenges has been transformative. Their dedication to understanding our unique needs sets them apart in the industry.",
      name: "Sarah Johnson",
      title: "Chief Risk Officer, Pacific Insurance Group",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "Working with AG Reinsurance has been a breath of fresh air. Their analytical capabilities combined with their responsive service has made them an invaluable partner in our risk management strategy.",
      name: "Michael Chen",
      title: "VP of Operations, Global Financial Services",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The team at American Global consistently delivers solutions that address our evolving risk landscape. Their forward-thinking approach and market insights have significantly strengthened our program.",
      name: "Emma Rodriguez",
      title: "Director of Underwriting, Coastal Property Insurers",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-agr-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from our partners about their experience working with American Global Reinsurance.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                    <Quote className="h-12 w-12 text-agr-accent opacity-50 mb-6" />
                    <blockquote className="text-xl md:text-2xl mb-8">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index ? 'bg-agr-accent' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
