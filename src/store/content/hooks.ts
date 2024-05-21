import { asHTML } from "@prismicio/client";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import {
  TClubsData,
  clubs,
  bridges,
  TBridgeData,
  TBridgesData,
} from "../../data";
import { useMemo } from "react";

export function useClubs() {
  const [clubDocs, { state }] = useAllPrismicDocumentsByType("club");

  const clubsResult = useMemo(() => {
    return Object.entries(clubs).reduce((acc, [key, club]) => {
      const doc = clubDocs?.find((doc) => doc.uid === key);

      const content = doc?.data.content
        ? asHTML(doc.data.content) || ""
        : club.content;
      const activities =
        doc?.data.activities.map(
          ({ activity }: { activity: string }) => activity
        ) || club.activities;
      const site = doc?.data.site.url || club.site;

      return {
        ...acc,
        [key]: {
          name: club.name,
          site,
          coords: club.coords,
          description: club.description,
          thumbnail: club.thumbnail,
          logo: club.logo,
          content,
          activities,
        },
      };
    }, {} as TClubsData);
  }, [clubDocs]);

  return {
    data: clubsResult,
    loading: state === "loading",
    error: state === "failed",
  };
}

export function useBridges() {
  const [bridgeDoc, { state }] = useAllPrismicDocumentsByType("bridge");

  const bridgesResult = useMemo(() => {
    // merge the data from the data file with the data from the API
    return Object.entries(bridges).reduce((acc, [key, bridge]) => {
      const doc = bridgeDoc?.find((doc) => doc.uid === key);

      const content = doc?.data.description
        ? asHTML(doc.data.description) || ""
        : bridge.description;

      return {
        ...acc,
        [key]: {
          name: bridge.name,
          schema: bridge.schema,
          photo: bridge.photo,
          coords: bridge.coords,
          description: content,
        },
      };
    }, {} as TBridgesData);
  }, [bridgeDoc]);

  return {
    data: bridgesResult,
    loading: state === "loading",
    error: state === "failed",
  };
}
