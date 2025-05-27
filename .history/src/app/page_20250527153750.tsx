import Homepage from "../components/pages/Homepage";
import FeaturesSection from "../components/Features";

export const metadata = {
  title: "Homepage | Teamplate",
  description: "Welcome to Teamplate - Build with power and simplicity.",
  keywords: ["teamplate", "next.js", "homepage", "features", "modern web"],
  openGraph: {
    title: "Teamplate | Homepage",
    description: "Build your next-gen web app with Teamplate.",
    url: "https://yourdomain.com",
    siteName: "Teamplate",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teamplate Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col" id="homepage">
      <Homepage />
      <FeaturesSection />
    </div>
  );
}
