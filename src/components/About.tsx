import { CheckCircle } from 'lucide-react';

const About = () => {
  const strengths = [
    "Specialized reinsurance expertise",
    "Comprehensive healthcare coverage solutions",
    "Rapid claims resolution for healthcare providers",
    "Advanced healthcare analytics and risk assessment",
    "Ambulance and emergency services coverage"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About American Global Reinsurance</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded on the principles of innovation, expertise, and exceptional service, AGRe specializes in healthcare reinsurance including indemnity insurance and coverage for disease management plans. We combine deep healthcare industry knowledge with cutting-edge technology to deliver solutions that address today's medical challenges and tomorrow's healthcare opportunities.
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
              <div className="p-8 bg-agr-dark text-white">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p>To empower healthcare providers and payers with innovative reinsurance solutions that provide stability and enable growth in an ever-changing medical risk landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
