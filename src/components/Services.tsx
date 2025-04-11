
import { Shield, BarChart3, Globe, Zap, Heart, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-agr-brightBlue" />,
      title: "Property & Casualty",
      description: "Custom coverage solutions for property and casualty risks, with innovative approaches to traditional and emerging exposures."
    },
    {
      icon: <Heart className="h-12 w-12 text-agr-brightBlue" />,
      title: "Medical Stop-Loss",
      description: "Innovative medical stop-loss solutions designed specifically for small employer groups, providing financial protection against catastrophic claims."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-agr-brightBlue" />,
      title: "Indemnity Insurance",
      description: "Specialized indemnity insurance products tailored to the unique needs of small employer groups, ensuring comprehensive coverage at competitive rates."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-agr-brightBlue" />,
      title: "Advanced Analytics",
      description: "Data-driven insights to optimize your reinsurance strategy, leveraging cutting-edge predictive modeling and risk assessment tools."
    },
    {
      icon: <Globe className="h-12 w-12 text-agr-brightBlue" />,
      title: "Global Solutions",
      description: "Worldwide coverage capabilities with local expertise, ensuring compliant and effective risk transfer across borders."
    },
    {
      icon: <Zap className="h-12 w-12 text-agr-brightBlue" />,
      title: "Catastrophe Protection",
      description: "Robust catastrophe coverage programs designed to withstand extreme events, backed by sophisticated modeling and strong capacity."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging innovation and expertise to deliver exceptional reinsurance solutions tailored to your unique needs, with specialized focus on small employer groups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
