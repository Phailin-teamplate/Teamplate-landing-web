// app/contact/page.tsx
import Contacts from "@/src/components/pages/Contacts";

export const metadata = {
  title: "Contact Us | TEAMPLATE",
  description:
    "Reach out to TEAMPLATE for inquiries, support, or partnerships. We're here to help you connect.",
  keywords: ["contact", "teamplate", "support", "email", "phone", "location"],
  openGraph: {
    title: "Contact TEAMPLATE",
    description:
      "Get in touch with TEAMPLATE via email, phone, or visit us at our IT center. We'd love to hear from you!",
    url: "https://yourdomain.com/contact", // replace with actual domain
    siteName: "TEAMPLATE",
    images: [
      {
        url: "https://yourdomain.com/images/contact-og.jpg", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Contact TEAMPLATE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return <Contacts />;
}
