import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";

const OurStory = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Our Story</h1>
            <p className="text-xl text-gray-200">A legacy of culinary excellence since 1995</p>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Journey</CardTitle>
          <CardDescription>The evolution of culinary excellence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-24 flex-shrink-0 text-primary font-bold">1995</div>
              <div>
                <h3 className="font-semibold mb-2">The Beginning</h3>
                <p className="text-gray-600">Founded by Chef Jean-Pierre Laurent with a vision to bring authentic French cuisine to the heart of the city.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 flex-shrink-0 text-primary font-bold">2003</div>
              <div>
                <h3 className="font-semibold mb-2">First Michelin Star</h3>
                <p className="text-gray-600">Recognized for our commitment to culinary excellence and innovative approach to classic French cuisine.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 flex-shrink-0 text-primary font-bold">2010</div>
              <div>
                <h3 className="font-semibold mb-2">Expansion</h3>
                <p className="text-gray-600">Opened our signature wine cellar and expanded the dining room to accommodate growing demand.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 flex-shrink-0 text-primary font-bold">2015</div>
              <div>
                <h3 className="font-semibold mb-2">Next Generation</h3>
                <p className="text-gray-600">Chef Michael Laurent joins his father's legacy, bringing modern techniques while honoring traditional roots.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 flex-shrink-0 text-primary font-bold">2024</div>
              <div>
                <h3 className="font-semibold mb-2">Today</h3>
                <p className="text-gray-600">Continuing to innovate and delight guests with exceptional dining experiences and sustainable practices.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission and Values */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Commitment to excellence</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              To create extraordinary dining experiences that celebrate the artistry of French cuisine while embracing innovation and sustainability.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Exceptional quality in every dish</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Sustainable and local sourcing</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Impeccable service standards</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Continuous innovation in cuisine</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>What drives us forward</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold mb-1">Excellence</h3>
                <p className="text-gray-600">Striving for perfection in every detail of the dining experience.</p>
              </li>
              <li>
                <h3 className="font-semibold mb-1">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries while respecting traditional techniques.</p>
              </li>
              <li>
                <h3 className="font-semibold mb-1">Sustainability</h3>
                <p className="text-gray-600">Committed to environmental responsibility and local sourcing.</p>
              </li>
              <li>
                <h3 className="font-semibold mb-1">Community</h3>
                <p className="text-gray-600">Building lasting relationships with our guests and suppliers.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Founders Vision */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>The Founder's Vision</CardTitle>
          <CardDescription>A legacy of passion and excellence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                alt="Chef in kitchen"
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500 italic">Chef Jean-Pierre Laurent in our kitchen, circa 1995</p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                "When I founded this restaurant, my dream was to create more than just a place to eat. I wanted to create a destination where people could experience the true essence of French cuisine, where every meal tells a story, and every visit becomes a cherished memory."
              </p>
              <p className="text-gray-600">
                "Today, as I see my son Michael carrying forward this legacy while adding his own creative vision, I know that our commitment to culinary excellence and hospitality will continue to evolve and flourish for generations to come."
              </p>
              <p className="text-right text-gray-800 font-semibold">- Chef Jean-Pierre Laurent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Restaurant Philosophy */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Philosophy</CardTitle>
          <CardDescription>The principles that guide us</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Culinary Artistry</h3>
              <p className="text-gray-600">Blending traditional techniques with modern innovation to create unique dining experiences.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Ingredient Quality</h3>
              <p className="text-gray-600">Sourcing the finest local and seasonal ingredients to ensure exceptional flavor and freshness.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Guest Experience</h3>
              <p className="text-gray-600">Creating memorable moments through attentive service and atmospheric dining.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurStory;
