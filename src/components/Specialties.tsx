
import { Heart, Building, CircleDollarSign, Stethoscope, Scissors, Ambulance, Syringe, Leaf } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Hospital",
      color: "from-rose-200 to-rose-300"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Emergency Room",
      color: "from-blue-200 to-blue-300"
    },
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Ambulance",
      color: "from-emerald-200 to-emerald-300"
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Surgical",
      color: "from-amber-200 to-amber-300"
    },
    {
      icon: <Syringe className="h-10 w-10" />,
      title: "Anesthesia",
      color: "from-indigo-200 to-indigo-300"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Wellness",
      color: "from-orange-200 to-orange-300"
    }
  ];

  return (
    <section id="specialties" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefit Solutions for Your Workforce</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your employee benefits program with American Global's tailored supplemental coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className={`p-6 bg-gradient-to-r ${specialty.color} text-gray-700 flex justify-center`}>
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
