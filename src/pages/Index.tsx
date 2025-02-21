
import { RestaurantHero } from "@/components/RestaurantHero";
import { RestaurantMenu } from "@/components/RestaurantMenu";
import { RestaurantMoreDishes } from "@/components/RestaurantMoreDishes";
import { RestaurantNavbar } from "@/components/RestaurantNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantNavbar />
      <RestaurantHero />
      <RestaurantMenu />
      <RestaurantMoreDishes />
    </div>
  );
};

export default Index;
