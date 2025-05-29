"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getPosts, Post } from "@/src/lib/getPost";
import PageHero from "@/src/components/PageHero";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

type ActivityProps = {
  showHero?: boolean;
  showIntro?: boolean;
  limit?: number;
  showMoreButton?: boolean;
};

export default function Activity({
  showHero = true,
  showIntro = false,
  limit,
  showMoreButton = false,
}: ActivityProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(limit ? data.slice(0, limit) : data);
    });
  }, [limit]);
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 12;

const totalPages = Math.ceil(posts.length / postsPerPage);

const paginatedPosts =
  posts.length > postsPerPage
    ? posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
    : posts;


  return (
    <div className="w-full">
      {showHero && (
        <PageHero
          title="Our Activity"
          subtitle="   We’re on a mission to simplify digital experiences for everyone
                — startups, creators, and enterprises alike."
        />
      )}

      <section className="pb-10 pt-10 bg-muted/50 dark:bg-background border-t border-border dark:bg-blacksection dark:border-strokedark  border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black dark:text-white ">
          {showIntro && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Activity
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We’re on a mission to simplify digital experiences for everyone
                — startups, creators, and enterprises alike.
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
           {paginatedPosts.map((post) => (
  <Link href={`/activity/${post.id}`} key={post.id}>
                <div className="group flex flex-col h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white dark:bg-blacksection dark:border-strokedark  border cursor-pointer">
                  {/* Image */}
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1 p-5">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 break-words">
                        {post.detail}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                      {post.datePost.toDate().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Button */}
          {showMoreButton && (
            <div className="flex justify-center">
              <Link href="/activity">
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium">
                  View More
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
      {posts.length > postsPerPage && (
  <Pagination className="my-6 flex justify-center">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
        />
      </PaginationItem>

      {[...Array(totalPages)].map((_, i) => (
        <PaginationItem key={i}>
          <button
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-muted text-gray-700 dark:text-white"
            }`}
          >
            {i + 1}
          </button>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationNext
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={
            currentPage === totalPages
              ? "pointer-events-none opacity-50"
              : ""
          }
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)}

    </div>
  );
}
