import { doc, getDoc, setDoc } from "firebase/firestore";
import { cyrb53 } from "../utils/cyrb53";
import { db } from "../utils/firebase-firestore";
import { getTimeByHalfHour } from "../utils/get-time-by-halfhour";

export const getCacheData = async <T>(url: string) => {
  const timestamp = getTimeByHalfHour();
  const hash = cyrb53(`${url}-${timestamp}`);

  const docRef = doc(db, "proxy-caches", hash);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().data.value as T;
  }

  return null;
};

export const setCacheData = async (hash: string, data: any) => {
  const docRef = doc(db, "proxy-caches", hash);
  await setDoc(docRef, {
    data: {
      value: data,
    },
    createdAt: getTimeByHalfHour(),
  });
};
