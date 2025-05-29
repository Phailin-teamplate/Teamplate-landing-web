import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/src/components/BackButton";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return notFound();

  const post = docSnap.data();

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
          src={post.imageUrl}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300">{post.detail}</p>
    </div>
  );
}
