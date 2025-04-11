
import { Heart, Building, CircleDollarSign, Stethoscope, Scissors, Ambulance, Syringe, Leaf } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Hospital",
      color: "from-agr-brightBlue to-agr-accent"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Emergency Room",
      color: "from-agr-brightBlue to-agr-accent"
    },
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Ambulance",
      color: "from-agr-brightBlue to-agr-accent"
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Surgical",
      color: "from-agr-brightBlue to-agr-accent"
    },
    {
      icon: <Syringe className="h-10 w-10" />,
      title: "Anesthesia",
      color: "from-agr-brightBlue to-agr-accent"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Wellness",
      color: "from-agr-brightBlue to-agr-accent"
    }
  ];

  return (
    <section id="specialties" className="section-padding bg-agr-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Benefit Solutions for Your Workforce</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Enhance your employee benefits program with American Global's tailored supplemental coverage.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Enhance your existing benefits program with American Global's employee cash benefits coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-md overflow-hidden card-hover">
              <div className={`p-6 bg-gradient-to-r ${specialty.color} flex justify-center`}>
                <div className="text-white">
                  {specialty.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center text-white">{specialty.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
