import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";

const ChefProfile = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Chef</h1>
        <p className="text-xl text-gray-600">Culinary excellence and innovation</p>
      </div>

      <BackButton />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
            alt="Chef Michael Laurent"
            className="w-full h-full object-cover"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Chef Michael Laurent</CardTitle>
            <CardDescription>Executive Chef & Culinary Director</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg">
            <p className="mb-4">
              With over 20 years of culinary experience in Michelin-starred restaurants across France and the United States,
              Chef Michael Laurent brings his passion for innovative cuisine to our restaurant.
            </p>
            <p className="mb-4">
              Trained at the renowned Le Cordon Bleu in Paris, Chef Laurent has developed a unique culinary style that
              blends classical French techniques with modern innovation and local ingredients.
            </p>
            <p>
              His philosophy centers on respecting ingredients, sustainable sourcing, and creating unforgettable dining
              experiences that engage all the senses.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Culinary Philosophy</CardTitle>
            <CardDescription>Our approach to fine dining</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Sourcing the finest local and seasonal ingredients</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Combining traditional techniques with modern innovation</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Creating memorable dining experiences through presentation and flavor</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Supporting sustainable and ethical food practices</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements & Recognition</CardTitle>
            <CardDescription>Culinary excellence acknowledged</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>James Beard Award Nominee 2023</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Michelin Star recipient at previous restaurant</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Featured in Food & Wine Magazine</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Winner of International Culinary Competition 2022</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Signature Dishes</CardTitle>
          <CardDescription>Chef Laurent's most celebrated creations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Lobster Thermidor Moderne</h3>
              <p className="text-gray-600">A contemporary take on the classic French dish, featuring local lobster and seasonal truffle</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Duck à l'Orange Revisited</h3>
              <p className="text-gray-600">Perfectly aged duck with citrus variations and modern plating techniques</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Chocolate Symphony</h3>
              <p className="text-gray-600">A decadent dessert featuring five different preparations of single-origin chocolate</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Seasonal Vegetable Tasting</h3>
              <p className="text-gray-600">Celebrating local produce through various cooking techniques and presentations</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChefProfile;
