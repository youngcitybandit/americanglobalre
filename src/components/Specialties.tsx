
import { CircleDollarSign, Building, Factory, Truck, PlaneTakeoff, Heart, Users } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "Commercial Real Estate",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Manufacturing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <CircleDollarSign className="h-10 w-10" />,
      title: "Financial Services",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Transportation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <PlaneTakeoff className="h-10 w-10" />,
      title: "Aviation",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Healthcare",
      color: "from-red-500 to-pink-500",
      description: "Specialized medical stop-loss and indemnity solutions for healthcare providers and small employer groups."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Small Employer Groups",
      color: "from-indigo-500 to-purple-500",
      description: "Tailored healthcare coverage solutions designed specifically for the unique needs of small employer groups."
    }
  ];

  return (
    <section id="specialties" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Specialties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team brings deep expertise across diverse industries, with particular focus on innovative healthcare solutions for small employer groups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className={`p-6 bg-gradient-to-r ${specialty.color} text-white flex justify-center`}>
                {specialty.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center mb-2">{specialty.title}</h3>
                {specialty.description && (
                  <p className="text-gray-600 text-center">{specialty.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
