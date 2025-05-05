"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "../../lib/schemas";
import { send } from "@/src/lib/actions/send";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      phone: "",
      email: "contact@teamplate.dev",
      replyTo: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSuccess(false);
    try {
      await send(values);
      form.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full ">
      <Card className="border border-gray-200 dark:border-strokedark shadow-md">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-4 space-y-1">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs " />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="20xxxxxxxx"
                        {...field}
                        className="text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs " />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="replyTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        {...field}
                        className="text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs " />

                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="min-h-[80px] text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs " />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-base font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>

              {/* Success Message */}
              {success && (
                <p className="text-green-600 text-center text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  );
}
