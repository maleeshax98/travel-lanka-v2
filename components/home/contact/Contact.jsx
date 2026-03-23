"use client"; // Required for state and events

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner"; // Optional: Use shadcn sonner for notifications

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log(response);

      if (!response.ok) throw new Error("Failed to send");

      toast.success("Message sent! We'll get back to you soon.", {
        position: "bottom-right",
      });
      event.target.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-orange-600 tracking-tight mb-4">
              Let's Connect
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to say hi? Reach out and let's
              create something extraordinary.
            </p>
          </div>

          <div className="space-y-6">
            {/* ... Contact details remain same ... */}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7">
          <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Added onSubmit and Name attributes to inputs */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name" // Required for FormData
                      required
                      placeholder="Maleesha..."
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      placeholder="+94 7X XXX XXXX"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+94 11 XXX XXXX"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Describe your project or inquiry..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full h-12 text-md font-semibold gap-2 group bg-orange-600 hover:bg-orange-700"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
