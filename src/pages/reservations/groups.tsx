import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

interface GroupFormData {
  name: string;
  email: string;
  date: string;
  guests: string;
  occasion: string;
  message: string;
}

const GroupDining = () => {
  const form = useForm<GroupFormData>({
    defaultValues: {
      name: "",
      email: "",
      date: "",
      guests: "",
      occasion: "",
      message: "",
    },
  });

  const onSubmit = (data: GroupFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Group Dining</h1>
        <p className="text-xl text-gray-600">Share the joy of fine dining with your group</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Group Dining Options</CardTitle>
            <CardDescription>Tailored experiences for your group</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Semi-Private Area (8-12 guests)</li>
              <li>• Private Dining Room (up to 20 guests)</li>
              <li>• Chef's Table Experience (up to 10 guests)</li>
              <li>• Family-Style Dining Available</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Menus</CardTitle>
            <CardDescription>Curated dining experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Prix Fixe Menu Options</li>
              <li>• Wine Pairing Available</li>
              <li>• Custom Menu Creation</li>
              <li>• Dietary Accommodations</li>
              <li>• Seasonal Specialties</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Reserve for Your Group</CardTitle>
          <CardDescription>Let us help you plan the perfect group dining experience</CardDescription>
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
                      <FormLabel>Preferred Date</FormLabel>
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
                name="occasion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occasion</FormLabel>
                    <FormControl>
                      <Input placeholder="What's the occasion?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about any special requirements or preferences"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupDining;
