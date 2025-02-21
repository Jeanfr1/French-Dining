
import { RestaurantNavbar } from "@/components/RestaurantNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const specialDishes = [
  {
    name: "Lobster Thermidor",
    description: "Fresh lobster in a rich, creamy cognac sauce, gratinated to perfection",
    price: "$48",
    image: "https://images.unsplash.com/photo-1535007726204-6bac0d5d6926?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Wagyu Beef Tartare",
    description: "Hand-cut wagyu beef with traditional accompaniments and house-made crostini",
    price: "$36",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2789&auto=format&fit=crop"
  },
  {
    name: "Truffle Risotto",
    description: "Carnaroli rice with black truffle, aged parmesan, and wild mushrooms",
    price: "$42",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e1c8?q=80&w=2787&auto=format&fit=crop"
  }
];

export default function Specials() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantNavbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-center mb-8">Chef's Specials</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience our chef's carefully curated selection of seasonal dishes,
          featuring the finest ingredients and innovative culinary techniques.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialDishes.map((dish) => (
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
