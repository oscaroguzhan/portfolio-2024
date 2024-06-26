
import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  apiVersion: "2021-03-25",
}

// set up the client the fetching data in the getProps page function

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source);