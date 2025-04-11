
import { CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "$2B+", label: "in Capacity" },
    { value: "A+", label: "AM Best Rating" },
    { value: "24/7", label: "Support" },
    { value: "98%", label: "Client Retention" }
  ];

  const strengths = [
    "Expert underwriting across all lines of business",
    "Innovative risk assessment technologies",
    "Commitment to long-term partnerships",
    "Rapid claims resolution process",
    "Global market insights and analytics",
    "Multi-regional regulatory expertise"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About American Global Reinsurance</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded on the principles of innovation, expertise, and exceptional service, American Global Reinsurance is redefining the reinsurance experience. We combine deep industry knowledge with cutting-edge technology to deliver solutions that address today's challenges and tomorrow's opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-agr-brightBlue mt-0.5 flex-shrink-0" />
                  <p className="ml-3 text-gray-700">{strength}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-agr-lightBlue rounded-full mix-blend-multiply opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-agr-brightBlue/30 rounded-full mix-blend-multiply opacity-70 blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-agr-brightBlue mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-agr-dark text-white">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p>To empower our clients with innovative reinsurance solutions that provide stability and enable growth in an ever-changing risk landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
