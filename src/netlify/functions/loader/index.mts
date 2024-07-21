import type { Handler } from "@netlify/functions";
import { getTimeByHalfHour } from "../../../utils/get-time-by-halfhour";
import { loadProxy } from "../../../utils/proxy";
import { cyrb53 } from "../../../utils/cyrb53";
import { getCacheData, setCacheData } from "../../../data/proxy-cache";

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "public, max-age=1800",
  // allow CORS
  "Access-Control-Allow-Origin": "*",
};

/**
 * Get Firebase cached data or fetch it from the server and cache it
 */
export const handler: Handler = async (event, context) => {
  const queryParams = event.queryStringParameters;
  const { url } = queryParams as { url: string };

  const timestamp = getTimeByHalfHour();
  const hash = cyrb53(`${url}-${timestamp}`);

  try {
    const data = await loadProxy(event);

    await setCacheData(hash, data);

    return {
      statusCode: 200,
      headers,
      body: data || "",
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
