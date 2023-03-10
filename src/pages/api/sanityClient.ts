import { createClient } from "next-sanity";
import type { SanityClient } from "@sanity/client";

export const sanityClient: SanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: false
});