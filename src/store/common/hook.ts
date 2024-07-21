import { useCallback, useEffect, useMemo, useState } from "react";
import { PrismicDocument } from "@prismicio/client/*";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { TPrismicData } from "../types";
import { getCacheData } from "../../data/proxy-cache";

export const useIsConnected = () => {
  const [isConnected, setIsConnected] = useState(navigator.onLine);

  const handleOnline = () => setIsConnected(true);
  const handleOffline = () => setIsConnected(false);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isConnected;
};

export const useLocalCache = <T>(key: string) => {
  const [, setForceUpdate] = useState(0);

  const data = useMemo(() => {
    const data = localStorage.getItem(key);

    try {
      return JSON.parse(data || "");
    } catch (e) {
      return undefined;
    }
  }, [key]);

  const cacheData = useCallback(
    (data: T) => {
      let cleanData: string;

      try {
        cleanData = JSON.stringify(data);
      } catch (e) {
        cleanData = key.toString();
      }

      if (cleanData) {
        localStorage.setItem(
          "cache-update-time",
          new Date().getTime().toString()
        );
        localStorage.setItem(key, cleanData);
      }

      setForceUpdate((prev) => prev + 1);
    },
    [key]
  );

  return [data, cacheData] as const;
};

export const useLastLocalCacheData = () => {
  const lastUpdateTime = useMemo(() => {
    const lastUpdateTime = localStorage.getItem("cache-update-time");

    return lastUpdateTime ? new Date(parseInt(lastUpdateTime, 10)) : null;
  }, []);

  return lastUpdateTime;
};

type TFectchProps<T> = {
  url: string;
  onStatus: (status: { loading: boolean; error: any }) => void;
  onData: (data: T) => void;
  errorMessage?: string;
  noCache?: boolean;
  cacheDB?: boolean;
};

export const useFetch = <T>({
  url,
  onStatus,
  onData,
  errorMessage,
  noCache,
  cacheDB = false,
}: TFectchProps<T>) => {
  const [data, cacheData] = useLocalCache<T>(url);
  const [tryCacheDB, setTryCacheDB] = useState(cacheDB);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!noCache) return;

    onStatus({ loading: true, error: null });

    if (tryCacheDB) {
      getCacheData<T>(url)
        .then((data) => {
          if (data) {
            onData(data);
            onStatus({ loading: false, error: null });

            return;
          }

          setTryCacheDB(false);
        })
        .catch(() => {
          setTryCacheDB(false);
        });
    }

    fetch(url, { signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onData(data);
        cacheData(data);
        onStatus({ loading: false, error: null });
      })
      .catch((error) => {
        if (abortController.signal.aborted) return;

        if (data) {
          onStatus({ loading: false, error: null });

          return;
        }

        console.error("Error fetching data", error.message);

        onStatus({ loading: false, error: error.message });
      });

    return () => {
      abortController.abort(errorMessage || "Fetch aborted");
    };
  }, [tryCacheDB]);
};

export const useAllPrismicByType = <T>(
  type: string,
  reducer: (
    data: PrismicDocument<Record<string, any>, string, string>[] | undefined
  ) => T
): TPrismicData<T> => {
  const [cache, cacheData] = useLocalCache<T>(`prismic.${type}`);
  const [cacheState, setCacheState] = useState<
    "loading" | "loaded" | "failed" | "cached"
  >("loading");
  const [docs, { state }] = useAllPrismicDocumentsByType(type);

  const result = useMemo(() => {
    if (state === "loading" || state === "idle") {
      return {};
    }

    try {
      const reducedCache = reducer(docs);

      console.log("reducedCache", reducedCache, cache, state);

      if (state === "loaded") {
        cacheData(reducedCache);
        setCacheState("loaded");

        return reducedCache;
      } else if (state === "failed") {
        setCacheState(cache ? "cached" : "failed");

        return cache || {};
      }
    } catch (e) {
      console.error(e);
      setCacheState("failed");

      return cache;
    }
  }, [docs, state, cacheData]);

  return {
    data: result,
    loading: cacheState === "loading",
    error: cacheState === "failed",
  };
};
