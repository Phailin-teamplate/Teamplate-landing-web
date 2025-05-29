import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/src/components/BackButton";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return notFound();

  const post = docSnap.data();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-black dark:text-white">
      <BackButton />
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <Image
        src={post.imageUrl}
        alt={post.title}
        fill
        className="rounded-lg object-cover"
      />
      <p>{post.detail}</p>
    </div>
  );
}
