// featureData.tsx
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebase";
import { Feature } from "../../types/feature";

const sampleTitles = [
  "Outsourcing Development",
  "IT Business Consulting",
  "IT Service Development and Operation",
  "IT Education",
  "AI Data Collection and Refinement",
  "IT Startup Support",
];

const sampleDescriptions = [
  "We develop and deliver websites, mobile apps, and more tailored to our customers’ requests.",
  "We provide IT business consulting for companies.",
  "We develop and operate various IT services tailored for the local market in Laos.",
  "We provide training in skills such as computer programming and graphic design for students.",
  "We collect, refine, and provide various types of data for AI training.",
  "We support and provide mentoring for local IT startups in Laos.",
];

export const fetchFeatures = async (): Promise<Feature[]> => {
  const folderRef = ref(storage, "features");
  try {
    const result = await listAll(folderRef);
    const urls = await Promise.all(result.items.map((item) => getDownloadURL(item)));

    return urls.slice(0, sampleTitles.length).map((url, i) => ({
      id: i + 1,
      icon: url,
      title: sampleTitles[i],
      description: sampleDescriptions[i],
    }));
  } catch (error) {
    console.error("Failed to fetch feature icons:", error);
    return [];
  }
};
