"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-primary hover:text-primary/80 transition cursor-pointer"
      aria-label="Go back"
    >
      <ArrowLeftCircle className="w-8 h-8" />
    </button>
  );
}
