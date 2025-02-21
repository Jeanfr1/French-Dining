
import { useState } from "react";
import { RestaurantNavbar } from "@/components/RestaurantNavbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function BookReservation() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Confirmed!",
      description: "We look forward to serving you. You'll receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <RestaurantNavbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Make a Reservation</h1>
          <p className="text-center text-muted-foreground mb-12">
            Join us for an unforgettable dining experience. Reserve your table now.
          </p>
          
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>
                  Please fill in your details to reserve a table.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="font-medium">Select Date</div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="font-medium">Time</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                            <SelectItem value="18:30">6:30 PM</SelectItem>
                            <SelectItem value="19:00">7:00 PM</SelectItem>
                            <SelectItem value="19:30">7:30 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
                            <SelectItem value="20:30">8:30 PM</SelectItem>
                            <SelectItem value="21:00">9:00 PM</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="font-medium">Party Size</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-medium">Name</label>
                      <Input className="mt-2" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="font-medium">Phone</label>
                      <Input className="mt-2" type="tel" placeholder="Your phone number" required />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <Input className="mt-2" type="email" placeholder="Your email address" required />
                  </div>
                  <div>
                    <label className="font-medium">Special Requests</label>
                    <Input className="mt-2" placeholder="Any dietary restrictions or special occasions?" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Confirm Reservation
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
