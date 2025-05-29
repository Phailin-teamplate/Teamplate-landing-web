"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Get role from Firestore
      const docSnap = await getDoc(doc(db, "users", uid));
      const userRole = docSnap.exists() ? docSnap.data().role : null;

      if (userRole === "admin") {
        await auth.currentUser?.getIdToken(true); // Force refresh token to get custom claim
        router.push("/dashboard");
      } else {
        setError("Access denied. Admins only.");
        await auth.signOut();
      }
    } catch (error) {
      console.error("Login failed.", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
       <div className="max-w-3xl mx-auto px-4 py-10 text-black dark:text-white">

    <form
  onSubmit={handleLogin}
  className="max-w-md mx-auto mt-10 bg-white dark:bg-blacksection dark:border-strokedark p-8 rounded-xl shadow-md space-y-6"
>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email
    </label>
    <input
      id="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="you@example.com"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
    />
  </div>

  <div>
    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Password
    </label>
    <input
      id="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="••••••••"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
    />
  </div>

  <button
    type="submit"
    disabled={isLoading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isLoading ? "Signing in..." : "Login"}
  </button>

  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
</form>
</div>
  );
}
