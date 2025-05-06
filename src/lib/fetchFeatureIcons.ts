import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Adjust path if needed

export const fetchFeatureIcons = async (): Promise<string[]> => {
  const folderRef = ref(storage, "features");

  try {
    const result = await listAll(folderRef);
    const urls = await Promise.all(result.items.map((itemRef) => getDownloadURL(itemRef)));
    return urls;
  } catch (error) {
    console.error("Error loading feature icons:", error);
    return [];
  }
};
