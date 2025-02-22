import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

interface SpecialOccasionFormData {
  name: string;
  email: string;
  date: string;
  guests: string;
  occasionType: string;
  specialRequests: string;
}

const SpecialOccasions = () => {
  const form = useForm<SpecialOccasionFormData>({
    defaultValues: {
      name: "",
      email: "",
      date: "",
      guests: "",
      occasionType: "",
      specialRequests: "",
    },
  });

  const onSubmit = (data: SpecialOccasionFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Special Occasions</h1>
        <p className="text-xl text-gray-600">Make your celebration extraordinary</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Celebration Packages</CardTitle>
            <CardDescription>Curated experiences for your special day</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Birthday Celebration Package</li>
              <li>• Anniversary Dinner Experience</li>
              <li>• Engagement Celebration</li>
              <li>• Graduation Dinner Package</li>
              <li>• Custom Celebration Options</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Touches</CardTitle>
            <CardDescription>Extra details to make it memorable</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Customized Menu Cards</li>
              <li>• Champagne Toast</li>
              <li>• Celebration Cake Service</li>
              <li>• Floral Arrangements</li>
              <li>• Photography Service</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Plan Your Celebration</CardTitle>
          <CardDescription>Let us help make your special occasion unforgettable</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Guests</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Expected guests" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="occasionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Occasion</FormLabel>
                    <FormControl>
                      <Input placeholder="Birthday, Anniversary, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can make your celebration special"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpecialOccasions;
