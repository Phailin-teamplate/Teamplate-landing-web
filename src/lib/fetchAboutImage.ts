// lib/fetchAboutImage.ts
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const fetchAboutImage = async (filename: string): Promise<string> => {
  const fileRef = ref(storage, `abouts/${filename}`);
  return await getDownloadURL(fileRef);
};
