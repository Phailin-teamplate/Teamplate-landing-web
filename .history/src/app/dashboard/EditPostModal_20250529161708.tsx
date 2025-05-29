"use client";

import { useEffect, useState } from "react";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/src/lib/firebase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Image from "next/image";
type EditPostModalProps = {
  postId: string;
  initialTitle: string;
  initialDetail: string;
  initialImageUrl?: string;
  onCloseAction: () => void;
  onPostUpdatedAction: () => void;
};

export default function EditPostModal({
  postId,
  initialTitle,
  initialDetail,
  initialImageUrl = "",
  onCloseAction,
  onPostUpdatedAction,
}: EditPostModalProps) {
  const [form, setForm] = useState({
    title: initialTitle,
    detail: initialDetail,
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(initialImageUrl);

  useEffect(() => {
    if (image) {
      setPreviewUrl(URL.createObjectURL(image));
    } else {
      setPreviewUrl(initialImageUrl);
    }
  }, [image, initialImageUrl]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Updating post...");

    try {
      let imageUrl = previewUrl;

      if (image) {
        const imageRef = ref(storage, `posts/${postId}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await updateDoc(doc(db, "posts", postId), {
        title: form.title,
        detail: form.detail,
        imageUrl,
        updatedAt: Timestamp.now(),
      });

      toast.success("Post updated successfully!", { id: toastId });
      onPostUpdatedAction();
      onCloseAction();
    } catch (error) {
      console.error("Post update failed:", error);
      toast.dismiss(toastId);
      toast.error("Failed to update post.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleUpdate}
        className="bg-white dark:bg-black p-8 w-full max-w-xl rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-orange-500">
          Edit Post
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
          <Label>New Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
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
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Update Post
          </Button>
        </div>
      </form>
    </div>
  );
}
