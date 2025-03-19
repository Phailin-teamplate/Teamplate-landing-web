import Image from "next/image";
import Nextjs from "@/public/nextjs.svg";
import Vuejs from "@/public/vuejs.png";
import Expressjs from "@/public/express.svg";
import Flask from "@/public/Flask.svg";
import Swift from "@/public/Swift.png";
import PostgreSQL from "@/public/PostgreSQL.png";
import MongoDB from "@/public/MongoDB_Logo.svg";
import AWS from "@/public/AWS.svg";
import EKS from "@/public/EKS.svg";
import Kotlin from "@/public/Kotlin.svg";
import ReactJs from "@/public/Reactjs.svg";
import NestJS from "@/public/NestJS.svg";
import Springboot from "@/public/Springboot.svg";
import Django from "@/public/django.png";
import Flutter from "@/public/flutter.svg";
import Redis from "@/public/Redis.svg";
import Firebase from "@/public/Firebase2-min.png";
import Supabase from "@/public/supabase.png";
import GCP from "@/public/GCP.svg";
import Azure from "@/public/Azure.svg";
import Kubernetes from "@/public/Kubernetes.svg";
import Docker2 from "@/public/docker-logo-blue.svg";
import TensorFlow from "@/public/tensorflow.svg";
import Pytorch from "@/public/Pytorch_logo.png";

const categories = [
  {
    title: "Front-End",
    technologies: [
      { name: "ReactJs", image: ReactJs },
      { name: "NextJS", image: Nextjs },
      { name: "VueJS", image: Vuejs },
    ],
  },
  {
    title: "Back-End",
    technologies: [
      { name: "ExpressJS", image: Expressjs },
      { name: "NestJS", image: NestJS },
      { name: "Springboot", image: Springboot },
      { name: "Flask", image: Flask },
      { name: "Django", image: Django },
    ],
  },
  {
    title: "Mobile App",
    technologies: [
      { name: "React Native", image: ReactJs },
      { name: "Flutter", image: Flutter },
      { name: "Swift", image: Swift },
      { name: "Kotlin", image: Kotlin },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "MongoDB", image: MongoDB },
      { name: "Redis", image: Redis },
    ],
  },
  {
    title: "Serverless DB",
    technologies: [
      { name: "Firebase", image: Firebase },
      { name: "Supabase", image: Supabase },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "AWS", image: AWS },
      { name: "GCP", image: GCP },
      { name: "Azure", image: Azure },
    ],
  },
  {
    title: "Infrastructure",
    technologies: [
      { name: "Docker", image: Docker2 },
      { name: "Kubernetes", image: Kubernetes },
      { name: "EKS", image: EKS },
    ],
  },
  {
    title: "AI",
    technologies: [
      { name: "TensorFlow", image: TensorFlow },
      { name: "PyTorch", image: Pytorch },
    ],
  },
];

export default function Stack() {
  return (
    <div className="flex flex-col items-center text-center mt-12 md:mt-16 px-2 md:px-0 w-full">
      <h2 className="text-4xl font-bold mb-10">
        <span className="text-gray-800">Technology</span>{" "}
        <span className="text-blue-500">Stack</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md text-black hover:scale-105 hover:bg-gray-100 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col items-center space-y-4">
              {category.technologies.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <Image
                    className="h-14 w-auto mb-2 mx-auto"
                    src={tech.image}
                    alt={tech.name}
                    width={150}
                    height={150}
                  />
                  <p className="text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
