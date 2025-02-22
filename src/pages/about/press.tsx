import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";

const PressAndAwards = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Press & Awards</h1>
        <p className="text-xl text-gray-600">Recognition for culinary excellence</p>
      </div>

      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Recent Awards</CardTitle>
            <CardDescription>Our commitment to excellence recognized</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Michelin Star 2024</h3>
                  <p className="text-gray-600">Awarded for exceptional cuisine and dining experience</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Best Fine Dining Restaurant 2023</h3>
                  <p className="text-gray-600">City Culinary Awards</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Wine Spectator Award of Excellence</h3>
                  <p className="text-gray-600">For our outstanding wine program</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Best Service Award 2023</h3>
                  <p className="text-gray-600">Restaurant Guild Excellence Awards</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Sustainable Dining Award</h3>
                  <p className="text-gray-600">Green Restaurant Association</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Top 50 Restaurants</h3>
                  <p className="text-gray-600">National Restaurant Guide 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Press Coverage</CardTitle>
            <CardDescription>Featured in leading publications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">"A New Height in Fine Dining"</h3>
                <p className="text-gray-600 mb-2">The New York Times</p>
                <p className="italic">"An extraordinary dining experience that sets new standards in culinary excellence..."</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">"Innovation Meets Tradition"</h3>
                <p className="text-gray-600 mb-2">Food & Wine Magazine</p>
                <p className="italic">"Chef Laurent's creative vision brings a fresh perspective to classical French cuisine..."</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">"The Future of Fine Dining"</h3>
                <p className="text-gray-600 mb-2">Gourmet Quarterly</p>
                <p className="italic">"A masterclass in contemporary gastronomy while honoring traditional techniques..."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media Features</CardTitle>
            <CardDescription>Television and digital appearances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Chef's Table</h3>
                <p className="text-gray-600 mb-2">Netflix Documentary Series</p>
                <p>Featured in Season 8, Episode 3</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Morning Show Cooking Segment</h3>
                <p className="text-gray-600 mb-2">Good Morning America</p>
                <p>Demonstrating signature dishes and techniques</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Culinary Masterclass</h3>
                <p className="text-gray-600 mb-2">Online Learning Platform</p>
                <p>10-part series on modern French cuisine</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Critical Acclaim</CardTitle>
          <CardDescription>What the critics are saying</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">★★★★★</p>
              <p className="italic mb-2">"Exceptional in every way"</p>
              <p className="text-sm text-gray-600">- City Food Guide</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">9.5/10</p>
              <p className="italic mb-2">"A culinary masterpiece"</p>
              <p className="text-sm text-gray-600">- Dining Excellence</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">★★★★½</p>
              <p className="italic mb-2">"Simply outstanding"</p>
              <p className="text-sm text-gray-600">- Restaurant Weekly</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PressAndAwards;
