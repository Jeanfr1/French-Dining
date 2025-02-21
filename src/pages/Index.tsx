
import { RestaurantHero } from "@/components/RestaurantHero";
import { RestaurantMenu } from "@/components/RestaurantMenu";
import { RestaurantNavbar } from "@/components/RestaurantNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantNavbar />
      <RestaurantHero />
      <RestaurantMenu />
    </div>
  );
};

export default Index;
