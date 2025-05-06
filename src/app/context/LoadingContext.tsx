"use client";

import { createContext, useContext, useState } from "react";

// Define the context type
const LoadingContext = createContext<{
  loading: boolean;
  setLoading: (v: boolean) => void;
}>({
  loading: true,
  setLoading: () => {},
});

// Provider component
export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook to use loading context
export const useLoading = () => useContext(LoadingContext);
