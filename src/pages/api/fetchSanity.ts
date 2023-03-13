import { sanityClient as client } from './sanityClient';
import { groq } from 'next-sanity';

export const fetchSanity = async (query: string) => {
    return client.fetch(query);
}