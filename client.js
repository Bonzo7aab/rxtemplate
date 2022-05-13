import sanityClient, { } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export default sanityClient({
    projectId: "okl28iha",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
