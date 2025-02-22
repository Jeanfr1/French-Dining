
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Specials from "./pages/menu/specials";
import MainCourses from "./pages/menu/main";
import WineSelection from "./pages/menu/wine";
import Desserts from "./pages/menu/desserts";
import BookReservation from "./pages/reservations/book";
import PrivateEvents from "./pages/reservations/private";
import GroupDining from "./pages/reservations/groups";
import SpecialOccasions from "./pages/reservations/special";
import ChefProfile from "./pages/about/chef";
import PressAndAwards from "./pages/about/press";
import Contact from "./pages/about/contact";
import OurStory from "./pages/about/story";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu/specials" element={<Specials />} />
            <Route path="/menu/main" element={<MainCourses />} />
            <Route path="/menu/wine" element={<WineSelection />} />
            <Route path="/menu/desserts" element={<Desserts />} />
            <Route path="/reservations/book" element={<BookReservation />} />
            <Route path="/reservations/private" element={<PrivateEvents />} />
            <Route path="/reservations/groups" element={<GroupDining />} />
            <Route path="/reservations/special" element={<SpecialOccasions />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/chef" element={<ChefProfile />} />
            <Route path="/about/press" element={<PressAndAwards />} />
            <Route path="/about/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
