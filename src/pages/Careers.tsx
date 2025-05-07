
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, AlertCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <BriefcaseIcon className="h-6 w-6 text-agr-brightBlue mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Careers at AGRe</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Join our team of insurance professionals who are passionate about transforming the industry.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Card className="overflow-hidden transition-all duration-200 shadow-sm max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircleIcon className="h-12 w-12 text-agr-brightBlue" />
            </div>
            <h2 className="text-2xl font-bold mb-4">No Positions Currently Available</h2>
            <p className="text-gray-700 mb-6">
              We don't have any open positions at the moment, but we're always interested in connecting with talented individuals who are passionate about the insurance industry.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="text-agr-brightBlue border-agr-brightBlue hover:bg-agr-brightBlue hover:text-white">
                Submit General Application
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
          <p className="text-gray-700 mb-6">
            At AGRe, we're committed to fostering an inclusive workplace where innovative thinking is rewarded and professional growth is encouraged. We offer competitive benefits, flexible work arrangements, and the opportunity to make a real impact in the reinsurance industry.
          </p>
          <p className="text-gray-700">
            Keep an eye on this page for future opportunities or send us your resume and we'll keep you in mind when new positions open up.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CareersPage;
