import * as prismic from "@prismicio/client";

export const repositoryName = "torino-river";

export const client = prismic.createClient(repositoryName, {
  accessToken: "",
  routes: [],
});
