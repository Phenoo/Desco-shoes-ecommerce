import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '3n6g7ic1',
    dataset: 'production',
    apiVersion: '2022-09-18',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);