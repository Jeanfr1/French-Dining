
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function RestaurantNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Chef's Specials"
              href="/menu/specials"
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=3270&auto=format&fit=crop"
              description="Discover our chef's carefully curated seasonal dishes"
            />
            <ProductItem
              title="Main Course"
              href="/menu/main"
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=3269&auto=format&fit=crop"
              description="Exquisite main courses featuring the finest ingredients"
            />
            <ProductItem
              title="Wine Selection"
              href="/menu/wine"
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=3270&auto=format&fit=crop"
              description="Fine wines from our extensive cellar collection"
            />
            <ProductItem
              title="Desserts"
              href="/menu/desserts"
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=3270&auto=format&fit=crop"
              description="Indulgent desserts to complete your dining experience"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Reservations">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/reservations/book">Book a Table</HoveredLink>
            <HoveredLink to="/reservations/private">Private Events</HoveredLink>
            <HoveredLink to="/reservations/groups">Group Dining</HoveredLink>
            <HoveredLink to="/reservations/special">Special Occasions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/about/story">Our Story</HoveredLink>
            <HoveredLink to="/about/chef">Meet the Chef</HoveredLink>
            <HoveredLink to="/about/press">Press & Awards</HoveredLink>
            <HoveredLink to="/about/contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
