"use client";

import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import PageHero from "@/src/components/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";

const Contacts = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      text: "contact@teamplate.dev",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@teamplate.dev",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      text: "+85620 98270483",
      href: "https://wa.me/8562098270483",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      text: "IT Center, Lao Youth Union",
      href: "https://maps.app.goo.gl/fUchwK2bPa4R6YCCA",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
      />

      <section className="md:py-20 py-10 bg-gray-50 dark:bg-blacksection overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Send us a message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                        {info.icon}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-lg text-gray-700">
                          {info.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Location
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4754.078853087876!2d102.6394588!3d17.9621626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312467de482549c9%3A0xa92ab985cf1695bf!2sNoumsao%20Innovative%20Technology!5e1!3m2!1sen!2sus!4v1747039267763!5m2!1sen!2sus"
                    className="w-full h-64 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
