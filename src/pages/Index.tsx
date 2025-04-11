
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FixedLogo from "@/components/FixedLogo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FixedLogo />
      <Navbar />
      <Hero />
      <Services />
      <Specialties />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
