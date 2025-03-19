import Image from "next/image";
import Contactus from "@/src/components/contactus";
import Stack from "../components/stack";
import Icon1 from "@/public/icon_1.svg";
import Icon2 from "@/public/business_icon.svg";
import Icon3 from "@/public/icon_3.svg";
import Icon4 from "@/public/icon_4.svg";
import Icon5 from "@/public/icon_5.svg";
import Icon6 from "@/public/icon_6.svg";
import StartUp from "@/public/Start.gif";
import ITcs from "@/public/Animated IT.gif";
import ITService from "@/public/Animated IT Service.gif";

const features = [
  {
    title: "Outsourcing Development",
    description:
      "We develop and deliver websites, mobile apps, and more tailored to our customers’ requests..",
    icon: <Image src={Icon1} alt="Outsourcing" className="w-8 h-8" />,
  },
  {
    title: "IT Business Consulting",
    description: "We provide IT business consulting for companies.",
    icon: <Image src={Icon2} alt="IT Business Icon" className="w-8 h-8" />,
  },
  {
    title: "IT Service Development and Operation",
    description:
      "We develop and operate various IT services tailored for the local market in Laos.",
    icon: <Image src={Icon3} alt="IT Service" className="w-8 h-8" />,
  },
  {
    title: "IT Education",
    description:
      "We provide training in skills such as computer programming and graphic design for students.",
    icon: <Image src={Icon4} alt="IT Education" className="w-8 h-8" />,
  },
  {
    title: "AI Data Collection and Refinement",
    description:
      "We collect, refine, and provide various types of data for AI training.",
    icon: <Image src={Icon5} alt="AI Data" className="w-8 h-8" />,
  },
  {
    title: "IT Startup Support",
    description:
      "We support and provide mentoring for local IT startups in Laos.",
    icon: <Image src={Icon6} alt="AI Data" className="w-8 h-8" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center ">
        <div className="relative w-full h-[500px] xs:h-[600px] md:h-[650px] lg:h-[700px] bg-gradient-to-b from-blue-400 to-blue-700">
          <div className="absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center">
            <div className="text-xs xs:text-3xl md:text-2xl mb-2 xs:mb-12 md:mb-2">
              <span className="text-white">
                From IT outsourcing development to IT business consulting
              </span>
            </div>
            <div className="text-white text-6xl sm:text-6xl md:text-9xl font-bold ">
              TEAMPLATE
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 ">
        <section
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:scroll-mt-30 scroll-mt-23" // Added scroll margin
          id="about"
        >
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6">
              IT Specialized Company Based in Laos
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              We are a Laos-based IT startup aiming for the global market.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
              We are targeting not only the local market in Laos but also
              neighboring Southeast Asian countries and the Northeast Asian
              market, including South Korea.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <Image src={StartUp} alt="StartUp" fill className="object-cover" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-16 px-6 md:px-12">
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6">
              Anything related to IT that our customers need and desire.
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              We can provide anything related to IT for our customers.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
              We provide comprehensive outsourcing development services in the
              IT sector as well as consulting on IT business.
            </p>
          </div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 md:order-first">
            <Image src={ITcs} alt="ITcs" fill className="object-cover" />
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-16">
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl text-blue-700 mb-2 font-semibold">
              Bringing various IT services to Lao society
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              We are also developing and operating our own IT services.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
              We develop and implement IT services utilizing various
              technologies and operate them within Lao society.
            </p>
          </div>
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <Image
              src={ITService}
              alt="ImaITServicege3"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section
          id="services"
          className="text-center mt-16 md:scroll-mt-40 scroll-mt-25"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold">
            What kind of business do we do?
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            We operate a highly diverse and extensive range of businesses in the
            IT sector.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 bg-white rounded-2xl shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-200"
            >
              <div className="p-4 bg-blue-100 rounded-xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </section>
        <div className="flex justify-center mt-12">
          <Stack />
        </div>
        <div className="flex justify-center mt-8">
          <Contactus />
        </div>
      </div>
    </div>
  );
}
