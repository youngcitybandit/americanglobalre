
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";

const NewsPage = () => {
  // Sample news articles
  const newsArticles = [
    {
      id: 1,
      title: "AGR Insurance Expands Coverage Options",
      date: "May 1, 2025",
      summary: "AGR Insurance announces new coverage options for small businesses, offering more flexible plans at competitive rates.",
      link: "#"
    },
    {
      id: 2,
      title: "New Partnership Announcement",
      date: "April 22, 2025",
      summary: "AGR Insurance partners with leading healthcare providers to enhance benefits packages for all employer plans.",
      link: "#"
    },
    {
      id: 3,
      title: "Digital Transformation Initiative",
      date: "April 15, 2025",
      summary: "AGR launches new digital platform to streamline claims processing and improve customer experience.",
      link: "#"
    },
    {
      id: 4,
      title: "Industry Recognition for Customer Service",
      date: "March 28, 2025",
      summary: "AGR Insurance receives top industry recognition for exceptional customer service and client satisfaction.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-4">
            <Newspaper className="h-6 w-6 text-agr-brightBlue mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AGR Insurance News</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay up-to-date with the latest announcements, industry insights, and company updates.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">{article.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{article.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{article.summary}</p>
              </CardContent>
              <CardFooter>
                <Link to={article.link} className="text-agr-brightBlue hover:text-agr-blue text-sm font-medium">
                  Read more →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="text-agr-brightBlue border-agr-brightBlue hover:bg-agr-brightBlue hover:text-white">
            Load More News
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
