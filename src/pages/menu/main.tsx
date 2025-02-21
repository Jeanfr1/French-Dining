
import { RestaurantNavbar } from "@/components/RestaurantNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mainCourses = [
  {
    name: "Filet Mignon",
    description: "Prime cut beef tenderloin with truffle butter and seasonal vegetables",
    price: "$45",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Pan-Seared Sea Bass",
    description: "Mediterranean sea bass with lemon herb sauce and jasmine rice",
    price: "$38",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Duck Confit",
    description: "Classic French duck confit with roasted fingerling potatoes",
    price: "$36",
    image: "https://images.unsplash.com/photo-1569097157904-12db8c74b360?q=80&w=2787&auto=format&fit=crop"
  }
];

export default function MainCourses() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantNavbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-center mb-8">Main Courses</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover our selection of exquisite main courses, each crafted with precision
          and the finest ingredients available.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCourses.map((dish) => (
            <Card key={dish.name} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-lg font-bold text-primary">{dish.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{dish.description}</p>
                <Button className="w-full">Add to Order</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
