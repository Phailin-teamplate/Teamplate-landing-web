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
    <form onSubmit={handleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Login"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
