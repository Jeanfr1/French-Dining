
import { TestimonialsSection } from "./blocks/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Sarah Miller",
      handle: "@foodie_sarah",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "The Coq au Vin was absolutely divine! The atmosphere and service were impeccable. Will definitely be coming back!",
  },
  {
    author: {
      name: "James Chen",
      handle: "@chefchen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "As a fellow chef, I was blown away by the attention to detail in every dish. The wine pairing suggestions were perfect.",
  },
  {
    author: {
      name: "Maria Garcia",
      handle: "@marialovesfoood",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The Lobster Thermidor was the best I've ever had! The ambiance made our anniversary dinner truly special."
  }
]

export function RestaurantTestimonials() {
  return (
    <TestimonialsSection
      title="What Our Guests Say"
      description="Join countless satisfied diners who have experienced our culinary excellence"
      testimonials={testimonials}
    />
  )
}
