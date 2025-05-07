
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CareersPage = () => {
  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Underwriting Analyst",
      location: "New York, NY",
      type: "Full-time",
      department: "Risk Management",
      description: "Join our underwriting team to evaluate insurance risks and make data-driven decisions that impact our business strategy."
    },
    {
      id: 2,
      title: "Claims Specialist",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Claims",
      description: "Help our clients navigate the claims process with expertise and compassion while ensuring compliance with all regulations."
    },
    {
      id: 3,
      title: "Actuarial Associate",
      location: "Remote",
      type: "Full-time",
      department: "Finance",
      description: "Apply your analytical skills to develop pricing models and assess financial implications of insurance policies."
    },
    {
      id: 4,
      title: "Client Success Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Customer Success",
      description: "Build and maintain relationships with our broker partners and ensure they have everything they need to succeed."
    }
  ];

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
        <div className="grid gap-8 md:grid-cols-2">
          {jobListings.map((job) => (
            <Card key={job.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{job.location} • {job.type}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {job.department}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{job.description}</p>
                <Button className="mt-4 bg-agr-brightBlue hover:bg-agr-blue">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see a role that fits?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="outline" className="text-agr-brightBlue border-agr-brightBlue hover:bg-agr-brightBlue hover:text-white">
            Submit General Application
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CareersPage;
