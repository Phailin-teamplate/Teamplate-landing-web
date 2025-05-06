// lib/fetchStackLogos.ts
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const fetchStackLogos = async (): Promise<Record<string, string>> => {
  const folderRef = ref(storage, "Stacks");

  try {
    const result = await listAll(folderRef);
    const entries = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        const fileName = item.name.split(".")[0]; // Remove file extension
        return [fileName.toLowerCase(), url];
      })
    );
    return Object.fromEntries(entries);
  } catch (error) {
    console.error("Error fetching Stack logos:", error);
    return {};
  }
};
