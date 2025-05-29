"use client";

import { useEffect, useState } from "react";
import { db, storage } from "@/src/lib/firebase";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import { getPosts, Post } from "@/src/lib/getPost";
import AddPost from "./addPost";
import EditPostModal from "./EditPostModal";
import { Pencil, Trash2 } from "lucide-react";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      toast.error("Failed to load posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
 const handleDeletePost = async (postId: string, imageUrl: string) => {
  const confirmed = confirm("Are you sure you want to delete this post?");
  if (!confirmed) return;

  toast.promise(
    (async () => {
      await deleteDoc(doc(db, "posts", postId));
      if (imageUrl) {
        const filePath = `posts/${postId}`;
        const imageRef = ref(storage, filePath);
        await deleteObject(imageRef);
      }
      fetchPosts();
    })(),
    {
      loading: "Deleting post...",
      success: "Post deleted successfully!",
      error: "Failed to delete post.",
    }
  );
};


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black dark:text-white">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-3 text-primary">
            Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We’re on a mission to simplify digital experiences for everyone —
            startups, creators, and enterprises alike.
          </p>

          {/* Add New Post Button */}
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => setShowAddModal(true)}
              className="bg-green-500 text-white hover:bg-green-600 transition px-6 py-2 text-sm font-medium rounded-lg"
            >
              Add New Post
            </Button>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition rounded-2xl overflow-hidden group"
            >
              {/* 🗑️ Delete Icon */}
              <button
                onClick={() => handleDeletePost(post.id, post.imageUrl)}
                className="absolute top-3 flex left-3 text-red-500 hover:text-red-700 z-10 bg-white w-8 h-8 items-center justify-center rounded-full hover:bg-gray-50 cursor-pointer"
                aria-label="Delete Post"
              >
                <Trash2 className="w-5 h-5 " />
              </button>

              {/* ✏️ Edit Icon */}
              <button
                onClick={() => {
                  setSelectedPost(post);
                  setShowEditModal(true);
                }}
                className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 z-10 flex bg-white items-center justify-center rounded-full w-8 h-8 hover:bg-gray-50 cursor-pointer"
                aria-label="Edit Post"
              >
                <Pencil className="w-5 h-5" />
              </button>

              {/* Post Image */}
              <div className="w-full h-[300px] relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              {/* Post Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.detail}
                </p>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {post.datePost.toDate().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Post Modal */}
      {showAddModal && (
        <AddPost
          onCloseAction={() => setShowAddModal(false)}
          onPostAddedAction={fetchPosts}
        />
      )}

      {/* Edit Post Modal */}
      {showEditModal && selectedPost && (
        <EditPostModal
          postId={selectedPost.id}
          initialTitle={selectedPost.title}
          initialDetail={selectedPost.detail}
          initialImageUrl={selectedPost.imageUrl}
          onCloseAction={() => {
            setShowEditModal(false);
            setSelectedPost(null);
          }}
          onPostUpdatedAction={fetchPosts}
        />
      )}
    </div>
  );
}
