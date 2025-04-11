
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Our team will contact you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to explore how American Global Reinsurance can strengthen your risk management strategy? Our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-agr-lightBlue rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-agr-blue">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-agr-brightBlue" />
                </div>
                <div>
                  <h4 className="font-semibold text-agr-blue mb-1">Our Location</h4>
                  <p className="text-gray-700">
                    6060 North Central Expressway,<br />
                    Suite 500, Dallas, TX 75206
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-agr-brightBlue" />
                </div>
                <div>
                  <h4 className="font-semibold text-agr-blue mb-1">Email Us</h4>
                  <p className="text-gray-700">
                    info@agreinsure.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-agr-brightBlue" />
                </div>
                <div>
                  <h4 className="font-semibold text-agr-blue mb-1">Call Us</h4>
                  <p className="text-gray-700">
                    1 877-828-9970
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <Input 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-agr-brightBlue hover:bg-agr-blue" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
