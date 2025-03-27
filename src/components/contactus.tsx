"use client";

import { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./contact-form";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import ContactForm from "@/src/components/contactform";

export default function Contactus() {
  const [open, setOpen] = useState(false);
  // const router = useRouter();
  return (
    <div
      className="flex flex-col items-center text-center mt-12 md:mt-16 px-0 md:px-0 w-full scroll-mt-25 "
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        {`Let's Stay Connected`}
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl">
        {`Stay in touch with us! We'd love to hear from you and assist you
        with any inquiries.`}
      </p>

      <div className="flex flex-col items-center justify-center w-full p-6">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-10">
          {/* Form Section */}
          <div className="w-full h-70 md:w-1/2 shadow-md rounded-xl">
            <div className="w-full h-full ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4319986231066!2d102.63702987505538!3d17.96181568360307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312466349451cc95%3A0x7b1e98b3a9ad6972!2sLao%20Youth%20Union%20-%20Cabinet%20office!5e0!3m2!1sen!2sus!4v1710757046698!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 space-y-1">
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
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4 max-w-3xl">
        By clicking the contact us button, you agree to our{" "}
        <span className="text-blue-600 underline cursor-pointer">
          terms and policy.
        </span>
      </p>
      {/* Contact Us Button */}
      {/* <Button
        onClick={() => router.push("/contact")} // Correct route path
        className="mt-6 inline-flex px-10 py-6 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-700 rounded-lg shadow-md font-bold text-lg hover:scale-105 transition-transform"
      >
        Contact Us
      </Button> */}
      <div className="flex justify-center items-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex px-10 py-6 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-700 rounded-lg shadow-md font-bold text-lg hover:scale-105 transition-transform"
            >
              Contact Us
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md w-full p-6 rounded-2xl shadow-xl bg-white">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-2xl text-center font-bold text-gray-900 mb-2">
                Get in Touch
              </DialogTitle>
              <p className="text-center text-sm text-gray-600">
                {`We'd love to hear from you! Please fill out the form below.`}
              </p>
            </DialogHeader>

            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
