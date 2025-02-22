import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";

const WineSelection = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
          alt="Wine cellar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Wine Selection</h1>
            <p className="text-xl text-gray-200">Curated wines from around the world</p>
          </div>
        </div>
      </div>

      {/* Sommelier's Selection */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Sommelier's Selection</CardTitle>
          <CardDescription>Our most distinguished wines, carefully chosen by our expert sommelier</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Badge className="mb-2">Featured</Badge>
              <h3 className="font-semibold">Château Margaux 2015</h3>
              <p className="text-gray-600">Bordeaux, France</p>
              <p className="text-sm text-gray-500">
                An exceptional vintage with perfect balance, showing notes of black fruit, violets, and subtle oak.
              </p>
              <p className="font-semibold mt-2">€450</p>
            </div>
            <div className="space-y-2">
              <Badge className="mb-2">Featured</Badge>
              <h3 className="font-semibold">Dom Pérignon 2012</h3>
              <p className="text-gray-600">Champagne, France</p>
              <p className="text-sm text-gray-500">
                A prestigious champagne with remarkable complexity and length.
              </p>
              <p className="font-semibold mt-2">€320</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Red Wines */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Red Wines</CardTitle>
          <CardDescription>Bold and elegant selections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Château Lafite Rothschild 2018</h3>
                <p className="text-gray-600">Pauillac, France</p>
                <p className="text-sm text-gray-500">
                  Full-bodied with exceptional depth, showing cassis and graphite notes.
                </p>
                <p className="font-semibold mt-2">€380</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Sassicaia 2019</h3>
                <p className="text-gray-600">Tuscany, Italy</p>
                <p className="text-sm text-gray-500">
                  Elegant Super Tuscan with remarkable structure and complexity.
                </p>
                <p className="font-semibold mt-2">€290</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Opus One 2019</h3>
                <p className="text-gray-600">Napa Valley, USA</p>
                <p className="text-sm text-gray-500">
                  A harmonious blend showing black fruit, spice, and subtle oak.
                </p>
                <p className="font-semibold mt-2">€320</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Vega Sicilia Único 2012</h3>
                <p className="text-gray-600">Ribera del Duero, Spain</p>
                <p className="text-sm text-gray-500">
                  Complex and powerful with exceptional aging potential.
                </p>
                <p className="font-semibold mt-2">€350</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* White Wines */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>White Wines</CardTitle>
          <CardDescription>Crisp and refreshing selections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Montrachet Grand Cru 2019</h3>
              <p className="text-gray-600">Burgundy, France</p>
              <p className="text-sm text-gray-500">
                The pinnacle of white Burgundy, showing exceptional minerality.
              </p>
              <p className="font-semibold mt-2">€420</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Château d'Yquem 2015</h3>
              <p className="text-gray-600">Sauternes, France</p>
              <p className="text-sm text-gray-500">
                The world's most famous sweet wine, perfectly balanced.
              </p>
              <p className="font-semibold mt-2">€380</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Champagne & Sparkling */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Champagne & Sparkling Wines</CardTitle>
          <CardDescription>Celebratory selections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Krug Grande Cuvée</h3>
              <p className="text-gray-600">Champagne, France</p>
              <p className="text-sm text-gray-500">
                A masterpiece of complexity and elegance.
              </p>
              <p className="font-semibold mt-2">€280</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Bollinger R.D. 2007</h3>
              <p className="text-gray-600">Champagne, France</p>
              <p className="text-sm text-gray-500">
                Recently disgorged, showing remarkable maturity.
              </p>
              <p className="font-semibold mt-2">€260</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wine Service */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Wine Service</CardTitle>
          <CardDescription>Expert guidance and perfect service</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Sommelier Consultation</h3>
              <p className="text-gray-600">Personal recommendations from our expert sommelier</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Perfect Temperature</h3>
              <p className="text-gray-600">Each wine served at its optimal temperature</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Wine Pairing</h3>
              <p className="text-gray-600">Expert pairing suggestions for your meal</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WineSelection;
