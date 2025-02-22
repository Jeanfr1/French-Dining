import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { BackButton } from "@/components/ui/back-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

interface EventFormData {
  name: string;
  email: string;
  date: string;
  guests: string;
  eventType: string;
  message: string;
}

const PrivateEvents = () => {
  const form = useForm<EventFormData>({
    defaultValues: {
      name: "",
      email: "",
      date: "",
      guests: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = (data: EventFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <BackButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Private Events</h1>
        <p className="text-xl text-gray-600">Create unforgettable memories with us</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Venue Options</CardTitle>
            <CardDescription>Choose from our elegant spaces</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Private Dining Room (up to 20 guests)</li>
              <li>• Main Hall (up to 50 guests)</li>
              <li>• Garden Terrace (up to 30 guests)</li>
              <li>• Full Restaurant Buyout (up to 100 guests)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Types</CardTitle>
            <CardDescription>Perfect for any occasion</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Corporate Events</li>
              <li>• Wedding Receptions</li>
              <li>• Birthday Celebrations</li>
              <li>• Business Meetings</li>
              <li>• Holiday Parties</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Inquire About Private Events</CardTitle>
          <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
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
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Type of event" {...field} />
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
                        placeholder="Tell us more about your event"
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

export default PrivateEvents;
