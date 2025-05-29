"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/src/lib/firebase";

type UserRole = "admin" | "user" | "restaurant";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  role: UserRole | null;
  roleLoaded: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  role: null,
  roleLoaded: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<UserRole | null>(null);
  const [roleLoaded, setRoleLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        try {
          const docRef = doc(db, "users", firebaseUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const firebaseRole = data.role;
            if (["admin", "user", "restaurant"].includes(firebaseRole)) {
              setRole(firebaseRole);
            } else {
              setRole(null);
            }
          } else {
            setRole(null);
          }
        } catch (error) {
          console.error("Failed to fetch role:", error);
          setRole(null);
        } finally {
          setRoleLoaded(true);
        }
      } else {
        setRole(null);
        setRoleLoaded(true);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, role, roleLoaded }}>
      {children}
    </AuthContext.Provider>
  );
}
