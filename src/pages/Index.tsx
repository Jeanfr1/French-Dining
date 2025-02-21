
import { RestaurantHero } from "@/components/RestaurantHero";
import { RestaurantMenu } from "@/components/RestaurantMenu";
import { RestaurantMoreDishes } from "@/components/RestaurantMoreDishes";
import { RestaurantNavbar } from "@/components/RestaurantNavbar";
import { RestaurantTestimonials } from "@/components/RestaurantTestimonials";
import { RestaurantFooter } from "@/components/RestaurantFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantNavbar />
      <RestaurantHero />
      <RestaurantMenu />
      <RestaurantMoreDishes />
      <RestaurantTestimonials />
      <RestaurantFooter />
    </div>
  );
};

export default Index;
