import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";

const Desserts = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587314168485-3236d6710814"
          alt="Elegant desserts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Desserts</h1>
            <p className="text-xl text-gray-200">Indulge in our exquisite sweet creations</p>
          </div>
        </div>
      </div>

      {/* Signature Desserts */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Signature Desserts</CardTitle>
          <CardDescription>Chef's special creations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Badge className="mb-2">Chef's Favorite</Badge>
              <h3 className="font-semibold">Chocolate Symphony</h3>
              <p className="text-gray-600">
                Five textures of single-origin chocolate, gold leaf, vanilla ice cream
              </p>
              <p className="text-sm text-gray-500">
                A journey through different chocolate preparations featuring premium cacao
              </p>
              <p className="font-semibold mt-2">€18</p>
            </div>
            <div className="space-y-2">
              <Badge className="mb-2">Signature</Badge>
              <h3 className="font-semibold">Soufflé Grand Marnier</h3>
              <p className="text-gray-600">
                Classic orange soufflé, crème anglaise, candied orange
              </p>
              <p className="text-sm text-gray-500">
                Please allow 20 minutes preparation time
              </p>
              <p className="font-semibold mt-2">€16</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Classic French Pastries */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Classic French Pastries</CardTitle>
          <CardDescription>Traditional favorites with our unique touch</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Millefeuille à la Vanille</h3>
              <p className="text-gray-600">
                Caramelized puff pastry, Madagascar vanilla cream, fresh berries
              </p>
              <p className="text-sm text-gray-500">
                Our take on the classic Napoleon
              </p>
              <p className="font-semibold mt-2">€14</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Tarte Tatin</h3>
              <p className="text-gray-600">
                Caramelized apples, butter puff pastry, Normandy cream
              </p>
              <p className="text-sm text-gray-500">
                Made to order, served warm
              </p>
              <p className="font-semibold mt-2">€15</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chocolate Creations */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Chocolate Creations</CardTitle>
          <CardDescription>For the chocolate connoisseur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Molten Chocolate Cake</h3>
              <p className="text-gray-600">
                Valrhona chocolate, salted caramel center, vanilla bean ice cream
              </p>
              <p className="text-sm text-gray-500">
                Please allow 15 minutes preparation time
              </p>
              <p className="font-semibold mt-2">€16</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Chocolate Trio</h3>
              <p className="text-gray-600">
                Dark chocolate mousse, white chocolate ice cream, milk chocolate crémeux
              </p>
              <p className="text-sm text-gray-500">
                A celebration of different chocolate varieties
              </p>
              <p className="font-semibold mt-2">€17</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seasonal Specialties */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Seasonal Specialties</CardTitle>
          <CardDescription>Featuring the finest seasonal ingredients</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Badge className="mb-2">Seasonal</Badge>
              <h3 className="font-semibold">Strawberry Mille-Feuille</h3>
              <p className="text-gray-600">
                Fresh strawberries, vanilla cream, crispy puff pastry
              </p>
              <p className="text-sm text-gray-500">
                Available during strawberry season
              </p>
              <p className="font-semibold mt-2">€15</p>
            </div>
            <div className="space-y-2">
              <Badge className="mb-2">Seasonal</Badge>
              <h3 className="font-semibold">Pear Belle Hélène</h3>
              <p className="text-gray-600">
                Poached Williams pears, chocolate sauce, vanilla ice cream
              </p>
              <p className="text-sm text-gray-500">
                A winter classic revisited
              </p>
              <p className="font-semibold mt-2">€14</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Dietary Options */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Special Dietary Options</CardTitle>
          <CardDescription>Delicious alternatives for all dietary preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Gluten-Free</h3>
              <p className="text-gray-600">Flourless chocolate cake with raspberry coulis</p>
              <p className="font-semibold mt-2">€14</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Vegan</h3>
              <p className="text-gray-600">Coconut panna cotta with exotic fruits</p>
              <p className="font-semibold mt-2">€13</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Sugar-Free</h3>
              <p className="text-gray-600">Almond and berry tart with natural sweeteners</p>
              <p className="font-semibold mt-2">€14</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Desserts;
