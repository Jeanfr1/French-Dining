
import { ThreeDPhotoCarousel } from "./ui/3d-carousel"

export function RestaurantMoreDishes() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Explore Our Menu
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Discover more of our culinary creations through this interactive gallery
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </section>
  )
}
