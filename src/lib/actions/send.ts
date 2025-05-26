"use server";

import { z } from "zod";
import { formSchema } from "@/src/lib/schemas";
import { Resend } from "resend";
import { EmailTemplate } from "@/src/app/contact/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Customer <contact@teamplate.dev>",
      to: [emailFormData.email],
      replyTo: emailFormData.replyTo,
      subject: `[Teamplate] Contact from ${emailFormData.firstname}`,
      react: EmailTemplate({
        firstname: emailFormData.firstname,
        phone: emailFormData.phone,
        replyTo: emailFormData.replyTo,
        message: emailFormData.message,
      }),
    });

    console.log("Resend response:", { data, error });

    if (error) {
      throw error;
    }
  } catch (e) {
    console.error("Send email failed:", e);
    throw e;
  }
};
