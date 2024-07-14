import { doc, getDoc, setDoc } from "firebase/firestore";
import { getTimeByHalfHour } from "../../../src/utils/get-time-by-halfhour";
import loadProxy from "../../../src/utils/proxy";
import { db } from "../../../src/utils/firebase-firestore";

const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
};

const getCacheData = async (hash: string) => {
  const docRef = doc(db, "proxy-caches", hash);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().data.value;
  }

  return null;
};

const setCacheData = async (hash: string, data: any) => {
  const docRef = doc(db, "proxy-caches", hash);
  await setDoc(docRef, {
    data: {
      value: data,
    },
    createdAt: getTimeByHalfHour(),
  });
};

/**
 * Get Firebase cached data or fetch it from the server and cache it
 */
exports.handler = async (event, context) => {
  const queryParams = event.queryStringParameters;
  const { url } = queryParams;

  const timestamp = getTimeByHalfHour();
  const hash = cyrb53(`${url}-${timestamp}`);

  const cachedData = await getCacheData(hash);

  if (!cachedData) {
    try {
      const data = await loadProxy(event);

      await setCacheData(hash, data);

      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(cachedData),
  };
};
