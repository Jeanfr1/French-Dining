
import { GlareCard } from "./ui/glare-card";

export function RestaurantMenu() {
  const menuItems = [
    {
      name: "Coq au Vin",
      description: "Classic French braised chicken with red wine, mushrooms, and pearl onions",
      price: "$32",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=3270&auto=format&fit=crop"
    },
    {
      name: "Beef Wellington",
      description: "Premium beef tenderloin wrapped in mushroom duxelles and golden puff pastry",
      price: "$45",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=3269&auto=format&fit=crop"
    },
    {
      name: "Lobster Thermidor",
      description: "Succulent lobster in a rich brandy cream sauce with Gruyère",
      price: "$48",
      image: "https://images.unsplash.com/photo-1533477359335-daddb0c0a529?q=80&w=3270&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Signature Dishes</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our carefully curated menu featuring exquisite dishes prepared with the finest ingredients
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {menuItems.map((item, index) => (
            <GlareCard key={index} className="flex flex-col items-start justify-end relative group">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300" />
              <div className="relative p-6 z-10">
                <div className="bg-black bg-opacity-50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-zinc-300 mb-3">{item.description}</p>
                  <span className="text-lg font-semibold text-white">{item.price}</span>
                </div>
              </div>
            </GlareCard>
          ))}
        </div>
      </div>
    </section>
  );
}
