"use client";

import { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "../Contacts/contact-form";
const Contacts = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col items-center text-center px-4 sm:px-6 py-10 md:py-16 lg:py-20 w-full md:scroll-mt-20 scroll-mt-20"
      id="contact"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
        {`Let's Stay Connected`}
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl dark:text-white">
        {`Stay in touch with us! We'd love to hear from you and assist you with any inquiries.`}
      </p>
      {/* Content Layout */}
      <div className="flex flex-col items-center justify-center w-full p-6">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-10">
          {/* Map */}
          <motion.div
            className="w-full h-70 md:w-1/2 lg:w-1/2 shadow-md rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4319986231066!2d102.63702987505538!3d17.96181568360307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312466349451cc95%3A0x7b1e98b3a9ad6972!2sLao%20Youth%20Union%20-%20Cabinet%20office!5e0!3m2!1sen!2sus!4v1710757046698!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            className="w-full md:w-1/2 space-y-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Contact Info Section */}
          <div className="w-full  space-y-1">
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl mt-1" />
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="font-semibold text-lg">Location</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm">IT Center, Lao Youth Union</p>

                  {/* Navigate Button */}
                  <a
                    href="https://maps.app.goo.gl/SXU2vX1mmW5pdTGX9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <HiOutlineExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="font-semibold text-lg">Email</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm">contact@teamplate.dev</p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@teamplate.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <HiOutlineExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center gap-4">
              <FaPhone className="text-2xl" />
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm">+85620 98270483</p>
                  <a
                    href={`https://wa.me/8562098270483`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-sm text-gray-500 mt-6 max-w-2xl px-4">
        By clicking the contact us button, you agree to our{" "}
        <span className="text-blue-600 underline cursor-pointer">
          terms and policy
        </span>.
      </p>

   {/* Contact Us Button with Dialog */}
<div className="mt-8 flex justify-center px-4 sm:px-0">
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-6 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-700 rounded-lg shadow-md font-bold text-base sm:text-lg hover:scale-105 transition-transform"
      >
        Contact Us
      </Button>
    </DialogTrigger>

    <DialogContent className="z-[9999] w-full sm:max-w-md p-4 sm:p-6 rounded-2xl shadow-xl bg-white dark:bg-black">
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-gray-900 dark:text-white mb-2">
          Get in Touch
        </DialogTitle>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
          {`We'd love to hear from you! Please fill out the form below.`}
        </p>
      </DialogHeader>

      <ContactForm />
    </DialogContent>
  </Dialog>
</div>

    </div>
  );
};

export default Contacts;
