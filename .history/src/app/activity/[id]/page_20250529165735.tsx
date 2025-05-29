"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import BackButton from "@/src/components/BackButton";
// 🔒 ประกาศ type ของ post เพื่อหลีกเลี่ยง any
type Post = {
  title: string;
  detail: string;
  imageUrl?: string;
  datePost?: {
    toDate: () => Date;
  };
};

export default function ActivityDetailPage() {
  const params = useParams();
  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : "";

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data() as Post); // 🧠 cast เป็น Post
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-blacksection">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4" />
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-black dark:text-white">
      <BackButton />
      <div className="mb-6 mt-6">
        <h1 className="text-3xl font-bold text-primary">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {post.datePost?.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="w-full h-[400px] relative mb-6">
        <Image
          src={post.imageUrl || "/placeholder.png"}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-สเ text-gray-700 dark:text-gray-300 leading-relaxed  break-words">
        {post.detail}
      </p>{" "}
    </div>
  );
}
