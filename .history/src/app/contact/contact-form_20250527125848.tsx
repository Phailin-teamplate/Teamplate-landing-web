"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "../../lib/schemas";
import { send } from "@/src/lib/actions/send";

import { Button } from "@/components/ui/button";
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 space-y-4 "
        >
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className="dark:bg-blacksection dark:border-strokedark  text-sm rounded-md px-4 py-2 placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
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
                    className="text-sm rounded-md px-4 py-2 placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
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
                <FormLabel className="text-sm">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="youremail@example.com"
                    {...field}
                    className="text-sm rounded-md px-4 py-2 placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
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
                    className="min-h-[120px] text-sm rounded-md px-4 py-2 placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow "
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs " />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center md:py-0 py-10ƒ">
            {/* Submit Button */}
            <Button
              size="lg"
              type="submit"
              disabled={loading}
              className="w-full text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center text-sm mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
