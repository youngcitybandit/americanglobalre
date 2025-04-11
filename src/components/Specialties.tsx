
import { Heart, Building, CircleDollarSign, Stethoscope, UserCog, Ambulance } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Healthcare Providers",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Hospitals & Health Systems",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <CircleDollarSign className="h-10 w-10" />,
      title: "Self-Funded Employers",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Stethoscope className="h-10 w-10" />,
      title: "Medical Groups",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <UserCog className="h-10 w-10" />,
      title: "Telehealth Providers",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Emergency Services",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="specialties" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Specialties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team brings deep expertise across the healthcare ecosystem, delivering tailored reinsurance solutions for today's evolving medical landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className={`p-6 bg-gradient-to-r ${specialty.color} text-white flex justify-center`}>
                {specialty.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center">{specialty.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
