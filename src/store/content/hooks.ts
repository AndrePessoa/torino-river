import { useSelector } from "react-redux";
import { asHTML } from "@prismicio/client";
import { clubs, TClubsData, bridges, TBridgesData } from "../../data";
import { useAllPrismicByType } from "../common/hook";
import { distanceSelector } from "./selectors";

export function useClubs() {
  return useAllPrismicByType("club", (docs) => {
    console.log("docs", docs);

    return Object.entries(clubs || {}).reduce((acc, [key, club]) => {
      const doc = docs?.find((doc) => doc.uid === key);

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
  });
}

export function useBridges() {
  return useAllPrismicByType("bridge", (docs) => {
    // merge the data from the data file with the data from the API
    return Object.entries(bridges || {}).reduce((acc, [key, bridge]) => {
      const doc = docs?.find((doc) => doc.uid === key);

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
  });
}

export function useDistance() {
  const distance = useSelector(distanceSelector);

  return distance;
}
