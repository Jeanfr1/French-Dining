
import { RestaurantHero } from "@/components/RestaurantHero";
import { RestaurantMenu } from "@/components/RestaurantMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantHero />
      <RestaurantMenu />
    </div>
  );
};

export default Index;
