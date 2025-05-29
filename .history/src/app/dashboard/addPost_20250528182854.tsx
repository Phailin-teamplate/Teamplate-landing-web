"use client";

import { useState } from "react";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/src/lib/firebase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

type AddPostModalProps = {
 onCloseAction: () => void;
  onPostAddedAction: () => void;
};

export default function AddPostModal({ onCloseAction, onPostAddedAction }: AddPostModalProps) {
  const [form, setForm] = useState({
    title: "",
    detail: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleAdd = async (e: React.FormEvent) => {
  e.preventDefault();
  const toastId = toast.loading("Creating post...");

  try {
    const postId = uuidv4(); // Unique ID for the new post
    console.log("Post ID:", postId);
    let imageUrl = "";

    if (image) {
      const imageRef = ref(storage, `posts/${postId}`);
      console.log("Uploading image...");
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
      console.log("Image uploaded. URL:", imageUrl);
    }

    const postData = {
      title: form.title,
      detail: form.detail,
      datePost: Timestamp.now(),
      imageUrl,
    };

    console.log("Writing to Firestore:", postData);

    await setDoc(doc(db, "posts", postId), postData);

    console.log("Document written to Firestore");

    toast.success("Post created successfully!", { id: toastId });
    setForm({ title: "", detail: "" });
    setImage(null);
    onPostAddedAction();
    onCloseAction();
  } catch (error) {
    console.error("Post creation failed:", error);
    toast.dismiss(toastId);
    toast.error("Failed to create post.");
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleAdd}
        className="bg-white dark:bg-black p-8 w-full max-w-xl rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-orange-500">
          Add New Post
        </h2>

        <div className="mt-4">
          <Label>Title</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="mt-4">
          <Label>Detail</Label>
          <textarea
            value={form.detail}
            onChange={(e) => setForm({ ...form, detail: e.target.value })}
            required
            rows={4}
            className="w-full p-2 mt-1 rounded-md border dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="mt-4">
          <Label>Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </div>

        {image && (
          <Image
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg mt-4 mx-auto"
          />
        )}

        <div className="mt-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onCloseAction}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Add Post
          </Button>
        </div>
      </form>
    </div>
  );
}
