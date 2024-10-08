import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'xvqd5hqf', // Your Sanity project ID
  dataset: 'production',        // Your dataset name (likely 'production')
  apiVersion: '2022-03-07',     // Use current date to get the latest API version
  token: 'sklZ0ib01037CYaCAycl0EHUNsurn3iWzUNTKE92LLg5S7Xgje9zdA7fR2CpNYyW6rYhoBHPPJgiYZ6wSEI96bHNFgcPsqU1oO79QTIo7TzJvkJajI8XoAgwSW3bbMo5U8ZnIk7P6mRHfiCUQXmMJQzbMGKuFjU5K0DtLNSLJRbGYJYW61L0',
  useCdn: true,                 // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
