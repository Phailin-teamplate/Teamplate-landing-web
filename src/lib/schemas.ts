import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(1, { message: "Firstname is required" }),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  replyTo: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});
