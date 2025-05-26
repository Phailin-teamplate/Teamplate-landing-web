import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const fetchLogoUrls = async () => {
  try {
    const lightRef = ref(storage, "logos/TEAMPLATE (2).png");
    const darkRef = ref(storage, "logos/TEAMPLATE.png");

    const [lightUrl, darkUrl] = await Promise.all([
      getDownloadURL(lightRef),
      getDownloadURL(darkRef),
    ]);

    return {
      light: lightUrl,
      dark: darkUrl,
    };
  } catch (error) {
    console.error("Error loading logo URLs:", error);
    return { light: "", dark: "" };
  }
};