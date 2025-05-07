
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const BlogPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Health Insurance Options for Small Businesses",
      date: "May 5, 2025",
      author: "Jane Smith",
      summary: "A comprehensive guide to help small business owners navigate the complex world of health insurance options and benefits for their employees.",
      link: "#"
    },
    {
      id: 2,
      title: "The Future of Insurance Technology",
      date: "April 28, 2025",
      author: "Michael Johnson",
      summary: "Exploring how AI, blockchain, and digital platforms are transforming the insurance industry and improving customer experiences.",
      link: "#"
    },
    {
      id: 3,
      title: "Key Considerations When Choosing Employee Benefits",
      date: "April 18, 2025",
      author: "Sarah Williams",
      summary: "What employers should consider when selecting benefits packages that attract and retain talent while managing costs effectively.",
      link: "#"
    },
    {
      id: 4,
      title: "Navigating Insurance Compliance in 2025",
      date: "April 10, 2025",
      author: "Robert Chen",
      summary: "A breakdown of the latest regulatory changes affecting insurance providers and what businesses need to know to stay compliant.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar is included via layout */}
      
      <div className="pt-24 pb-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <Book className="h-6 w-6 text-agr-brightBlue mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AGR Insurance Blog</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert insights, industry trends, and practical advice for employers and brokers.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {post.date} • By {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Link to={post.link} className="text-agr-brightBlue hover:text-agr-blue text-sm font-medium">
                  Read full article →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="text-agr-brightBlue border-agr-brightBlue hover:bg-agr-brightBlue hover:text-white">
            View More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
