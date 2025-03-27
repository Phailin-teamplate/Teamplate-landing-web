"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react"; // If not already imported
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  description: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const handleClose = () => {
    window.history.back(); // Navigate back to the previous page
  };
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setSubmittedData(data);
    console.log("Form Submitted:", data);
  };

  return (
    <div className="max-w-lg w-90 md:w-full mx-auto bg-white shadow-xl rounded-2xl p-5 md:p-8 mt-10 mb-10 border border-gray-300 relative">
    <button
      className="focus:outline-none absolute md:top-5 md:right-5 right-5"
      onClick={handleClose}
    >
      <X size={28} />
    </button>
    <h2 className="md:text-3xl text-2xl font-extrabold text-gray-900 text-center mb-6">
      Get in Touch
    </h2>
    <p className="text-gray-600 text-center mb-6">
      We’d love to hear from you! Fill out the form below.
    </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-800 font-semibold mb-2">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Phone
          </label>
          <input
            type="text"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="20xxxxxxxx"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Message
          </label>
          <textarea
            {...register("description", { required: "Message is required" })}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-6 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Send Message
        </Button>
      </form>

      {submittedData && (
        <div className="mt-8 p-3 border-t border-gray-300 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Submitted Data
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mt-3">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
