import { getDocs, collection, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

export type Post = {
  id: string;
  title: string;
  detail: string;
  imageUrl: string;
  datePost: Timestamp; // could also be Date if you want to parse
};

export async function getPosts(): Promise<Post[]> {
  const q = query(collection(db, "posts"), orderBy("datePost", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id, // optional: include Firestore doc ID
      title: data.title,
      detail: data.detail,
      imageUrl: data.imageUrl,
      datePost: data.datePost,
    };
  });
}
