"use client";

import { useState, useEffect } from "react";
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

export default function AddPostModal({
  onCloseAction,
  onPostAddedAction,
}: AddPostModalProps) {
  const [form, setForm] = useState({
    title: "",
    detail: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Creating post...");

    try {
      const postId = uuidv4();
      let imageUrl = "";

      if (image) {
        const imageRef = ref(storage, `posts/${postId}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const postData = {
        title: form.title,
        detail: form.detail,
        datePost: Timestamp.now(),
        imageUrl,
      };

      await setDoc(doc(db, "posts", postId), postData);

      toast.success("Post created successfully!", { id: toastId });
      setForm({ title: "", detail: "" });
      setImage(null);
      setPreviewUrl(null);
      onPostAddedAction();
      onCloseAction();
    } catch (error) {
      console.error("Post creation failed:", error);
      toast.dismiss(toastId);
      toast.error("Failed to create post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleAdd}
        className="bg-white dark:bg-black p-8 w-full max-w-xl rounded-xl shadow-lg "
      >
        <h2 className="text-xl font-bold mb-6 text-center text-orange-500">
          Add New Post
        </h2>

        <div className="mb-4">
          <Label>Title</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <Label>Detail</Label>
          <textarea
            value={form.detail}
            onChange={(e) => setForm({ ...form, detail: e.target.value })}
            required
            rows={4}
            className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <Label>Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
          />
        </div>

        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview"
            width={128}
            height={128}
            className="object-cover rounded-lg mt-4 mx-auto"
          />
        )}

        <div className="mt-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onCloseAction}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Adding..." : "Add Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
