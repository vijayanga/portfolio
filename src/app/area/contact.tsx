"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate API call
    console.log("Form submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setStatus("Message sent successfully!");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let's work together
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Feel free to reach
              out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">
                    vijayanga123@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+94 78 3530 855</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Colombo ,Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-[var(--card-bg-1)]/80 backdrop-blur-sm-custom border border-border">
            <CardHeader>
              <CardTitle className="text-foreground mt-2.5">
                Send me a message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/80 backdrop-blur-sm-custom text-foreground border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/80 backdrop-blur-sm-custom text-foreground border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/80 backdrop-blur-sm-custom text-foreground border-border"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
                {status && (
                  <p className="mt-4 text-center text-lg font-medium text-primary-light">
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
